import { Component, Element, h, Host } from '@stencil/core';
import { forEachHtmlCollection } from '../../../utils';

@Component({
  tag: 'cf-table-foot',
  styleUrl: 'cf-table-foot.scss',
  shadow: true,
})
export class CfTableFoot {
  @Element() el: HTMLElement;

  connectedCallback() {
    forEachHtmlCollection(this.el.children, (row: HTMLCfTableRowElement) => {
      row.type = 'foot';
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
