import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis } from '../cf-table.utils';
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
      <Tr>
        {columns.map(c => (
          <TCell
            computedSize={getFlexBasis(c, totalColumnSize)}
            type="head"
          >
            {c.header}
          </TCell>
        ))}
      </Tr>
    </thead>
  );
};

export default Thead;
