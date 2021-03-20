import { Event, EventEmitter, HTMLStencilElement } from '@stencil/core/internal';
import { INavMenu } from './cf-app-header-menu/cf-app-header-menu';
import { SlotNames } from '../../common/slot-names';
import {
  Component,
  Element,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'cf-app-header',
  styleUrl: 'cf-app-header.scss',
  shadow: true
})
export class CfAppHeader {
  @Element() el: HTMLStencilElement;
  @Event() drawerOpenChange: EventEmitter<boolean>;
  @Prop() appName: string;
  @Prop() drawerTitle: string;
  @Prop({ mutable: true, reflect: true }) drawerOpen: boolean = false;
  @Prop() navMenus: INavMenu[];
  @State() hasNavSlot: boolean = false;

  handleClickMenuDrawerIcon() {
    this.drawerOpen = true;
    this.drawerOpenChange.emit(true);
  };

  handleCloseMenuSideDrawer() {
    this.drawerOpen = false;
    this.drawerOpenChange.emit(false);
  }

  componentWillLoad() {
    this.hasNavSlot = !!this.el.querySelector('[slot=nav-menu]');
  }

  renderMenuIcon() {
    return (
      this.hasNavSlot && (
        <div
          class="cfAppHeader__start__drawerIcon"
          onClick={this.handleClickMenuDrawerIcon.bind(this)}
        >
          <cf-icon-button icon="fas fa-bars" />
        </div>
      )
    )
  }

  render() {
    return (
      <Host>
        <div class="cfAppHeader">
          <div class="cfAppHeader__start">
            {this.renderMenuIcon()}
            <cf-typography type="h5">
              {this.appName}
            </cf-typography>
          </div>
          <div class="cfAppHeader__end">
            <slot name="action-menu" />
          </div>
        </div>
        <cf-side-drawer
          drawerTitle={this.drawerTitle}
          position="left"
          visible={this.drawerOpen}
          onClose={this.handleCloseMenuSideDrawer.bind(this)}
        >
          <nav
            class="cfAppHeader__nav"
            slot={SlotNames['cfSideDrawer-drawer-content']}
          >
            <ul>
              <slot name="nav-menu" />
            </ul>
          </nav>
        </cf-side-drawer>
      </Host>
    );
  }
}
