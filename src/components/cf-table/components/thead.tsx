import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis, renderCellContent } from '../cf-table.utils';
import { ITblColumn } from '../cf-table.com';

interface Props {
  columns: ITblColumn[];
  totalColumnSize: number;
}

const Thead: FunctionalComponent<Props> = ({
  columns,
  totalColumnSize,
}): VNode => {
  return (
    <thead>
      <Tr type="head">
        {columns.map(c => (
          <TCell
            align={c.align}
            computedSize={getFlexBasis(c, totalColumnSize)}
            type="head"
          >
            {renderCellContent(c.header, 'head')}
          </TCell>
        ))}
      </Tr>
    </thead>
  );
};

export default Thead;
