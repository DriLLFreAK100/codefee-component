import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cf-dialog',
  styleUrl: 'cf-dialog.scss',
  shadow: true,
})
export class CfDialog {
  @Prop() dialogTitle: string;

  render() {
    return (
      <Host>
        <div class="dialog__title">
          <cf-typography>{this.dialogTitle}</cf-typography>
        </div>
        <slot></slot>
      </Host>
    );
  }

}
