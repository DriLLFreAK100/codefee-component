import { SlotNames } from '../../../common/slot-names';
import {
  Component,
  Element,
  h,
  Prop,
  State,
} from '@stencil/core';

export interface IActionMenu {
  children?: HTMLElement;
  icon: string;
  title: string;
}

@Component({
  tag: 'cf-app-header-action-menu',
  styleUrl: 'cf-app-header-action-menu.scss',
  shadow: true,
})
export class CfAppHeaderActionMenu {
  @Element() el: HTMLElement;
  @Prop() actionMenu: IActionMenu;
  @State() isOpen: boolean;

  componentDidLoad() {
    const attribute = `div[slot='${SlotNames['cfSideDrawer-drawer-content']}']`;
    const slot = this.el.shadowRoot.querySelector(attribute);
    slot.appendChild(this.actionMenu.children);
  }

  handleCloseActionMenu = () => {
    this.isOpen = false;
  }

  handleOnClickActionMenu = () => {
    this.isOpen = true;
  }

  render() {
    const { icon, title } = this.actionMenu;

    return [
      <div class="cfAppHeader__end__menuItem">
        <cf-icon-button
          icon={icon}
          onClick={this.handleOnClickActionMenu.bind(this)}
        />
      </div>,
      <cf-side-drawer
        position="right"
        drawerTitle={title}
        visible={this.isOpen}
        onClose={this.handleCloseActionMenu.bind(this)}
      >
        <div slot={SlotNames['cfSideDrawer-drawer-content']}></div>
      </cf-side-drawer>
    ];
  }

}
