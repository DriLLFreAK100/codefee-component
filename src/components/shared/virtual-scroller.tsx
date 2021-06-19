import debounce from 'lodash-es/debounce';
import VirtualPlaceholder from './virtual-placeholder';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { IVirtualItem, VirtualScroll } from '../../utils';

interface Props<T extends IVirtualItem> {
  nodeType: string;
  requireScrollTo: boolean;
  virtualScroll: VirtualScroll<T>;
  render: (data: T) => VNode;
  rerender: () => void;
}

const VirtualScroller: FunctionalComponent<Props<any>> = ({
  nodeType,
  requireScrollTo,
  virtualScroll,
  render,
  rerender,
}) => {
  const {
    data,
    endIndex,
    rowHeight,
    scrollPosition,
    virtualizedData,
    onVirtualScroll,
  } = virtualScroll;

  const Component = nodeType;
  const totalHeight = data.length * rowHeight;
  let containerEl!: HTMLDivElement;

  const handleRef = (el: HTMLDivElement) => {
    containerEl = el;

    if (requireScrollTo) {
      setTimeout(() => {
        containerEl?.scrollTo({ top: scrollPosition });
      }, 0);
    }
  }

  const handleOnScroll = debounce(() => {
    onVirtualScroll(containerEl.scrollTop);
    rerender();
  }, 16);

  return (
    <Component
      class="optionContainer virtualize"
      ref={handleRef}
      style={{ height: `${totalHeight}px` }}
      onScroll={handleOnScroll}>

      {
        virtualizedData.map(o => {
          return render(o);
        })
      }
      {
        (data.length - 1 !== endIndex) && (
          <VirtualPlaceholder
            endIndex={endIndex}
            nodeType={nodeType}
            rowHeight={rowHeight}
            totalHeight={totalHeight}
          />
        )
      }
    </Component>
  );
}

export default VirtualScroller;
