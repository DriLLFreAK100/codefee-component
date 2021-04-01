import sumBy from 'lodash-es/sumBy';
import { TableSegment } from '../../../common/types';
import {
  Component,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { flatten } from '../../../utils';

@Component({
  tag: 'cf-table-row',
  styleUrl: 'cf-table-row.scss',
  shadow: true,
})
export class CfTableRow {
  @Element() el: HTMLElement;
  @Prop() type: TableSegment = 'body';
  @Prop() hoverHighlight: boolean = false;

  componentDidRender() {
    let slotted = this.el.shadowRoot.querySelector('slot') as HTMLSlotElement;
    const cells = slotted.assignedNodes().filter((node) => { return node.nodeName !== '#text'; });
    const totalSize = sumBy(cells, 'size');

    cells.forEach((cell: HTMLCfTableCellElement) => {
      cell.style.flexBasis = `${cell.size / totalSize * 100}%`;
    });
  }

  render() {
    const className = flatten(`
      ${this.type}
      ${this.hoverHighlight ? 'hoverHighlight' : ''}
    `);

    return (
      <Host class={className}>
        <slot />
      </Host>
    );
  }
}
