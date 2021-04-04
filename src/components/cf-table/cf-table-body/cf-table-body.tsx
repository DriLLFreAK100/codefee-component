import {
  Component,
  Element,
  h,
  Host,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'cf-table-body',
  styleUrl: 'cf-table-body.scss',
  shadow: true,
})
export class CfTableBody {
  @Element() el: HTMLElement;

  @Listen('tblRowInit')
  handleRowInit(event: CustomEvent<HTMLCfTableRowElement>) {
    event.detail.type = 'body';
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
