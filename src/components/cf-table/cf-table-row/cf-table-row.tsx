import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { flatten, forEachHtmlCollection } from '../../../utils';
import { TableSegment } from '../../../common/types';

@Component({
  tag: 'cf-table-row',
  styleUrl: 'cf-table-row.scss',
  shadow: true,
})
export class CfTableRow {
  @Element() el: HTMLCfTableRowElement;
  @Event() tblRowInit: EventEmitter<HTMLCfTableRowElement>;
  @Prop() type: TableSegment = 'body';

  connectedCallback() {
    this.tblRowInit.emit(this.el);
  }

  componentWillLoad() {
    const totalSize = this.el.children.length;

    forEachHtmlCollection(this.el.children, (cell: HTMLCfTableCellElement) => {
      cell.type = this.type;
      cell.style.flexBasis = `${(cell.size / totalSize) * 100}%`;
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
