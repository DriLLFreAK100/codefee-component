import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-tab',
  styleUrl: 'cf-tab.scss',
  shadow: true,
})
export class CfTab {

  render() {
    return (
      <Host>
        <cf-typography type="subtitle1">
          <slot />
        </cf-typography>
      </Host>
    );
  }

}
