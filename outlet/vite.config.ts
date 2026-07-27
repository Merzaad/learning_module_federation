import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [
    federation({
      dts: false,
      dev: { disableDynamicRemoteTypeHints: true, remoteHmr: true },
      name: "outlet",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./outlet": "./src/App.tsx",
      },
      remotes: {},
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  server: {
    port: 5002,
    cors: true,
    origin: "http://localhost:5002",
  },
  preview: {
    port: 5002,
    cors: true,
  },
  build: {
    target: "chrome89",
  },
});
