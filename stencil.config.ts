import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = []

export const config: Config = {
  namespace: 'codefee-component',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@codefee-component/core',
      directivesProxyFile: './dist/angular/src/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
  ]
};
