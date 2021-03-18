import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-app-header',
  styleUrl: 'cf-app-header.css',
  shadow: true,
})
export class CfAppHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
