import debounce from 'lodash-es/debounce';
import { Component, Element, h, Prop, State, Watch } from '@stencil/core';
import { flatten } from '../../utils';

export interface IVirtualHtmlElement extends HTMLElement {
  vid: number;
}

@Component({
  tag: 'cf-virtual-scroller',
  styleUrl: 'cf-virtual-scroller.scss',
  shadow: false,
})
export class CfVirtualScroller {
  containerEl!: HTMLElement;
  @Element() el: HTMLElement;
  @Prop() childHeight: number = 20;
  @Prop() containerHeight: number = 100;
  @Prop() containerClassName: string;
  @Prop() innerContainerClassName: string;
  @Prop() windowLimit: number = 5;
  @Prop() items: HTMLElement[] = [];
  @State() activeItems: IVirtualHtmlElement[] = [];
  @State() windowHeight: number = 100;

  @Watch('items')
  handleChildrenChange(newItems: IVirtualHtmlElement[]) {
    this.initChildren(newItems);
  }

  connectedCallback() {
    this.windowHeight = this.windowLimit * this.childHeight;
    this.initChildren(this.items);
  }

  initChildren(children: HTMLElement[]): void {
    // Manipulate transform:translation style
    children.forEach((child: IVirtualHtmlElement, index) => {
      child.vid = index;
      child.style.height = `${this.childHeight}px`;
      child.style.position = 'absolute';
      child.style.transform = `translateY(${index * this.childHeight}px)`;
    });

    // Initial render
    const renderBufferCount = (this.containerHeight + this.windowHeight * 2) / this.childHeight;
    const renderCount = renderBufferCount > this.items.length ? this.items.length : renderBufferCount;

    this.setChildren(0, renderCount - 1);
  }

  setChildren(startIndex: number, endIndex: number) {
    this.activeItems = [];

    for (let i = startIndex; i <= endIndex; i++) {
      this.activeItems.push(this.items[i] as IVirtualHtmlElement);
    }
  }

  handleOnScroll = debounce(() => {
    let startIndex = 0;
    let endIndex = 0;

    // Upper window
    const outOfBound = this.containerEl.scrollTop - this.windowHeight;
    if (outOfBound > 0) {
      startIndex = Math.round(outOfBound / this.childHeight);
    }
    const upperWindowItemCount = outOfBound >= 0 ? startIndex + this.windowLimit : startIndex;

    // Lower window
    const inScopeCount = Math.round(this.containerHeight / this.childHeight);
    const maxEndIndex = upperWindowItemCount + inScopeCount + this.windowLimit;
    endIndex = maxEndIndex > this.items.length ? this.items.length - 1 : maxEndIndex - 1;

    this.setChildren(startIndex, endIndex);
  }, 16);

  render() {
    const className = flatten(`
      cfVirtualScroller
      ${this.containerClassName ?? ''}
    `);

    const innerClassName = flatten(`
      cfVirtualScroller__inner
      ${this.innerContainerClassName ?? ''}
    `);

    const styles: { [key: string]: string } = {
      height: `${this.containerHeight}px`,
    };

    const innerStyles: { [key: string]: string } = {
      height: `${this.items.length * this.childHeight}px`,
    };

    return (
      <div
        class={className}
        ref={el => (this.containerEl = el)}
        style={styles}
        onScroll={this.handleOnScroll.bind(this)}
      >
        <div
          class={innerClassName}
          style={innerStyles}
          innerHTML={this.activeItems.map(a => a.outerHTML).join('')}
        ></div>
      </div>
    );
  }
}
