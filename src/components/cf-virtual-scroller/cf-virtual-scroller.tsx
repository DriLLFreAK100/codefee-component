import debounce from 'lodash-es/debounce';
import { filterHtmlCollection, flatten } from '../../utils';
import { Component, Element, h, Prop, State } from '@stencil/core';

export interface IVirtualHtmlElement extends HTMLElement {
  vid: number;
}

const getElement = (collection: HTMLCollection, index: number) => {
  return filterHtmlCollection<Element>(
    collection,
    (el: IVirtualHtmlElement) => el.vid === index,
  )[0];
};

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
  @State() windowHeight: number = 100;
  @State() children: IVirtualHtmlElement[] = [];
  @State() isBySlot: boolean = false;
  @State() prevEndIndex: number = 0;
  @State() prevStartIndex: number = 0;

  connectedCallback() {
    // Init states
    this.windowHeight = this.windowLimit * this.childHeight;
    this.isBySlot = this.el.children[0]?.tagName.toUpperCase() === 'SLOT';

    // Manipulate translation
    this.el.childNodes.forEach((child: HTMLElement) => {
      if (child.tagName) {
        if (child.tagName.toUpperCase() === 'SLOT') {
          (child as HTMLSlotElement).assignedElements().forEach(slot => {
            this.initChildNodeStyle(slot as IVirtualHtmlElement);
          });
        } else {
          this.initChildNodeStyle(child as IVirtualHtmlElement);
        }
      }
    });

    // Initial render
    const renderCounts = (this.containerHeight + this.windowHeight * 2) / this.childHeight;

    if (this.children.length > renderCounts) {
      this.prevEndIndex = renderCounts - 1;
      this.removeChildren(renderCounts, this.children.length - 1);
    }
  }

  initChildNodeStyle(child: IVirtualHtmlElement): void {
    const id = this.children.length;

    child.vid = id;
    child.style.height = `${this.childHeight}px`;
    child.style.position = 'absolute';
    child.style.transform = `translateY(${id * this.childHeight}px)`;

    this.children.push(child);
  }

  removeChildren(startIndex: number, endIndex: number) {
    if (this.isBySlot) {
      const slotElements = (this.el.children[0] as HTMLSlotElement).assignedElements();
      for (let i = endIndex; i >= startIndex; i--) {
        slotElements[i].remove();
      }
    } else {
      for (let i = endIndex; i >= startIndex; i--) {
        this.el.children.item(i).remove();
      }
    }
  }

  setChildren(startIndex: number, endIndex: number) {
    // Clean start
    for (let i = 0; i < startIndex; i++) {
      getElement(this.el.children[0].children[0].children, i)?.remove();
    }

    // Clean end
    for (let i = endIndex + 1; i <= this.prevEndIndex; i++) {
      getElement(this.el.children[0].children[0].children, i)?.remove();
    }

    // Insert
    for (let i = endIndex; i >= startIndex; i--) {
      const root = this.isBySlot
        ? this.el.children[0].children[0].children[0]
        : this.el.children[0].children[0];
      const node = getElement(root.children, i);

      if (!node) {
        const postNode = getElement(root.children, i + 1);

        if (postNode) {
          root.insertBefore(this.children[i], postNode);
        } else {
          if (this.prevStartIndex > startIndex) {
            root.prepend(this.children[i]);
          } else if (this.prevStartIndex < startIndex) {
            root.append(this.children[i]);
          } else {
            root.append(this.children[i]);
          }
        }
      }
    }

    // Track current indices
    this.prevStartIndex = startIndex;
    this.prevEndIndex = endIndex;
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
    endIndex = maxEndIndex > this.children.length ? this.children.length - 1 : maxEndIndex - 1;

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
      height: `${this.children.length * this.childHeight}px`,
    };

    return (
      <div
        class={className}
        ref={el => (this.containerEl = el)}
        style={styles}
        onScroll={this.handleOnScroll.bind(this)}
      >
        <div class={innerClassName} style={innerStyles}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
