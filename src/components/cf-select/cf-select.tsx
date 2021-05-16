import { Component, Element, Event, EventEmitter, h, Listen, Prop, State, Watch } from '@stencil/core';
import { flatten } from '../../utils';

const getSelectedOption = (els: HTMLCfSelectOptionElement[]): HTMLCfSelectOptionElement => {
  return els.filter((el: HTMLCfSelectOptionElement) => el.hasAttribute('selected'))[0];
};

const getOptContainerHeight = (optionCount: number) => {
  const height = optionCount * 44;
  return height > 300 ? 300 : height;
};

@Component({
  tag: 'cf-select',
  styleUrl: 'cf-select.scss',
  shadow: true,
})
export class CfSelect {
  @Element() el: HTMLCfSelectElement;
  @Prop() placeholder: string = '';
  @Prop({ mutable: true }) virtualOptions: HTMLCfSelectOptionElement[];
  @State() isOptionsOpen: boolean = false;
  @State() optContainerHeight: number = 0;
  @State() selected: HTMLCfSelectOptionElement = undefined;
  @Event() selectedChange: EventEmitter<HTMLCfSelectOptionElement>;

  connectedCallback() {
    this.initVirtualization(this.virtualOptions);
  }

  handleClickSelect(e: MouseEvent) {
    e.stopPropagation();
    this.isOptionsOpen = !this.isOptionsOpen;
    this.el.shadowRoot;
  }

  @Watch('virtualOptions')
  handleVirtualOptionsChange(newItems: HTMLCfSelectOptionElement[]) {
    this.initVirtualization(newItems);
  }

  @Listen('click', { target: 'document', capture: true })
  public handleClickOutside(e: any): void {
    const isClickInside = this.el.contains(e.target);

    if (!isClickInside) {
      this.isOptionsOpen = false;
    }
  }

  @Listen('selectOptionClick')
  handleSelectOptionClick(e: CustomEvent<HTMLCfSelectOptionElement>) {
    e.stopPropagation();

    const els = this.virtualOptions
      ? this.virtualOptions
      : (Array.from(this.el.children) as HTMLCfSelectOptionElement[]);

    const updatedEls = els.map((el: HTMLCfSelectOptionElement) => {
      if (el.getAttribute('value') === e.detail.value) {
        el.setAttribute('selected', '');

        // Set selected
        this.selected = el;
        this.selectedChange.emit(e.detail);
      } else {
        el.removeAttribute('selected');
      }

      return el;
    });

    if (this.virtualOptions) {
      this.virtualOptions = updatedEls;
    }

    this.isOptionsOpen = false;
  }

  initVirtualization(options: HTMLCfSelectOptionElement[]) {
    this.selected = getSelectedOption(
      options ? options : (Array.from(this.el.children) as HTMLCfSelectOptionElement[]),
    );

    this.optContainerHeight = getOptContainerHeight(options ? options.length : this.el.children.length);
  }

  renderOptionContainer() {
    const optContainerClassName = flatten(`
      select__optContainer
      ${this.isOptionsOpen ? 'open' : ''}
      ${this.virtualOptions ? 'virtualize' : ''}
    `);

    return this.virtualOptions ? (
      <cf-virtual-scroller
        class={optContainerClassName}
        containerHeight={this.optContainerHeight}
        childHeight={44}
        items={this.virtualOptions}
      />
    ) : (
      <div class={optContainerClassName}>
        <slot></slot>
      </div>
    );
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
      <div class={selectClassName} onClick={this.handleClickSelect.bind(this)}>
        <cf-typography class="select__selectedValue" type="body1">
          {this.selected?.innerHTML || this.selected?.name}
        </cf-typography>
        <span>
          <i class={caretClassName} />
        </span>
      </div>,
      this.renderOptionContainer(),
    ];
  }
}
