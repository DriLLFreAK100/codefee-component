import { FunctionalComponent, h } from '@stencil/core';

interface Props {}

const Th: FunctionalComponent<Props> = (_, children) => {
  return <th>{children}</th>;
};

export default Th;
