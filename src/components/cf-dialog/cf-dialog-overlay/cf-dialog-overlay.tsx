import { Component, Host, h, Prop } from '@stencil/core';
import { flatten } from '../../../utils';

@Component({
  tag: 'cf-dialog-overlay',
  styleUrl: 'cf-dialog-overlay.scss',
  shadow: true,
})
export class CfDialogOverlay {
  @Prop({ mutable: true, reflect: true }) show: boolean;

  public handleClickOverlayArea() {
    this.show = false;
  }

  render() {
    const className = flatten(`
      ${this.show ? 'show' : ''}
    `);

    return (
      <Host class={className}>
        <div class="dialogOverlay" onClick={this.handleClickOverlayArea.bind(this)}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
