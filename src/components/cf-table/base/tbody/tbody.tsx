import Tr from '../tr/tr';
import { FunctionalComponent, h } from '@stencil/core';
import { ITblColumn } from '../../cf-table.com';

interface Props {
  columns: ITblColumn[];
  data: any[];
}

const Tbody: FunctionalComponent<Props> = ({ columns, data }) => {
  return (
    <tbody>
      {data.map(d => (
        <Tr>{columns.map(c => d[c.field])}</Tr>
      ))}
    </tbody>
  );
};

export default Tbody;
