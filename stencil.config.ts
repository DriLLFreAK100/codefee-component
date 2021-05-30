import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  devServer: {
    reloadStrategy: 'pageReload',
    port: 8888,
  },
  namespace: 'codefee-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'styles' }],
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
    {
      type: 'angular',
      componentCorePackage: '@codefee-component/core',
      directivesProxyFile: './exports/angular/projects/main/src/lib/directives/proxies.ts',
      directivesUtilsFile: './exports/angular/projects/main/src/lib/directives/proxies-utils.ts',
      directivesArrayFile: './exports/angular/projects/main/src/lib/directives/proxies-list.txt',
      excludeComponents: [],
    },
    reactOutputTarget({
      componentCorePackage: '@codefee-component/core',
      proxiesFile: './exports/react/src/components.ts',
    }),
  ],
  plugins: [sass()],
};
