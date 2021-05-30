import { FunctionalComponent, h } from '@stencil/core';
import { ITblFooterColumn } from '../cf-table.com';
import Td from './td';
import Tr from './tr';

interface Props {
  columns: ITblFooterColumn[];
}

const Tfoot: FunctionalComponent<Props> = ({ columns }) => {
  return <tfoot>
    <Tr>
      {
        columns.map(c => (
          <Td>{c.content}</Td>
        ))
      }
    </Tr>
  </tfoot>;
};

export default Tfoot;
