import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';

export type ButtonType = 'primary' | 'subtle' | 'info' | 'success' | 'warning' | 'error';

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

    return (
      <Host>
        <button
          class={this.type}
          disabled={this.disabled}
        >
          {content}
        </button>
      </Host>
    );
  }

}
