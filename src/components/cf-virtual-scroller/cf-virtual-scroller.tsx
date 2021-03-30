import debounce from 'lodash-es/debounce';
import { CssUnits } from '../../common/types';
import { flatten } from '../../utils';
import {
  Component,
  Element,
  h,
  Prop,
  State,
} from '@stencil/core';

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
  @Prop() cssUnit: CssUnits = 'px';
  @Prop() windowLimit: number = 5;
  @State() windowHeight: number = 100;
  @State() children: HTMLElement[] = [];
  @State() prevEndIndex: number = 0;
  @State() prevStartIndex: number = 0;

  connectedCallback() {
    // Init states
    this.windowHeight = this.windowLimit * this.childHeight;

    // Manipulate translation
    this.el.childNodes.forEach((child: HTMLElement) => {
      if (child.tagName) {
        const id = this.children.length;
        child.id = id.toString();

        child.style.height = `${this.childHeight}${this.cssUnit}`;
        child.style.transform = `translateY(${id * this.childHeight}${this.cssUnit})`;
        this.children.push(child);
      }
    });

    // Initial render
    const renderCounts = (this.containerHeight + (this.windowHeight * 2)) / this.childHeight;

    if (this.children.length > renderCounts) {
      this.prevEndIndex = renderCounts - 1;
      this.removeChildren(renderCounts, this.children.length - 1);
    }
  }

  removeChildren(startIndex: number, endIndex: number) {
    for (let i = endIndex; i >= startIndex; i--) {
      this.el.children.item(i).remove();
    }
  }

  setChildren(startIndex: number, endIndex: number) {
    // Clean start
    for (let i = 0; i < startIndex; i++) {
      this.el.children[0].children[0].children.namedItem(i.toString())?.remove();
    }

    // Clean end
    for (let i = endIndex + 1; i <= this.prevEndIndex; i++) {
      this.el.children[0].children[0].children.namedItem(i.toString())?.remove();
    }

    // Insert 
    for (let i = endIndex; i >= startIndex; i--) {
      const root = this.el.children[0].children[0];
      const node = root.children.namedItem(i.toString());

      if (!node) {
        const postNode = root.children.namedItem((i + 1).toString());

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
      startIndex = Math.round((outOfBound / this.childHeight));
    }
    const upperWindowItemCount = outOfBound >= 0 ? startIndex + this.windowLimit : startIndex;

    // Lower window
    const inScopeCount = Math.round(this.containerHeight / this.childHeight);
    const maxEndIndex = upperWindowItemCount + inScopeCount + (this.windowLimit);
    endIndex = (maxEndIndex > this.children.length) ? this.children.length - 1 : maxEndIndex - 1;

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

    const styles: { [key: string]: string; } = {
      height: `${this.containerHeight}${this.cssUnit}`,
    };

    const innerStyles: { [key: string]: string; } = {
      height: `${this.children.length * this.childHeight}${this.cssUnit}`,
    };

    return (
      <div
        class={className}
        ref={(el) => this.containerEl = el}
        style={styles}
        onScroll={this.handleOnScroll.bind(this)}
      >
        <div
          class={innerClassName}
          style={innerStyles}
        >
          <slot></slot>
        </div>
      </div>
    );
  }

}
