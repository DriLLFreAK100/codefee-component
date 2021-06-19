import debounce from 'lodash-es/debounce';
import TCell from './tcell';
import Tr from './tr';
import { FunctionalComponent, h, VNode } from '@stencil/core';
import { getFlexBasis, renderCellContent } from '../cf-table.utils';
import { ITblColumn, ITblVirtualizationOption, ITblVirtualizedRow } from '../cf-table.com';

interface Props {
  columns: ITblColumn[];
  data: ITblVirtualizedRow[];
  lastItemIndex: number;
  totalColumnSize: number;
  virtualize?: boolean;
  virtualizationOption: ITblVirtualizationOption;
  virtualizedData?: ITblVirtualizedRow[];
  onRowClick: (datum: any) => void;
  onVirtualScrolled: (startIndex: number, endIndex: number) => void;
}

interface RowProps {
  columns: ITblColumn[];
  datum: ITblVirtualizedRow;
  style?: { [key: string]: string };
  totalColumnSize: number;
  onRowClick: (datum: any) => void;
}

interface VirtualizedRowPlaceholderProps {
  lastItemIndex: number;
  rowHeight: number;
  scrollHeight: number;
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

const VirtualizedRowPlaceholder: FunctionalComponent<VirtualizedRowPlaceholderProps> = ({
  lastItemIndex,
  rowHeight,
  scrollHeight
}): VNode => {
  const renderingUntilHeight = (rowHeight * (lastItemIndex + 1));

  const style = {
    minHeight: `${scrollHeight - renderingUntilHeight}px`,
    transform: `translate(0, ${renderingUntilHeight}px)`,
  }

  return (
    <tr style={style} />
  );
}

const VirtualizedBody: FunctionalComponent<Props> = ({
  columns,
  data,
  lastItemIndex,
  totalColumnSize,
  virtualizationOption,
  virtualizedData,
  onRowClick,
  onVirtualScrolled,
}: Props): VNode => {
  let containerEl!: HTMLElement;
  const { containerHeight, rate, rowHeight, tolerance } = virtualizationOption;
  const upperToleranceHeight = tolerance * rowHeight;
  const scrollHeight = data.length * rowHeight;

  const handleOnScroll = debounce(() => {
    let startIndex = 0;
    let endIndex = 0;

    // Upper window
    const outOfBound = containerEl.scrollTop - upperToleranceHeight;
    if (outOfBound > 0) {
      startIndex = Math.round(outOfBound / rowHeight);
    }
    const upperWindowItemCount = outOfBound >= 0 ? startIndex + tolerance : startIndex;

    // Lower window
    const inScopeCount = Math.round(containerHeight / rowHeight);
    const maxEndIndex = upperWindowItemCount + inScopeCount + tolerance;
    endIndex = maxEndIndex > data.length ? data.length - 1 : maxEndIndex - 1;

    onVirtualScrolled(startIndex, endIndex);
  }, rate);

  return (
    <tbody
      onScroll={handleOnScroll}
      ref={el => (containerEl = el)}
      style={{ height: `${scrollHeight}px` }}
    >
      {
        virtualizedData.map(d => {
          return (
            <RowTemplate
              columns={columns}
              datum={d}
              style={{ transform: d.transform }}
              totalColumnSize={totalColumnSize}
              onRowClick={onRowClick}
            />
          )
        })
      }
      {
        (data.length - 1 !== lastItemIndex) && (
          <VirtualizedRowPlaceholder
            lastItemIndex={lastItemIndex}
            rowHeight={rowHeight}
            scrollHeight={scrollHeight}
          />
        )
      }
    </tbody>
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
