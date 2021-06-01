import { FunctionalComponent, h, VNode } from '@stencil/core';

const Table: FunctionalComponent = (_, children): VNode => {
  return <table>{children}</table>;
};

export default Table;
