import { ButtonType } from '../../common/types';
import { flatten } from '../../utils';
import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';
@Component({
  tag: 'cf-button',
  styleUrl: 'cf-button.scss',
  shadow: true,
})
export class CfButton {
  @Prop() disabled: boolean;
  @Prop() text: string;
  @Prop() type: ButtonType = 'primary';

  render() {
    const content = this.text
      ? this.text
      : <slot></slot>;

    const className = flatten(
      `cfButton 
      ${this.type}
    `);

    return (
      <Host>
        <button
          class={className}
          disabled={this.disabled}
        >
          <cf-typography type="button">
            {content}
          </cf-typography>
        </button>
      </Host>
    );
  }

}
