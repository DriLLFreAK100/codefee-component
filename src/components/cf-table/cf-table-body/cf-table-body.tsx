import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import { flatten } from '../../../utils';

@Component({
  tag: 'cf-table-body',
  styleUrl: 'cf-table-body.scss',
  shadow: true,
})
export class CfTableBody {
  @Element() el: HTMLElement;
  @Prop() bodyHeight: number = 100;
  @Prop() rowHeight: number = 36;
  @Prop() virtualRows: HTMLCfTableRowElement[];

  connectedCallback() {
    if (this.virtualRows) {
      this.initVirtualization(this.virtualRows);
    }
  }

  @Watch('virtualRows')
  handleVirtualizedRowsChange(newItems: HTMLCfTableRowElement[]) {
    this.initVirtualization(newItems);
  }

  initVirtualization(virtualRows: HTMLCfTableRowElement[]) {
    virtualRows.forEach((row: HTMLCfTableRowElement) => {
      row.type = 'body';
    });
  }

  render() {
    const className = flatten(`
      ${this.virtualRows ? 'virtualize' : ''}
    `);

    return (
      <Host class={className}>
        {this.virtualRows ? (
          <cf-virtual-scroller
            containerHeight={this.bodyHeight}
            childHeight={this.rowHeight}
            items={this.virtualRows}
          />
        ) : (
          <slot></slot>
        )}
      </Host>
    );
  }
}
