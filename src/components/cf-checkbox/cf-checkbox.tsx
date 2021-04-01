import {
  Component,
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
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Event() checkChange: EventEmitter<HTMLInputElement>;

  handleOnCheckChange(event: HTMLInputElement) {
    this.checked = (event as any).target.checked;
    this.checkChange.emit(event);
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
