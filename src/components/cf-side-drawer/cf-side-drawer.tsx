import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { cvar } from '../../utils/style-helper';

export interface INavMenu {
  active: boolean;
  title: string;
  link: string;
}

@Component({
  tag: 'cf-side-drawer',
  styleUrl: 'cf-side-drawer.scss',
  shadow: true,
})
export class CfSideDrawer {
  @Prop() drawerTitle: string = 'Menu';
  @Prop() menus: INavMenu[] = [];
  @Prop({ mutable: true, reflect: true }) visible: boolean = false;
  @Prop() onClose: () => void;

  render() {
    return (
      <Host>
        <div class={`cfSideDrawer ${this.visible ? 'visible' : ''}`}>
          <div class="cfSideDrawer__title">
            <cf-typography type="h5">{this.drawerTitle}</cf-typography>
            <div onClick={this.onClose}>
              <cf-icon-button icon="fas fa-times" />
            </div>
          </div>
          <cf-divider />
          <div class="cfSideDrawer__menuContainer">
            {
              this.menus.map(menu => {
                const styles: { [key: string]: string } = {};
                if (menu.active) {
                  styles.color = cvar('--color-primary-on');
                  styles.textDecoration = 'unset';
                  styles.pointerEvents = 'none';
                }

                return (
                  <div class={`cfSideDrawer__menuItem ${menu.active ? 'active' : ''}`}>
                    <cf-link styles={styles} href={menu.link}>
                      {menu.title}
                    </cf-link>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div class={`overlay ${this.visible ? 'visible' : ''}`} onClick={this.onClose} />
      </Host>
    );
  }

}
