import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-notification',
  styleUrl: 'cf-notification.scss',
  shadow: false,
})
export class CfNotification {
  render() {
    return (
      <Host id="cf-notification" class="cfNotification">
        <div class="cfNotification__messageContainer"></div>
      </Host>
    );
  }

}
