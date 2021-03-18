import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-app-header',
  styleUrl: 'cf-app-header.scss',
  shadow: true,
})
export class CfAppHeader {

  render() {
    return (
      <Host>
        <div class="cfAppHeader">

        </div>
      </Host>
    );
  }

}
