interface IShowDialogOptions {
  /**
   * Content
   */
  content?: HTMLElement;
  /**
   * Footer Content
   */
  footer?: HTMLElement;
  /**
   * id of element to render dialogs
   */
  hostId?: string;
  /**
   * Dialog title
   */
  title?: string;
  /**
   * CSS
   */
  style?: CSSStyleDeclaration;
  /**
   * Determine whether clicking outside can trigger close dialog.
   * Default is false, i.e. clicking on backdrop/overlay will trigger close dialog
   */
  strictClose?: boolean;
}

export const showDialog = (options?: IShowDialogOptions) => {
  const { hostId, content, footer, strictClose, style, title } = options || {};

  // Get dialog host (overlay)
  let hostEl = hostId ? document.body.querySelector(`#${hostId}`) : document.body.querySelector('cf-dialog-overlay');
  (hostEl as HTMLCfDialogOverlayElement).show = true;

  // Create dialog
  const dialogEl = document.createElement('cf-dialog');
  (dialogEl as HTMLCfDialogElement).content = content;
  (dialogEl as HTMLCfDialogElement).footer = footer;
  (dialogEl as HTMLCfDialogElement).dialogTitle = title;
  (dialogEl as HTMLCfDialogElement).dialogStyle = style;
  (dialogEl as HTMLCfDialogElement).strictClose = strictClose;

  hostEl.childNodes[0].appendChild(dialogEl);
};

interface IHideDialogOptions {
  /**
   * id of element to render dialogs
   */
  hostId?: string;
}

export const hideDialog = (options?: IHideDialogOptions) => {
  const { hostId } = options || {};

  // Get dialog host (overlay)
  let hostEl = hostId ? document.body.querySelector(`#${hostId}`) : document.body.querySelector('cf-dialog-overlay');
  (hostEl as HTMLCfDialogOverlayElement).show = false;
};
