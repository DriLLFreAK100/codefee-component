import { FunctionalComponent, h } from '@stencil/core';

interface Props {}

const Table: FunctionalComponent<Props> = (_, children) => {
  return <table>{children}</table>;
};

export default Table;
