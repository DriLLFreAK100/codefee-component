import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { flatten, filterHtmlCollection, forEachHtmlCollection } from '../../utils';

const getSelectedOption = (els: HTMLCollection): HTMLCfSelectOptionElement => {
  return filterHtmlCollection<HTMLCfSelectOptionElement>(
    els,
    (el: HTMLCfSelectOptionElement) => el.selected,
  )[0];
};

@Component({
  tag: 'cf-select',
  styleUrl: 'cf-select.scss',
  shadow: true,
})
export class CfSelect {
  @Element() el: HTMLCfSelectElement;
  @Prop() placeholder: string = '';
  @State() isOptionsOpen: boolean = false;
  @State() optionCount: number = 0;
  @State() selected: HTMLCfSelectOptionElement = undefined;
  @Event() selectedChange: EventEmitter<HTMLCfSelectOptionElement>;

  componentWillRender() {
    this.selected = getSelectedOption(this.el.children);
  }

  handleClickSelect(e: MouseEvent) {
    e.stopPropagation();
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  @Listen('click', { target: 'document', capture: true })
  public handleClickOutside(e: any): void {
    e.preventDefault();
    const isClickInside = this.el.contains(e.target);

    if (!isClickInside) {
      this.isOptionsOpen = false;
    }
  }

  @Listen('selectOptionClick')
  handleSelectOptionClick(e: CustomEvent<HTMLCfSelectOptionElement>) {
    e.stopPropagation();

    forEachHtmlCollection(this.el.children, (child: HTMLCfSelectOptionElement) => {
      if (child.id === e.detail.id) {
        child.selected = true;
        this.selectedChange.emit(e.detail);
      } else {
        child.selected = false;
      }
    });

    this.isOptionsOpen = false;
  }

  render() {
    const selectClassName = flatten(`
      select
      ${this.isOptionsOpen ? 'open' : ''}
    `);

    const optContainerClassName = flatten(`
      select__optContainer
      ${this.isOptionsOpen ? 'open' : ''}
    `);

    const caretClassName = flatten(`
      select__caret
      fas
      fa-caret-down
      ${this.isOptionsOpen ? 'open' : ''}
    `);

    return [
      <div class={selectClassName} onClick={this.handleClickSelect.bind(this)}>
        <cf-typography class="select__selectedValue" type="body1">
          {this.selected?.innerHTML || this.selected?.name}
        </cf-typography>
        <span>
          <i class={caretClassName} />
        </span>
      </div>,
      <div class={optContainerClassName}>
        <slot></slot>
      </div>,
    ];
  }
}
