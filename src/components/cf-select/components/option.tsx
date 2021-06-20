import { FunctionalComponent, h } from "@stencil/core";
import { flatten } from "../../../utils";
import { ISelectOption } from "../cf-select.interface";

interface Props {
  option: ISelectOption;
  isSelected: boolean;
  style?: { [key: string]: string };
  virtualize?: boolean;
  onClickOption: (option: ISelectOption) => void;
}

const Option: FunctionalComponent<Props> = ({
  isSelected,
  option,
  style = {},
  virtualize = false,
  onClickOption,
}) => {
  const handleClickOption = () => {
    if (!isSelected) {
      onClickOption(option);
    }
  }

  const className = flatten(`
    option
    ${isSelected ? 'selected' : ''}
    ${virtualize ? 'virtualize' : ''}
  `);

  return (
    <div
      class={className}
      style={style}
      onClick={handleClickOption}
    >
      <cf-typography type="body1">
        {option.name}
      </cf-typography>
    </div>
  )
}

export default Option;
