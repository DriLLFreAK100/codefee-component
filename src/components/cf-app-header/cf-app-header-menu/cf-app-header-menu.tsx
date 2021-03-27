import { cvar } from '../../../utils/style-helper';
import { flatten } from '../../../utils';
import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';

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
  @Prop() active: boolean;
  @Prop() link: string;
  @Prop() menuTitle: string;

  render() {
    const className = flatten(`${this.active ? 'active' : ''}`);

    const styles: { [key: string]: string } = {};
    if (this.active) {
      styles.color = cvar('--color-primary-on');
      styles.textDecoration = 'unset';
      styles.pointerEvents = 'none';
    }

    return (
      <Host class={className}>
        <li class="cfAppHeaderMenu">
          <slot>
            <cf-link
              href={this.link}
              styles={styles}
              underline={false}
            >
              {this.menuTitle}
            </cf-link>
          </slot>
        </li>
      </Host>
    );
  }

}
