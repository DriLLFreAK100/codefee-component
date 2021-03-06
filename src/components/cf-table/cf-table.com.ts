export type TblAlignType = 'left' | 'right' | 'center';

export type TblSectionType = 'head' | 'body' | 'foot';

export interface ITblColumn {
  align?: TblAlignType;
  field: string;
  header?: any;
  size?: number;
}

export interface ITblFooterColumn {
  align?: TblAlignType;
  content: any;
  size?: number;
}
