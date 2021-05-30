import Th from './th';
import Tr from './tr';
import { FunctionalComponent, h } from '@stencil/core';
import { ITblColumn } from '../cf-table.com';

interface Props {
  columns: ITblColumn[];
}

const Thead: FunctionalComponent<Props> = ({ columns }) => {
  return (
    <thead>
      <Tr>
        {columns.map(c => (
          <Th>{c.header}</Th>
        ))}
      </Tr>
    </thead>
  );
};

export default Thead;
