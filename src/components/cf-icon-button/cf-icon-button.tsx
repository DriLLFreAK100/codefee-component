import { ButtonType } from '../../common/types';
import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-icon-button',
  styleUrl: 'cf-icon-button.scss',
  shadow: true,
})
export class CfIconButton {
  @Prop() type: ButtonType = 'primary';
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <button class={`cfIconButton ${this.type}`}>
          {
            this.icon
              ? <i class={this.icon}></i>
              : <slot />
          }
        </button>
      </Host>
    );
  }

}
