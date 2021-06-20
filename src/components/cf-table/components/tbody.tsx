import TCell from './tcell';
import Tr from './tr';
import VirtualScroller from '../../shared/virtual-scroller';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis, renderCellContent } from '../cf-table.utils';
import { ITblColumn } from '../cf-table.com';
import { IVirtualItem, VirtualScroll } from '../../../utils';

interface Props {
  columns: ITblColumn[];
  data: IVirtualItem[];
  totalColumnSize: number;
  virtualize?: boolean;
  virtualScroll: VirtualScroll<any>;
  onRowClick: (datum: any) => void;
  rerender: () => void;
}

interface RowProps {
  columns: ITblColumn[];
  datum: IVirtualItem;
  style?: { [key: string]: string };
  totalColumnSize: number;
  onRowClick: (datum: any) => void;
}

const RowTemplate: FunctionalComponent<RowProps> = ({
  datum,
  columns,
  style,
  totalColumnSize,
  onRowClick,
}): VNode => {
  return (
    <Tr
      datum={datum}
      style={style}
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
            {renderCellContent(datum[c.field], 'body')}
          </TCell>
        ))
      }
    </Tr>
  );
}

const VirtualizedBody: FunctionalComponent<Props> = (props): VNode => {
  const {
    virtualScroll,
    rerender,
  } = props;

  const renderRow = (datum: IVirtualItem) => {
    return (
      <RowTemplate
        datum={datum}
        style={datum.style}
        {...props}
      />
    )
  }

  return (
    <VirtualScroller
      containerNodeType="tbody"
      childNodeType="tr"
      virtualScroll={virtualScroll}
      render={renderRow}
      rerender={rerender}
    />
  );
}

const Tbody: FunctionalComponent<Props> = (props): VNode => {
  const {
    columns,
    data,
    totalColumnSize,
    virtualize = false,
    onRowClick,
  } = props;

  return (
    virtualize ? (
      <VirtualizedBody {...props} />
    ) : (
      <tbody>
        {
          data.map(d => (
            <RowTemplate
              columns={columns}
              datum={d}
              totalColumnSize={totalColumnSize}
              onRowClick={onRowClick}
            />
          ))
        }
      </tbody >
    )
  );
};

export default Tbody;
