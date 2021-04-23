import { Component, Element, h, Prop } from '@stencil/core';
import { flatten } from '../../../utils';
@Component({
  tag: 'cf-dialog-overlay',
  styleUrl: 'cf-dialog-overlay.scss',
  shadow: false,
})
export class CfDialogOverlay {
  @Element() el: HTMLCfDialogOverlayElement;
  @Prop({ mutable: true, reflect: true }) show: boolean;

  public handleClickOverlayArea() {
    this.show = false;
    this.cleanupAfterClose();
  }

  private cleanupAfterClose() {
    this.el.childNodes[0].childNodes.forEach(c => c.remove());
  }

  render() {
    const className = flatten(`
      dialogOverlay
      ${this.show ? 'show' : ''}
    `);

    return (
      <div class={className} onClick={this.handleClickOverlayArea.bind(this)}>
      </div>
    );
  }

}
