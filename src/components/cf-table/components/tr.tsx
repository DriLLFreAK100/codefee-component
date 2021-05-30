import { flatten } from '../../../utils';
import { FunctionalComponent, h } from '@stencil/core';
import { TblSectionType } from '../cf-table.com';

interface Props {
  type?: TblSectionType;
}

const Tr: FunctionalComponent<Props> = ({
  type = 'body',
}, children) => {
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
