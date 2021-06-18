import { FunctionalComponent, h } from "@stencil/core";
import { flatten } from "../../../utils";
import { ISelectOption } from "../cf-select.interface";

interface Props {
  option: ISelectOption;
  isSelected: boolean;
  onClickOption: (option: ISelectOption) => void;
}

const Option: FunctionalComponent<Props> = ({
  isSelected,
  option,
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
  `);

  return (
    <div class={className} onClick={handleClickOption}>
      <cf-typography type="body1">
        {option.name}
      </cf-typography>
    </div>
  )
}

export default Option;
