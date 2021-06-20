import { Component, Element, Event, EventEmitter, h, Listen, Prop, State } from '@stencil/core';
import { flatten, VirtualScroll } from '../../utils';
import { ISelectOption } from './cf-select.interface';
import OptionContainer from './components/option-container';

@Component({
  tag: 'cf-select',
  styleUrl: 'cf-select.scss',
  shadow: true,
})
export class CfSelect {
  @Element() el: HTMLElement;
  @Prop() options: ISelectOption[] = [];
  @Prop({ mutable: true }) selected: ISelectOption = undefined;
  @Prop() isVirtualize: boolean = true;
  @State() isOptionsOpen: boolean = false;
  @State() isFirstOpen: boolean = true;
  @State() tick: number = 0;
  @State() virtualScroll: VirtualScroll<ISelectOption> = undefined;
  @Event() selectedChange: EventEmitter<ISelectOption>;

  constructor() {
    this.virtualScroll = new VirtualScroll(this.options, {
      containerHeight: 300,
      rowHeight: 44,
    });

    this.handleClickSelect = this.handleClickSelect.bind(this);
    this.handleClickSelectOption = this.handleClickSelectOption.bind(this);
    this.rerender = this.rerender.bind(this);
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

  private handleCloseOptionsContainer(): void {
    this.isOptionsOpen = false;
    this.isFirstOpen = true;
  }

  private rerender(): void {
    this.isFirstOpen = false;
    this.tick += 1;
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
        options={this.options}
        selected={this.selected}
        virtualize={this.isVirtualize}
        virtualScroll={this.virtualScroll}
        onClickOption={this.handleClickSelectOption}
        rerender={this.rerender}
      />
    ];
  }
}
