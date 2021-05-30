import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis } from '../cf-table.utils';
import { ITblColumn } from '../cf-table.com';

interface Props {
  columns: ITblColumn[];
  data: any[];
  totalColumnSize: number;
}

const Tbody: FunctionalComponent<Props> = ({
  columns,
  data,
  totalColumnSize,
}): VNode => {
  return (
    <tbody>
      {data.map(d => (
        <Tr>{columns.map(c => (
          <TCell
            computedSize={getFlexBasis(c, totalColumnSize)}
            type="body"
          >
            {d[c.field]}
          </TCell>
        ))}</Tr>
      ))}
    </tbody>
  );
};

export default Tbody;
