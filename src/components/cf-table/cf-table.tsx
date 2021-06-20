import Table from './components/table';
import Tbody from './components/tbody';
import Tfoot from './components/tfoot';
import Thead from './components/thead';
import { getDefaultVirtualizationSettings, getTotalSize } from './cf-table.utils';
import { ITblColumn, ITblFooterColumn } from './cf-table.com';
import { IVirtualItem, IVirtualScrollSettings, VirtualScroll } from '../../utils';
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
  _virtualizationOption: IVirtualScrollSettings;
  @Prop() columns: ITblColumn[] = [];
  @Prop({ mutable: true }) data: IVirtualItem[] = [];
  @Prop() footers: ITblFooterColumn[] = [];
  @Prop() virtualize: boolean = false;
  @Prop() virtualizationOption: IVirtualScrollSettings = {};
  @State() virtualScroll: VirtualScroll<IVirtualItem> = undefined;
  @State() tick: number = 0;
  @Event() rowClick: EventEmitter<any>;

  constructor() {
    this.handleOnRowClick = this.handleOnRowClick.bind(this);
    this.rerender = this.rerender.bind(this);
  }

  connectedCallback() {
    if (this.virtualize) {
      // 1 - Merge default options
      this.onVirtualizationOptionChange(this.virtualizationOption);

      // 2 - Init Virtual Scroll
      const {
        containerHeight,
        rowHeight,
        tolerance,
      } = this._virtualizationOption;

      this.virtualScroll = new VirtualScroll(this.data, {
        containerHeight,
        rowHeight,
        tolerance,
      });
    }
  }

  @Watch('virtualizationOption')
  onVirtualizationOptionChange(value): void {
    this._virtualizationOption = {
      ...getDefaultVirtualizationSettings(),
      ...value,
    }
  }

  private handleOnRowClick(datum: any): void {
    this.rowClick.emit(datum);
  }

  private rerender(): void {
    this.tick += 1;
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
            totalColumnSize={totalColumnSize}
            virtualize={this.virtualize}
            virtualScroll={this.virtualScroll}
            onRowClick={this.handleOnRowClick}
            rerender={this.rerender}
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
