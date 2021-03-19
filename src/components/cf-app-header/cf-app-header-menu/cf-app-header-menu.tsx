import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { cvar } from '../../../utils/style-helper';

export interface INavMenu {
  active: boolean;
  title: string;
  link: string;
}

@Component({
  tag: 'cf-app-header-menu',
  styleUrl: 'cf-app-header-menu.scss',
  shadow: true,
})
export class CfAppHeaderMenu {
  @Prop() menus: INavMenu[] = [];

  render() {
    return (
      <Host>
        {
          this.menus.map(menu => {
            const styles: { [key: string]: string } = {};
            if (menu.active) {
              styles.color = cvar('--color-primary-on');
              styles.textDecoration = 'unset';
              styles.pointerEvents = 'none';
            }

            return (
              <div class={`cfAppHeaderMenu__menuItem ${menu.active ? 'active' : ''}`}>
                <cf-link styles={styles} href={menu.link}>
                  {menu.title}
                </cf-link>
              </div>
            );
          })
        }
      </Host>
    );
  }

}
