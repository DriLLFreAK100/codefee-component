import { IActionMenu } from './cf-app-header-action-menu/cf-app-header-action-menu';
import { INavMenu } from './cf-app-header-menu/cf-app-header-menu';
import {
  Component,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { SlotNames } from '../../common/slot-names';
@Component({
  tag: 'cf-app-header',
  styleUrl: 'cf-app-header.scss',
  shadow: true
})
export class CfAppHeader {
  @Prop({ mutable: true, reflect: true }) actionMenus: IActionMenu[];
  @Prop() appName: string;
  @Prop() drawerTitle: string;
  @Prop() navMenus: INavMenu[];
  @State() menuSideDrawerOpen: boolean = false;

  handleClickMenuDrawerIcon() {
    this.menuSideDrawerOpen = true;
  };

  handleCloseMenuSideDrawer() {
    this.menuSideDrawerOpen = false;
  }

  renderMenuIcon() {
    return (
      this.navMenus && (
        <div
          class="cfAppHeader__start__drawerIcon"
          onClick={this.handleClickMenuDrawerIcon.bind(this)}
        >
          <cf-icon-button icon="fas fa-bars" />
        </div>
      )
    )
  }

  renderActionMenus() {
    if (this.actionMenus) {
      return this.actionMenus.map((actionMenu) => {
        return (
          <cf-app-header-action-menu actionMenu={actionMenu} />
        );
      })
    }

    return null;
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
            {this.renderActionMenus()}
          </div>
        </div>
        <cf-side-drawer
          drawerTitle={this.drawerTitle}
          position="left"
          visible={this.menuSideDrawerOpen}
          onClose={this.handleCloseMenuSideDrawer.bind(this)}
        >
          <cf-app-header-menu slot={SlotNames['cfSideDrawer-drawer-content']} menus={this.navMenus} />
        </cf-side-drawer>
      </Host>
    );
  }
}
