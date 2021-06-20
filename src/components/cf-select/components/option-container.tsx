import Option from './option';
import VirtualScroller from '../../shared/virtual-scroller';
import { FunctionalComponent, h } from '@stencil/core';
import { ISelectOption } from '../cf-select.interface';
import { VirtualScroll } from '../../../utils';

interface Props {
  isFirstOpen: boolean;
  isOptionsOpen: boolean;
  options: ISelectOption[];
  selected?: ISelectOption;
  virtualize: boolean;
  virtualScroll: VirtualScroll<any>;
  onClickOption: (option: ISelectOption) => void;
  rerender: () => void;
}

const renderOption = <T extends ISelectOption>(
  option: T,
  props: Props
) => {
  const {
    selected,
    onClickOption,
  } = props;

  return (
    <Option
      isSelected={option.id === selected?.id}
      option={option}
      style={option.style}
      virtualize
      onClickOption={onClickOption}
    />
  );
}

const VirtualizedOptions: FunctionalComponent<Props> = (props) => {
  const {
    isFirstOpen,
    virtualScroll,
    rerender,
  } = props;

  return (
    <VirtualScroller
      className="optionContainer"
      containerNodeType="div"
      childNodeType="div"
      requireScrollTo={isFirstOpen}
      virtualScroll={virtualScroll}
      render={(o) => renderOption(o, props)}
      rerender={rerender}
    />
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
