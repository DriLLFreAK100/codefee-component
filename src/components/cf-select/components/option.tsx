import { FunctionalComponent, h } from "@stencil/core";
import { flatten } from "../../../utils";
import { ISelectOption } from "../cf-select.interface";

interface Props {
  option: ISelectOption;
  onClickOption: (option: ISelectOption) => void;
}

const Option: FunctionalComponent<Props> = ({
  option,
  onClickOption,
}) => {
  const handleClickOption = () => {
    onClickOption(option);
  }

  const className = flatten(`
    option
    ${option.selected ? 'selected' : ''}
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
