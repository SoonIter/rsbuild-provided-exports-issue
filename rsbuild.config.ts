import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    writeToDisk: true
  },
  tools: {
    rspack(config, { env }) {
      // if (env === 'development') {
      //   // @ts-ignore
      //   config.optimization.usedExports = false
      // }
    }
  }
});
