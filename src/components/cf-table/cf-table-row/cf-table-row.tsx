import sumBy from 'lodash-es/sumBy';
import { flatten } from '../../../utils';
import { TableSegment } from '../../../common/types';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'cf-table-row',
  styleUrl: 'cf-table-row.scss',
  shadow: true,
})
export class CfTableRow {
  @Element() el: HTMLCfTableRowElement;
  @Event() tblRowInit: EventEmitter<HTMLCfTableRowElement>;
  @Prop() type: TableSegment = 'body';
  @State() cells: HTMLCfTableCellElement[] = [];

  @Listen('tblCellInit')
  handleCellInit(event: CustomEvent<HTMLCfTableCellElement>) {
    this.cells = [...this.cells, event.detail];
  }

  connectedCallback() {
    this.tblRowInit.emit(this.el);
  }

  componentWillLoad() {
    const totalSize = sumBy(this.cells, 'size');

    this.cells.forEach((cell: HTMLCfTableCellElement) => {
      cell.type = this.type;
      cell.style.flexBasis = `${cell.size / totalSize * 100}%`;
    });
  }

  render() {
    const className = flatten(`
      ${this.type}
    `);

    return (
      <Host class={className}>
        <slot />
      </Host>
    );
  }
}
