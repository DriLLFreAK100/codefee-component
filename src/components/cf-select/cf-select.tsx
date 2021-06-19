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
  @Prop({ mutable: true }) options: ISelectOption[] = [];
  @Prop({ mutable: true }) selected: ISelectOption = undefined;
  @Prop() virtualize: boolean = true;
  @State() isOptionsOpen: boolean = false;
  @State() isFirstOpen: boolean = true;
  @State() lastItemIndex: number = 0;
  @State() lastScrollPosition: number = 0;
  @State() virtualizedOptions: ISelectOption[] = [...this.options];
  @Event() selectedChange: EventEmitter<ISelectOption>;

  constructor() {
    this.handleClickSelect = this.handleClickSelect.bind(this);
    this.handleClickSelectOption = this.handleClickSelectOption.bind(this);
    this.handleVirtualScrolled = this.handleVirtualScrolled.bind(this);
  }

  connectedCallback() {
    if (this.virtualize) {
      // 2 - Mark Y-Translate position
      this.options = this.options.map((d, i) => {
        d.transform = `translate(0, ${i * 44}px)`;
        return d;
      })


      // 3 - Handle first render
      const windowHeight = 44 * 5;
      const renderBufferCount = (300 + windowHeight * 2) / 44;
      const renderCount = renderBufferCount > this.options.length ? this.options.length : renderBufferCount;

      this.lastItemIndex = Math.floor(renderCount - 1) - 1;
      this.virtualizedOptions = [...this.options].splice(0, this.lastItemIndex + 1);
    }
  }

  @Listen('click', { target: 'document', capture: true })
  public handleClickOutside(e: any): void {
    const isClickInside = this.el.contains(e.target);

    if (!isClickInside) {
      this.handleCloseOptionsContainer();
    }
  }

  private handleClickSelectOption({ id }: ISelectOption) {
    this.options.forEach(o => {
      if (o.id === id) {
        this.selected = o;
      }
    });

    this.handleCloseOptionsContainer();
    this.selectedChange.emit(this.selected);
  }

  private handleClickSelect(e: MouseEvent) {
    e.stopPropagation();
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  private handleVirtualScrolled(startIndex: number, endIndex: number, scrollPosition: number): void {
    this.lastItemIndex = endIndex;
    this.lastScrollPosition = scrollPosition;
    this.isFirstOpen = false;
    this.virtualizedOptions = [...this.options].splice(startIndex, endIndex + 1);
  }

  private handleCloseOptionsContainer(): void {
    this.isOptionsOpen = false;
    this.isFirstOpen = true;
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
        isFirstOpen={this.isFirstOpen}
        isOptionsOpen={this.isOptionsOpen}
        lastItemIndex={this.lastItemIndex}
        lastScrollPosition={this.lastScrollPosition}
        options={this.options}
        selected={this.selected}
        virtualize={this.virtualize}
        virtualizedOptions={this.virtualizedOptions}
        onClickOption={this.handleClickSelectOption}
        onVirtualScrolled={this.handleVirtualScrolled}
      />

    ];
  }
}
