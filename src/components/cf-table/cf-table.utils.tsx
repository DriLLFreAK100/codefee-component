import { VNode, h } from "@stencil/core";
import { ITblVirtualizationOption, TblSectionType } from "./cf-table.com";

export const getFlexBasis = (item: { size?: number }, totalSize: number) => {
  return `${((item?.size || 1) / totalSize) * 100}%`;
};

export const getTotalSize = (data: { size?: number }[]): number => {
  return data.reduce((a, c) => {
    return a + c?.size || 1;
  }, 0);
};

export const getDefaultVirtualizationOptions = (): ITblVirtualizationOption => {
  return {
    containerHeight: 178,
    rate: 16,
    rowHeight: 52,
    window: 5,
  };
}

export const renderCellContent = (content: any, type: TblSectionType): VNode => {
  if (typeof content === 'string') {
    switch (type) {
      case 'head':
      case 'foot':
        return renderHeadFootCellContent(content);
      case 'body':
      default:
        return renderBodyCellContent(content);
    }
  }

  return content;
}

const renderHeadFootCellContent = (content: string) => (
  <cf-typography type="h6">
    {content}
  </cf-typography>
);

const renderBodyCellContent = (content: string) => (
  <cf-typography type="body1">
    {content}
  </cf-typography>
);
