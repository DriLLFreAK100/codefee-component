import { applyPolyfills, defineCustomElements } from '@codefee-component/core/loader';
import { loadTheme } from '@codefee-component/core';

applyPolyfills().then(() => {
  defineCustomElements();
  loadTheme();
})

export * from './components';
