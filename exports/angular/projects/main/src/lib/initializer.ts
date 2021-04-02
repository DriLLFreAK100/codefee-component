import { defineCustomElements, applyPolyfills } from '@codefee-component/core/loader';
import { loadTheme } from '@codefee-component/core';

export const initializer = () => {
  return () => {
    return applyPolyfills().then(() => {
      defineCustomElements();
      loadTheme();
    });

  }
}