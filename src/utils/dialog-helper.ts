interface IDialogOptions {
  /**
   * Content
   */
  content?: HTMLElement;
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
  strictClose?: boolean
}

export const showDialog = (dialogOptions?: IDialogOptions) => {
  // Merge options
  let options: IDialogOptions = {
    ...dialogOptions,
  }

  // Get dialog host (overlay)
  let hostEl = options.hostId ? document.body.querySelector(`#${options.hostId}`) : document.body.querySelector('cf-dialog-overlay');
  (hostEl as HTMLCfDialogOverlayElement).show = true;

  // Create dialog
  const dialogEl = document.createElement('cf-dialog');
  (dialogEl as HTMLCfDialogElement).dialogTitle = options.title;
  (dialogEl as HTMLCfDialogElement).dialogStyle = options.style;
  (dialogEl as HTMLCfDialogElement).strictClose = options.strictClose;

  hostEl.childNodes[0].appendChild(dialogEl);
}
