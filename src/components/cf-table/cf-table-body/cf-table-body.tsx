import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { flatten, forEachHtmlCollection } from '../../../utils';

@Component({
  tag: 'cf-table-body',
  styleUrl: 'cf-table-body.scss',
  shadow: true,
})
export class CfTableBody {
  @Element() el: HTMLElement;
  @Prop() bodyHeight: number = 100;
  @Prop() rowHeight: number = 36;
  @Prop() virtualize: boolean = false;
  @State() virtualRows: HTMLCfTableRowElement[] = [];
  processingChildren: boolean = false;

  connectedCallback() {
    if (this.virtualize) {
      this.initVirtualization();

      const observer = new MutationObserver(this.handleChildrenChange.bind(this));
      observer.observe(this.el, { childList: true });

      this.processingChildren = false;
    }
  }

  handleChildrenChange() {
    if (!this.processingChildren) {
      this.initVirtualization();
      return;
    }

    this.processingChildren = false;
  }

  initVirtualization() {
    forEachHtmlCollection(this.el.children, (row: HTMLCfTableRowElement) => {
      row.type = 'body';
    });

    this.virtualRows = Array.from(this.el.children) as HTMLCfTableRowElement[];

    forEachHtmlCollection(this.el.children, (row: HTMLCfTableRowElement) => {
      row.remove();
    });

    this.processingChildren = true;
  }

  render() {
    const className = flatten(`
      ${this.virtualize ? 'virtualize' : ''}
    `);

    return (
      <Host class={className}>
        {this.virtualize ? (
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
