import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { flatten } from '../../utils';

export type InputStatusType = 'normal' | 'warning' | 'error';

@Component({
  tag: 'cf-input',
  styleUrl: 'cf-input.scss',
  shadow: true,
})
export class CfInput {
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() status: InputStatusType = 'normal';
  @Prop() type: 'number' | 'string' = 'string';
  @Prop({ mutable: true, reflect: true }) value: any;
  @Event() valueChange: EventEmitter<string>;

  handleInputChange(event: CustomEvent<string>) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(this.value);
  }

  render() {
    const inputClassName = flatten(`
      ${this.status !== 'normal' ? this.status : ''}
    `);

    return (
      <Host>
        <label>
          <cf-typography type="h6">
            {this.label}:
          </cf-typography>
        </label>
        <input
          class={inputClassName}
          onChange={this.handleInputChange}
          placeholder={this.placeholder}
          type={this.type}
          value={this.value}
        />
      </Host>
    );
  }

}
