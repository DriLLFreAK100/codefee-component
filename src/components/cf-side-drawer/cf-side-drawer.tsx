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
  @Prop() drawerTitle: string = '';
  @Prop() menus: INavMenu[] = [];
  @Prop({ mutable: true, reflect: true }) visible: boolean = false;

  onClose() {

  };

  render() {
    return (
      <Host>
        <div class={`cfSideDrawer ${this.visible ? 'visible' : ''}`}>
          <div class="cfSideDrawer__title">
            <cf-typography type="h5">{this.drawerTitle}</cf-typography>
            <div onClick={this.onClose.bind(this)}>
              {/* <IconButton icon={faTimes} /> */}
              X
            </div>
          </div>
          <cf-divider />
          <div class="cfSideDrawer__menuContainer">
            {
              this.menus.map(menu => {
                const style: { [key: string]: string } = {};
                if (menu.active) {
                  style.color = cvar('--color-primary-on')
                }

                return (
                  <div class={`cfSideDrawer__menuItem ${menu.active ? 'active' : ''}`}>
                    <cf-link href={menu.link}>
                      {menu.title}
                    </cf-link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </Host>
    );
  }

}
