import {
  Component,
  Element,
  h,
  Prop,
  State,
} from '@stencil/core';

export type VirtualScrollContainerType = 'div' | 'span' | 'tbody';

@Component({
  tag: 'cf-virtual-scroller',
  styleUrl: 'cf-virtual-scroller.scss',
  shadow: false,
})
export class CfVirtualScroller {
  @Element() el: HTMLElement;
  @Prop() containerHeight: number = 100;
  @Prop() containerType: VirtualScrollContainerType = 'div';
  @Prop() containerClassName: string;
  @Prop() childHeight: number = 20;
  @State() containerEl: HTMLElement;

  connectedCallback() {
    let children = this.el.childNodes;
    let itemPosition = 0;

    children.forEach((child: HTMLElement) => {
      if (child.tagName) {
        child.style.color = 'red';
        child.style.top = `${itemPosition * this.childHeight}px`;
        itemPosition++;
      }
    });
  }

  handleOnScroll() {
    //scrollTop - How much has been scrolled
    //scrollHeight - total scroll area
    console.dir(this.containerEl.scrollTop);
  }

  render() {
    const styles: { [key: string]: string; } = {
      height: `${this.containerHeight}px`,
    }

    const Component = this.containerType;

    return (
      <Component
        class={`cfVirtualScroller ${this.containerClassName}`}
        ref={el => this.containerEl = el}
        style={styles}
        onScroll={this.handleOnScroll.bind(this)}
      >
        <slot></slot>
      </Component>
    );
  }

}
