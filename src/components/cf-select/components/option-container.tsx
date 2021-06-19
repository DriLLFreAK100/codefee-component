import debounce from 'lodash-es/debounce';
import Option from './option';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { ISelectOption } from '../cf-select.interface';
import { onScrollWindow } from '../../../utils';

interface Props {
  isFirstOpen: boolean;
  isOptionsOpen: boolean;
  lastItemIndex: number;
  lastScrollPosition: number;
  options: ISelectOption[];
  selected?: ISelectOption;
  virtualize: boolean;
  virtualizedOptions: ISelectOption[];
  onClickOption: (option: ISelectOption) => void;
  onVirtualScrolled: (startIndex: number, endIndex: number, scrollPosition: number) => void;
}

interface VirtualizedRowPlaceholderProps {
  lastItemIndex: number;
  rowHeight: number;
  scrollHeight: number;
}

const VirtualizedRowPlaceholder: FunctionalComponent<VirtualizedRowPlaceholderProps> = ({
  lastItemIndex,
  rowHeight,
  scrollHeight
}): VNode => {
  const renderingUntilHeight = (rowHeight * (lastItemIndex + 1));

  const style = {
    minHeight: `${scrollHeight - renderingUntilHeight}px`,
    transform: `translate(0, ${renderingUntilHeight}px)`,
  }

  return (
    <div style={style} />
  );
}

const VirtualizedOptions: FunctionalComponent<Props> = ({
  isFirstOpen,
  lastItemIndex,
  lastScrollPosition,
  options,
  selected,
  virtualizedOptions,
  onClickOption,
  onVirtualScrolled,
}) => {
  let containerEl!: HTMLDivElement;
  const scrollHeight = options.length * 44;

  const handleRef = (el: HTMLDivElement) => {
    containerEl = el;

    if (isFirstOpen) {
      setTimeout(() => {
        containerEl?.scrollTo({ top: lastScrollPosition });
      }, 0);
    }
  }

  const handleOnScroll = debounce(() => {
    onScrollWindow({
      containerHeight: 300,
      rowCount: options.length,
      rowHeight: 44,
      scrollTop: containerEl.scrollTop,
      onScroll: (s, e) => onVirtualScrolled(s, e, containerEl.scrollTop),
    })
  }, 16);

  return (
    <div
      class="optionContainer virtualize"
      ref={handleRef}
      style={{ height: `${scrollHeight}px` }}
      onScroll={handleOnScroll}
    >
      {
        virtualizedOptions.map(o => {
          return (
            <Option
              isSelected={o.id === selected?.id}
              option={o}
              style={{ transform: o.transform }}
              virtualize
              onClickOption={onClickOption}
            />
          );
        })
      }
      {
        (options.length - 1 !== lastItemIndex) && (
          <VirtualizedRowPlaceholder
            lastItemIndex={lastItemIndex}
            rowHeight={44}
            scrollHeight={scrollHeight}
          />
        )
      }
    </div>
  );
}

const OptionContainer: FunctionalComponent<Props> = (props) => {
  const {
    isOptionsOpen,
    virtualize,
  } = props;

  if (!isOptionsOpen) {
    return null;
  }

  if (virtualize) {
    return (
      <VirtualizedOptions {...props} />
    );
  }

  const {
    selected,
    options,
    onClickOption,
  } = props;

  return (
    <div class="optionContainer">
      {
        options.map(o => {
          return (
            <Option
              isSelected={o.id === selected?.id}
              option={o}
              onClickOption={onClickOption}
            />
          );
        })
      }
    </div>
  );
}

export default OptionContainer;
