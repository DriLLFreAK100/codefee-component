import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cf-dialog',
  styleUrl: 'cf-dialog.scss',
  shadow: true,
})
export class CfDialog {
  @Prop() dialogTitle: string;
  @Prop() dialogStyle: CSSStyleDeclaration = { height: '400px', width: '400px' } as CSSStyleDeclaration;

  render() {
    const style: CSSStyleDeclaration = {
      ...this.dialogStyle,
      left: `calc(50vw - ${this.dialogStyle.width} / 2)`,
      top: `calc(50vh - ${this.dialogStyle.height} / 2)`,
    }

    return (
      <Host>
        <div class="dialog" style={style as any}>
          <div class="dialog__title">
            <cf-typography>{this.dialogTitle}</cf-typography>
          </div>
          <div class="dialog__content">

          </div>
        </div>
      </Host>
    );
  }

}
