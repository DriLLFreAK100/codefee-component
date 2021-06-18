import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { flatten } from '../../utils';
import { ISelectOption } from './cf-select.interface';
import OptionContainer from './components/option-container';

@Component({
  tag: 'cf-select',
  styleUrl: 'cf-select.scss',
  shadow: true,
})
export class CfSelect {
  @Element() el: HTMLCfSelectElement;
  @Prop({ mutable: true }) options: ISelectOption[];
  @Prop({ mutable: true }) selected: ISelectOption = undefined;
  @State() isOptionsOpen: boolean = false;
  @State() optContainerHeight: number = 0;
  @Event() selectedChange: EventEmitter<ISelectOption>;

  constructor() {
    this.handleClickSelect = this.handleClickSelect.bind(this);
    this.handleClickSelectOption = this.handleClickSelectOption.bind(this);
  }

  connectedCallback() {
  }

  @Listen('click', { target: 'document', capture: true })
  public handleClickOutside(e: any): void {
    const isClickInside = this.el.contains(e.target);

    if (!isClickInside) {
      this.isOptionsOpen = false;
    }
  }

  handleClickSelectOption({ id }: ISelectOption) {
    this.options.forEach(o => {
      if (o.id === id) {
        this.selected = o;
      }
    })

    this.isOptionsOpen = false;
  }

  handleClickSelect(e: MouseEvent) {
    e.stopPropagation();
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  render() {
    const selectClassName = flatten(`
      select
      ${this.isOptionsOpen ? 'open' : ''}
    `);

    const caretClassName = flatten(`
      select__caret
      fas
      fa-caret-down
      ${this.isOptionsOpen ? 'open' : ''}
    `);

    return [
      <div class={selectClassName} onClick={this.handleClickSelect}>
        <cf-typography class="select__selectedValue" type="body1">
          {this.selected?.name}
        </cf-typography>
        <span>
          <i class={caretClassName} />
        </span>
      </div>,
      <OptionContainer
        isOptionsOpen={this.isOptionsOpen}
        options={this.options}
        selected={this.selected}
        onClickOption={this.handleClickSelectOption}
      />

    ];
  }
}
