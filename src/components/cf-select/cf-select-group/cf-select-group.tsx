import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-select-group',
  styleUrl: 'cf-select-group.scss',
  shadow: true,
})
export class CfSelectGroup {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
