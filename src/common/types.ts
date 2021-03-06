export type FeedbackType = 'info' | 'success' | 'warning' | 'error';
export type ColorType = 'default' | 'primary' | 'secondary' | FeedbackType;
export type ButtonType = 'subtle' | ColorType;
export type GutterSize = 'g0' | 'g4' | 'g8' | 'g12' | 'g16' | 'g20' | 'g24' | 'g28' | 'g32';
export type CssAbsoluteUnit = 'cm' | 'mm' | 'Q' | 'in' | 'px' | 'pt' | 'pc';
export type CssRelativeUnit = 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export type CssUnits = CssAbsoluteUnit | CssRelativeUnit;
export type TableSegment = 'head' | 'body' | 'foot';
