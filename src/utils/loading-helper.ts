interface ILoadingOptions {
  /**
   * id for the cf-loading element. First element will be used if not specified
   */
  id?: string;
  /**
   * delay for show/hide in ms
   */
  delay?: number;
}

export const showLoad = (message?: string, options?: ILoadingOptions) => {
  const defaultOptions: ILoadingOptions = {
    id: undefined,
    delay: 0,
  }

  const { id, delay } = { ...defaultOptions, ...options };
  const el = getLoadingHost(id);

  if (message === undefined) {
    message = '';
  }

  el.setAttribute('message', message);

  setTimeout(() => {
    el.setAttribute('show', '');
  }, delay);
}

export const hideLoad = (message?: string, options?: ILoadingOptions) => {
  const defaultOptions: ILoadingOptions = {
    id: undefined,
    delay: 500,
  }

  const { id, delay } = { ...defaultOptions, ...options };
  const el = getLoadingHost(id);

  if (message === undefined) {
    message = '';
  }

  el.setAttribute('message', message);

  setTimeout(() => {
    el.removeAttribute('show');
  }, delay);
}

export const getLoadingHost = (id: string) => {
  let el: HTMLElement = null;

  if (id) {
    el = document.querySelector(`#${id}`);
  } else {
    el = document.querySelector('cf-loading');
  }

  return el;
};