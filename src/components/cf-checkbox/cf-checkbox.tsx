import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-checkbox',
  styleUrl: 'cf-checkbox.scss',
  shadow: true,
})
export class CfCheckbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
