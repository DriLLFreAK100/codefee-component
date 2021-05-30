import { FunctionalComponent, h, VNode } from '@stencil/core';
import { flatten } from '../../../utils';
import { TblAlignType, TblSectionType } from '../cf-table.com';

interface Props {
  align?: TblAlignType;
  computedSize: string;
  type: TblSectionType;
}

const getComponent = (type: TblSectionType): 'th' | 'td' => {
  switch (type) {
    case 'head':
      return 'th';
    case 'body':
    case 'foot':
    default:
      return 'td';
  }
}

const TCell: FunctionalComponent<Props> = ({
  align = 'left',
  computedSize,
  type,
}, children): VNode => {
  const Component = getComponent(type);

  const style = { flexBasis: computedSize };

  const className = flatten(`
    ${align}
  `);

  return (
    <Component
      class={className}
      style={style}
    >
      {children}
    </Component>
  );
};

export default TCell;
