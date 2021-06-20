import { FunctionalComponent, h } from "@stencil/core";

interface VirtualPlaceholderProps {
  endIndex: number;
  nodeType: string;
  rowHeight: number;
  totalHeight: number;
}

const VirtualPlaceholder: FunctionalComponent<VirtualPlaceholderProps> = ({
  endIndex,
  nodeType,
  rowHeight,
  totalHeight,
}) => {
  const Component = nodeType;
  const renderingUntilHeight = (rowHeight * (endIndex + 1));

  const style = {
    minHeight: `${totalHeight - renderingUntilHeight}px`,
    transform: `translate(0, ${renderingUntilHeight}px)`,
  }

  return (
    <Component style={style} />
  );
}

export default VirtualPlaceholder;
