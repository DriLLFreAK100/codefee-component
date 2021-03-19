import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';

export type SideDrawerPosition = 'left' | 'right';
@Component({
  tag: 'cf-side-drawer',
  styleUrl: 'cf-side-drawer.scss',
  shadow: true,
})
export class CfSideDrawer {
  @Prop() drawerTitle: string = 'Menu';
  @Prop() position: SideDrawerPosition = 'left';
  @Prop({ mutable: true, reflect: true }) visible: boolean = false;
  @Prop() onClose: () => void;

  render() {
    return (
      <Host>
        <div class={`cfSideDrawer ${this.visible ? 'visible' : ''} ${this.position}`}>
          <div class="cfSideDrawer__title">
            <cf-typography type="h5">{this.drawerTitle}</cf-typography>
            <div onClick={this.onClose}>
              <cf-icon-button icon="fas fa-times" />
            </div>
          </div>
          <cf-divider />
          <div class="cfSideDrawer__drawerContent">
            <slot name="drawer-content" />
          </div>
        </div>
        <div class={`overlay ${this.visible ? 'visible' : ''}`} onClick={this.onClose} />
      </Host>
    );
  }

}
