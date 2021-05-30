export type TblAlignType = 'left' | 'right' | 'center';

export type TblSectionType = 'head' | 'body' | 'foot';

export interface ITblColumn {
  field: string;
  header?: any;
  size?: number;
}

export interface ITblFooterColumn {
  content: any;
  size?: number;
}
