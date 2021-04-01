import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'cf-checkbox',
  styleUrl: 'cf-checkbox.scss',
  shadow: true,
})
export class CfCheckbox {
  @Prop() checked: boolean = false;

  render() {
    return (
      <Host>
        <label class="cfCheckbox">
          <cf-typography type="subtitle1">
            <slot />
          </cf-typography>
          <input type="checkbox" checked={this.checked} />
          <span class="cfCheckbox__checkmark"></span>
        </label>
      </Host>
    );
  }

}
