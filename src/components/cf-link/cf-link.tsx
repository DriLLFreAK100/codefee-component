import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-link',
  styleUrl: 'cf-link.css',
  shadow: true,
})
export class CfLink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
