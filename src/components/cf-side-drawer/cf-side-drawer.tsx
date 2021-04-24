import { flatten } from '../../utils';
import {
  Component,
  Event,
  EventEmitter,
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
  @Event() close: EventEmitter<MouseEvent>;

  handleOnClickClose(event: MouseEvent) {
    this.close.emit(event);
  }

  render() {
    const className = flatten(`
      cfSideDrawer
      ${this.visible ? 'visible' : ''}
      ${this.position}
    `);

    return (
      <Host>
        <div class={className}>
          <div class="cfSideDrawer__title">
            <cf-typography type="h5">{this.drawerTitle}</cf-typography>
            <div>
              <i class="fas fa-times" onClick={this.handleOnClickClose.bind(this)} />
            </div>
          </div>
          <cf-divider />
          <div class="cfSideDrawer__drawerContent">
            <slot name="drawer-content" />
          </div>
        </div>
        <div class={`overlay ${this.visible ? 'visible' : ''}`} onClick={this.handleOnClickClose.bind(this)} />
      </Host>
    );
  }

}
