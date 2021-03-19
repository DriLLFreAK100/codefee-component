import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { cvar } from '../../../utils/style-helper';

export interface INavMenu {
  active: boolean;
  customNode: any;
  link: string;
  title: string;
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
        <nav class="cfAppHeaderMenu">
          <ul>
            {
              this.menus.map(menu => {
                const styles: { [key: string]: string } = {};
                if (menu.active) {
                  styles.color = cvar('--color-primary-on');
                  styles.textDecoration = 'unset';
                  styles.pointerEvents = 'none';
                }

                return (
                  <li class={`cfAppHeaderMenu__menuItem ${menu.active ? 'active' : ''}`}>
                    <cf-link
                      href={menu.link}
                      styles={styles}
                      underline={false}
                    >
                      {menu.customNode ?? menu.title}
                    </cf-link>
                  </li>
                );
              })
            }
          </ul>
        </nav>

      </Host>
    );
  }

}
