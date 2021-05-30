import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { ITblFooterColumn } from '../cf-table.com';
import { getFlexBasis } from '../cf-table.utils';

interface Props {
  columns: ITblFooterColumn[];
  totalColumnSize: number;
}

const Tfoot: FunctionalComponent<Props> = ({
  columns,
  totalColumnSize
}): VNode => {
  return <tfoot>
    <Tr>
      {
        columns.map(c => (
          <TCell
            computedSize={getFlexBasis(c, totalColumnSize)}
            type="foot"
          >
            {c.content}
          </TCell>
        ))
      }
    </Tr>
  </tfoot>;
};

export default Tfoot;
