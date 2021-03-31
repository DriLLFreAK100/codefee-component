import {
  Component,
  Element,
  h,
  Host,
} from '@stencil/core';

@Component({
  tag: 'cf-table-foot',
  styleUrl: 'cf-table-foot.scss',
  shadow: true,
})
export class CfTableFoot {
  @Element() el: HTMLElement;

  componentDidRender() {
    let slotted = this.el.shadowRoot.querySelector('slot') as HTMLSlotElement;
    const rows = slotted.assignedNodes().filter((node) => { return node.nodeName !== '#text'; });
    rows.forEach((row: HTMLCfTableRowElement) => {
      row.type = 'foot';

      slotted = row.shadowRoot.querySelector('slot') as HTMLSlotElement;
      const cells = slotted.assignedNodes().filter((node) => { return node.nodeName !== '#text'; });
      cells.forEach((cell: HTMLCfTableRowElement) => {
        cell.type = 'foot';
      });
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
