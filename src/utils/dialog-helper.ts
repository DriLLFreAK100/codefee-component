interface IDialogOptions {
  /**
   * id of element to render dialogs
   */
  hostId: string;
}

export const showDialog = (dialogOptions?: IDialogOptions) => {
  // Merge options
  let options: IDialogOptions = {
    ...dialogOptions,
  }

  // Get dialog host
  let el = options.hostId ? document.body.querySelector(`#${options.hostId}`) : document.body.querySelector('cf-dialog-overlay');
  (el as any).show = true;

  setTimeout(() => {
    (el as any).show = false;
  }, 3000)
}
