import {
  Component,
  Element,
  h,
  Host,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'cf-table-head',
  styleUrl: 'cf-table-head.scss',
  shadow: true,
})
export class CfTableHead {
  @Element() el: HTMLElement;

  @Listen('tblRowInit')
  handleRowInit(event: CustomEvent<HTMLCfTableRowElement>) {
    event.stopPropagation();
    event.detail.type = 'head';
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
