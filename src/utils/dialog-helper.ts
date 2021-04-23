interface IDialogOptions {
  /**
   * content
   */
  content?: HTMLElement;
  /**
   * id of element to render dialogs
   */
  hostId?: string;
  /**
   * dialog title
   */
  title?: string;
  /**
   * css
   */
  style: CSSStyleDeclaration;
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

  hostEl.childNodes[0].appendChild(dialogEl);
}
