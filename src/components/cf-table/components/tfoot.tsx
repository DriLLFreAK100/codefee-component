import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis, renderCellContent } from '../cf-table.utils';
import { ITblFooterColumn } from '../cf-table.com';

interface Props {
  columns: ITblFooterColumn[];
  totalColumnSize: number;
}

const Tfoot: FunctionalComponent<Props> = ({
  columns,
  totalColumnSize
}): VNode => {
  return <tfoot>
    <Tr type="foot">
      {
        columns.map(c => (
          <TCell
            align={c.align}
            computedSize={getFlexBasis(c, totalColumnSize)}
            type="foot"
          >
            {renderCellContent(c.content, 'foot')}
          </TCell>
        ))
      }
    </Tr>
  </tfoot>;
};

export default Tfoot;
