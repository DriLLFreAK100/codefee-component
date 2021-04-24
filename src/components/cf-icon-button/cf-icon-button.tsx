import { ButtonType } from '../../common/types';
import { flatten } from '../../utils';
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

  render() {
    const className = flatten(`
      cfIconButton
      ${this.type}
    `);

    return (
      <Host>
        <button class={className}>
          <slot />
        </button>
      </Host>
    );
  }

}
