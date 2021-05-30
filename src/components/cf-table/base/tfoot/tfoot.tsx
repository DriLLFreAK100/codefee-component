import { FunctionalComponent, h } from '@stencil/core';

interface Props {}

const Tfoot: FunctionalComponent<Props> = (_, children) => {
  return <tfoot>{children}</tfoot>;
};

export default Tfoot;
