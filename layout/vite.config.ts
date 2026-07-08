import { defineConfig } from "vite"
import { federation } from "@module-federation/vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"

export default defineConfig({
  plugins: [
    federation({
      dts: false,
      dev: { disableDynamicRemoteTypeHints: true, remoteHmr: true },
      name: "layout",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./layout": "./src/layout.ts",
      },
      remotes: {},
    }),
    svelte(),
  ],
  server: {
    port: 5001,
    cors: true,
    origin: "http://localhost:5001",
  },
  preview: {
    port: 5001,
    cors: true,
  },
  build: {
    target: "chrome89",
  },
})
