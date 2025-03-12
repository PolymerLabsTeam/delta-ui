import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'Delta',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      minify: true,
      generateTypeDeclarations: true,
      empty: true
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
