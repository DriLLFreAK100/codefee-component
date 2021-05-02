import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import { flatten } from '../../utils';
import { ISelectOption } from './cf-select.interface';

@Component({
  tag: 'cf-select',
  styleUrl: 'cf-select.scss',
  shadow: true,
})
export class CfSelect {
  @Element() el: HTMLCfSelectElement;
  @Prop() placeholder: string = '';
  @Prop() selected: ISelectOption = undefined;
  @State() isOptionsOpen: boolean = false;
  @State() optionCount: number = 0;

  handleClickSelect() {
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  componentWillRender() {
    this.optionCount = this.el.children.length;
  }

  render() {
    const optContainerClassName = flatten(`
      select__optContainer
      ${this.isOptionsOpen ? 'open' : ''}
    `);

    return (
      <Host>
        <div class="select" onClick={this.handleClickSelect.bind(this)}>
          <div class="select__value">{this.selected?.name}</div>
          <div class={optContainerClassName}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
