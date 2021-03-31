import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-table',
  styleUrl: 'cf-table.scss',
  shadow: true,
})
export class CfTable {

  render() {
    return (
      <Host>
        <cf-card>
          <slot name="head" />
          <slot name="body" />
          <slot name="foot" />
        </cf-card>
      </Host>
    );
  }

}
