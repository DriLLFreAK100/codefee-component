import { flatten } from '../../../utils';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { TblSectionType } from '../cf-table.com';

interface Props {
  type: TblSectionType;
}

const Tr: FunctionalComponent<Props> = ({
  type = 'body',
}, children): VNode => {
  const className = flatten(`
    ${type}
  `);

  return (
    <tr class={className}>
      {children}
    </tr>
  );
};

export default Tr;
