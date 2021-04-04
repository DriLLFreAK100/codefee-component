import {
  Component,
  Element,
  h,
  Host,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'cf-table-foot',
  styleUrl: 'cf-table-foot.scss',
  shadow: true,
})
export class CfTableFoot {
  @Element() el: HTMLElement;

  @Listen('tblRowInit')
  handleRowInit(event: CustomEvent<HTMLCfTableRowElement>) {
    event.detail.type = 'foot';
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
