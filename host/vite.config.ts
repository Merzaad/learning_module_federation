import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { dependencies } from './package.json'

export default defineConfig({
  plugins: [
    federation({
      dts: false,
      dev: { disableDynamicRemoteTypeHints: true, remoteHmr: true },
      name: 'host',
      remotes: {
        layout: {
          type: 'module',
          name: 'layout',
          entry: 'http://localhost:5001/remoteEntry.js',
          entryGlobalName: 'layout',
          shareScope: 'default',
        },
        outlet: {
          type: 'module',
          name: 'outlet',
          entry: 'http://localhost:5002/remoteEntry.js',
          entryGlobalName: 'outlet',
          shareScope: 'default',
        },
      },
      exposes: {},
      filename: 'remoteEntry.js',
      shared: {
        react: {
          requiredVersion: dependencies.react,
          singleton: true,
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom'],
          singleton: true,
        },
      },
    }),
    react(),
  ],
  server: {
    port: 5000,
    origin: 'http://localhost:5000',
  },
  build: {
    target: 'chrome89',
  },
})
