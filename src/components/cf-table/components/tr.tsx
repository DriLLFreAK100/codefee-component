import { flatten } from '../../../utils';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { TblSectionType } from '../cf-table.com';

interface Props {
  datum?: any;
  type: TblSectionType;
  onRowClick?: (datum: any) => void;
}

const Tr: FunctionalComponent<Props> = ({
  datum,
  type = 'body',
  onRowClick,
}, children): VNode => {
  const className = flatten(`
    ${type}
  `);

  const handleOnClick = (): void => {
    onRowClick && onRowClick(datum);
  }

  return (
    <tr class={className} onClick={handleOnClick}>
      {children}
    </tr>
  );
};

export default Tr;
