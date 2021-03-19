import {
  Component,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core';
import { INavMenu } from './cf-app-header-menu/cf-app-header-menu';

export interface IActionMenu {
  icon: string;
}

@Component({
  tag: 'cf-app-header',
  styleUrl: 'cf-app-header.scss',
  shadow: true
})
export class CfAppHeader {
  @Prop() actionMenus: IActionMenu[];
  @Prop() appName: string;
  @Prop() drawerTitle: string;
  @Prop() navMenus: INavMenu[];
  @State() sideDrawerOpen: boolean = false;

  handleClickDrawerIcon() {
    this.sideDrawerOpen = !this.sideDrawerOpen;
  };

  handleCloseSideDrawer() {
    this.sideDrawerOpen = false;
  }

  renderMenuIcon() {
    return (
      this.navMenus && (
        <div
          class="cfAppHeader__start__drawerIcon"
          onClick={this.handleClickDrawerIcon.bind(this)}
        >
          <cf-icon-button icon="fas fa-bars" />
        </div>
      )
    )
  }

  renderActionMenus() {
    if (this.actionMenus) {
      return (
        this.actionMenus.map((menu) => {
          return (
            <div class="cfAppHeader__end__menuItem">
              <cf-icon-button
                icon={menu.icon}
              />
            </div>
          );
        })
      );
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
          <cf-side-drawer
            drawerTitle={this.drawerTitle}
            position="left"
            visible={this.sideDrawerOpen}
            onClose={this.handleCloseSideDrawer.bind(this)}
          >
            <cf-app-header-menu slot="drawer-content" menus={this.navMenus} />
          </cf-side-drawer>
        </div>
      </Host>
    );
  }
}
