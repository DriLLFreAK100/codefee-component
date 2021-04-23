import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cf-dialog-overlay',
  styleUrl: 'cf-dialog-overlay.scss',
  shadow: true,
})
export class CfDialogOverlay {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
