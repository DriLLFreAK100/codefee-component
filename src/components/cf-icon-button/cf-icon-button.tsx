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
  @Prop() icon: string;

  render() {
    return (
      <Host>
        <button class="cfIconButton">
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
