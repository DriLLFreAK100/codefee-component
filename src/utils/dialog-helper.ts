const defaultHostElementId = 'cf-dialog-host';

interface IDialogOptions {
  /**
   * id of element to render dialogs
   */
  hostId: string;
}

export const showDialog = (dialogOptions?: IDialogOptions) => {
  // Merge options
  let options: IDialogOptions = {
    hostId: defaultHostElementId,
    ...dialogOptions
  }

  // Render dialog host
  let el = document.body.querySelector(`#${options.hostId}`);

  if (!el) {
    el = document.createElement('cf-dialog-overlay');
    el.id = options.hostId;

    document.body.appendChild(el);
  }


}
