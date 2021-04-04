import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'cf-table',
  styleUrl: 'cf-table.scss',
  shadow: true,
})
export class CfTable {
  render() {
    return (
      <Host role="table">
        <slot name="head" />
        <slot name="body" />
        <slot name="foot" />
      </Host>
    );
  }

}
