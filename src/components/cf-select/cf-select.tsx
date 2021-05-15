import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { flatten, filterHtmlCollection, forEachHtmlCollection } from '../../utils';

const getSelectedOption = (els: HTMLCollection): HTMLCfSelectOptionElement => {
  return filterHtmlCollection<HTMLCfSelectOptionElement>(els, (el: HTMLCfSelectOptionElement) => el.selected)[0];
};

const getOptContainerHeight = (optionCount: number) => {
  const height = optionCount * 44;
  return height > 300 ? 300 : height;
};

const getOptions = (el: HTMLCfSelectElement) => {
  return el.shadowRoot.querySelector('cf-virtual-scroller').querySelector('.cfVirtualScroller__inner').children;
};

@Component({
  tag: 'cf-select',
  styleUrl: 'cf-select.scss',
  shadow: true,
})
export class CfSelect {
  processingOptions: boolean = false;
  @Element() el: HTMLCfSelectElement;
  @Prop() placeholder: string = '';
  @State() isOptionsOpen: boolean = false;
  @State() optContainerHeight: number = 0;
  @State() selected: HTMLCfSelectOptionElement = undefined;
  @State() virtualOptions: HTMLCfSelectOptionElement[] = [];
  @Event() selectedChange: EventEmitter<HTMLCfSelectOptionElement>;

  connectedCallback() {
    this.selected = getSelectedOption(this.el.children);
    this.optContainerHeight = getOptContainerHeight(this.el.children.length);

    // Virtualize Options
    this.virtualizeOptions();
    const observer = new MutationObserver(this.handleOptionsChange.bind(this));
    observer.observe(this.el, { childList: true });
    this.processingOptions = false;
  }

  handleClickSelect(e: MouseEvent) {
    e.stopPropagation();
    this.isOptionsOpen = !this.isOptionsOpen;
    this.el.shadowRoot;
  }

  handleOptionsChange() {
    if (!this.processingOptions) {
      this.virtualizeOptions();
      return;
    }

    this.processingOptions = false;
  }

  virtualizeOptions() {
    this.virtualOptions = Array.from(this.el.children) as HTMLCfSelectOptionElement[];
    forEachHtmlCollection(this.el.children, row => row.remove());
    this.processingOptions = true;
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

    forEachHtmlCollection(getOptions(this.el), (child: HTMLCfSelectOptionElement) => {
      if (child.id === e.detail.id) {
        child.selected = true;

        // Set selected
        this.selected = child;
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
      <cf-virtual-scroller
        class={optContainerClassName}
        containerHeight={this.optContainerHeight}
        childHeight={44}
        items={this.virtualOptions}
      />,
    ];
  }
}
