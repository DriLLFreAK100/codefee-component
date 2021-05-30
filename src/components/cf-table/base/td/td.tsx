import { FunctionalComponent, h } from '@stencil/core';

interface Props {}

const Td: FunctionalComponent<Props> = (_, children) => {
  return <td>{children}</td>;
};

export default Td;
