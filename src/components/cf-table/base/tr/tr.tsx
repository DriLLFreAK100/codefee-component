import { FunctionalComponent, h } from '@stencil/core';

interface Props {}

const Tr: FunctionalComponent<Props> = (_, children) => {
  return <tr class="tr">{children}</tr>;
};

export default Tr;
