import { FunctionalComponent, h } from '@stencil/core';
import { TblSectionType } from '../cf-table.com';

interface Props {
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
  computedSize,
  type,
}, children) => {
  const Component = getComponent(type);

  const style = { flexBasis: computedSize };

  return <Component style={style}>{children}</Component>;
};

export default TCell;
