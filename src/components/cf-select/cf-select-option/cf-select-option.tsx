import { Component, Host, h, Event, EventEmitter, Prop, Element } from '@stencil/core';
import { flatten } from '../../../utils';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'cf-select-option',
  styleUrl: 'cf-select-option.scss',
  shadow: true,
})
export class CfSelectOption {
  @Element() el: HTMLCfSelectOptionElement;
  @Prop({ mutable: true, reflect: true }) selected: boolean = false;
  @Prop() name: string;
  @Prop() value: any;
  @Event() selectOptionClick: EventEmitter<any>;

  connectedCallback() {
    if (!this.el.id) {
      this.el.id = uuidv4();
    }
  }

  handleClickOption() {
    if (!this.selected) this.selectOptionClick.emit(this.el);
  }

  render() {
    const className = flatten(`
      ${this.selected ? 'selected' : ''}
    `);

    return (
      <Host class={className} onClick={this.handleClickOption.bind(this)}>
        <cf-typography type="body1">
          <slot>{this.name}</slot>
        </cf-typography>
      </Host>
    );
  }
}
