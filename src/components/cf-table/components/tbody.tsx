import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis, renderCellContent } from '../cf-table.utils';
import { ITblColumn } from '../cf-table.com';

interface Props {
  columns: ITblColumn[];
  data: any[];
  totalColumnSize: number;
  onRowClick: (datum: any) => void;
}

const Tbody: FunctionalComponent<Props> = ({
  columns,
  data,
  totalColumnSize,
  onRowClick,
}): VNode => {
  return (
    <tbody>
      {data.map(d => (
        <Tr
          datum={d}
          type="body"
          onRowClick={onRowClick}
        >
          {
            columns.map(c => (
              <TCell
                align={c.align}
                computedSize={getFlexBasis(c, totalColumnSize)}
                type="body"
              >
                {renderCellContent(d[c.field], 'body')}
              </TCell>
            ))
          }
        </Tr>
      ))}
    </tbody>
  );
};

export default Tbody;
