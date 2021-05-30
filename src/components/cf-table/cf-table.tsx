import Table from './components/table';
import Tbody from './components/tbody';
import Tfoot from './components/tfoot';
import Thead from './components/thead';
import { getTotalSize } from './cf-table.utils';
import { ITblColumn, ITblFooterColumn } from './cf-table.com';
import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-table',
  styleUrl: 'cf-table.scss',
  shadow: true,
})
export class CfTable {
  @Prop() columns: ITblColumn[] = [];
  @Prop() data: any[] = [];
  @Prop() footers: ITblFooterColumn[] = [];
  @Prop() virtualize: boolean = false;
  @Event() rowClick: EventEmitter<any>;

  private handleOnRowClick(datum: any): void {
    this.rowClick.emit(datum);
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
            onRowClick={this.handleOnRowClick.bind(this)}
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
