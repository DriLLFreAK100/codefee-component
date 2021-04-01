import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-checkbox',
  styleUrl: 'cf-checkbox.scss',
  shadow: true,
})
export class CfCheckbox {
  @Element() el: HTMLCfCheckboxElement;
  @Event() checkChange: EventEmitter<HTMLCfCheckboxElement>;
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  handleOnCheckChange(event: Event) {
    this.checked = (event.target as any).checked;
    this.checkChange.emit(this.el);
  }

  render() {
    return (
      <Host>
        <label class="cfCheckbox">
          <cf-typography type="subtitle1">
            <slot />
          </cf-typography>
          <input type="checkbox" checked={this.checked} onChange={this.handleOnCheckChange.bind(this)} />
          <span class="cfCheckbox__checkmark"></span>
        </label>
      </Host>
    );
  }

}
