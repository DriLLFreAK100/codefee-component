import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-tabs',
  styleUrl: 'cf-tabs.scss',
  shadow: true,
})
export class CfTabs {

  render() {
    return (
      <Host>
        <div class="tabs__container">
          <slot />
        </div>
        <div class="tabs__content">
          <slot name="content" />
        </div>
      </Host>
    );
  }

}
