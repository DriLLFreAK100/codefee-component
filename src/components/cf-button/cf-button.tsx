import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-button',
  styleUrl: 'cf-button.css',
  shadow: true,
})
export class CfButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
