import { Component, Element, h, Host } from '@stencil/core';
import { forEachHtmlCollection } from '../../../utils';

@Component({
  tag: 'cf-table-head',
  styleUrl: 'cf-table-head.scss',
  shadow: true,
})
export class CfTableHead {
  @Element() el: HTMLElement;

  connectedCallback() {
    forEachHtmlCollection(this.el.children, (row: HTMLCfTableRowElement) => {
      row.type = 'head';
    });
  }

  render() {
    return (
      <Host>
        <div>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
