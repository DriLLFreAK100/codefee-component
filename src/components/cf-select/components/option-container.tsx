import { FunctionalComponent, h } from "@stencil/core";
import { flatten } from "../../../utils";
import { ISelectOption } from "../cf-select.interface";
import Option from './option';

interface Props {
  isOptionsOpen: boolean;
  options: ISelectOption[];
  onClickOption: (option: ISelectOption) => void;
}

const OptionContainer: FunctionalComponent<Props> = ({
  isOptionsOpen,
  options,
  onClickOption,
}) => {
  if (!isOptionsOpen) {
    return null;
  }

  const className = flatten(`
    optionContainer
  `);

  return (
    <div class={className}>
      {
        options.map(o => {
          return (
            <Option
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
