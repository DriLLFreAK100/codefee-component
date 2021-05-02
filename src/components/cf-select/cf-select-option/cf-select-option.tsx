import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-select-option',
  styleUrl: 'cf-select-option.scss',
  shadow: true,
})
export class CfSelectOption {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
