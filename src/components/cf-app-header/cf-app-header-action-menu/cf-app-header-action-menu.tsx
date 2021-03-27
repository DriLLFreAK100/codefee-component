import {
  Component,
  h,
  Prop,
  State,
} from '@stencil/core';

@Component({
  tag: 'cf-app-header-action-menu',
  styleUrl: 'cf-app-header-action-menu.scss',
  shadow: true,
})
export class CfAppHeaderActionMenu {
  @Prop() icon: string;
  @Prop() menuTitle: string;
  @State() isOpen: boolean;

  handleCloseActionMenu = () => {
    this.isOpen = false;
  }

  handleOnClickActionMenu = () => {
    this.isOpen = true;
  }

  render() {
    return [
      <div class="cfAppHeader__end__menuItem">
        <cf-icon-button
          icon={this.icon}
          onClick={this.handleOnClickActionMenu.bind(this)}
        />
      </div>,
      <cf-side-drawer
        position="right"
        drawerTitle={this.menuTitle}
        visible={this.isOpen}
        onClose={this.handleCloseActionMenu.bind(this)}
      >
        <div slot="drawer-content">
          <slot />
        </div>
      </cf-side-drawer>
    ];
  }

}
