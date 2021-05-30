import { Component, Host, h, Prop } from '@stencil/core';
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from './base';
import { ITblColumn } from './cf-table.com';

@Component({
  tag: 'cf-table',
  styleUrl: 'cf-table.scss',
  shadow: true,
})
export class CfTable {
  @Prop() columns: ITblColumn[] = [];
  @Prop() data: any[] = [];
  @Prop() virtualize: boolean = false;

  render() {
    return (
      <Host>
        <Table>
          <Thead columns={this.columns} />
          <Tbody columns={this.columns} data={this.data} />
          <Tfoot>
            <Tr>
              <Td>Footer 1</Td>
              <Td>Footer 2</Td>
            </Tr>
          </Tfoot>
        </Table>
      </Host>
    );
  }
}
