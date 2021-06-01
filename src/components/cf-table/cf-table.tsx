import Table from './components/table';
import Tbody from './components/tbody';
import Tfoot from './components/tfoot';
import Thead from './components/thead';
import { getDefaultVirtualizationOptions, getTotalSize } from './cf-table.utils';
import { ITblColumn, ITblFooterColumn, ITblVirtualizationOption, ITblVirtualizedRow } from './cf-table.com';
import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

@Component({
  tag: 'cf-table',
  styleUrl: 'cf-table.scss',
  shadow: true,
})
export class CfTable {
  _virtualizationOption: ITblVirtualizationOption;
  @Prop() columns: ITblColumn[] = [];
  @Prop() data: ITblVirtualizedRow[] = [];
  @Prop() footers: ITblFooterColumn[] = [];
  @Prop() virtualize: boolean = false;
  @Prop() virtualizationOption: ITblVirtualizationOption = {};
  @State() virtualizedData: ITblVirtualizedRow[] = [...this.data];
  @State() lastItemIndex: number = 0;
  @Event() rowClick: EventEmitter<any>;

  connectedCallback() {
    if (this.virtualize) {
      // 1 - Merge default options
      this.onVirtualizationOptionChange(this.virtualizationOption);

      const { containerHeight, rowHeight, window } = this._virtualizationOption;

      // 2 - Mark Y-Translate position
      this.data = this.data.map((d, i) => {
        d.transform = `translate(0, ${i * rowHeight}px)`;
        return d;
      })


      // 3 - Handle first render
      const windowHeight = rowHeight * window;
      const renderBufferCount = (containerHeight + windowHeight * 2) / rowHeight;
      const renderCount = renderBufferCount > this.data.length ? this.data.length : renderBufferCount;

      this.lastItemIndex = Math.floor(renderCount - 1) - 1;
      this.virtualizedData = [...this.data].splice(0, this.lastItemIndex + 1);
    }
  }

  @Watch('virtualizationOption')
  onVirtualizationOptionChange(value): void {
    this._virtualizationOption = {
      ...getDefaultVirtualizationOptions(),
      ...value,
    }
  }

  private handleOnRowClick(datum: any): void {
    this.rowClick.emit(datum);
  }

  private handleVirtualScrolled(startIndex: number, endIndex: number): void {
    this.lastItemIndex = endIndex;
    this.virtualizedData = [...this.data].splice(startIndex, endIndex + 1);
  }

  render() {
    const totalColumnSize = getTotalSize(this.columns);

    return (
      <Host>
        <Table>
          <Thead
            columns={this.columns}
            totalColumnSize={totalColumnSize}
          />
          <Tbody
            columns={this.columns}
            data={this.data}
            lastItemIndex={this.lastItemIndex}
            totalColumnSize={totalColumnSize}
            virtualize={this.virtualize}
            virtualizationOption={this._virtualizationOption}
            virtualizedData={this.virtualizedData}
            onRowClick={this.handleOnRowClick.bind(this)}
            onVirtualScrolled={this.handleVirtualScrolled.bind(this)}
          />
          <Tfoot
            columns={this.footers}
            totalColumnSize={totalColumnSize}
          />
        </Table>
      </Host>
    );
  }
}
