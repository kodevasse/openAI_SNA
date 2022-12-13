import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/openai/ ": {
        target: "http://localhost:5000 ",
        changeOrigin: true,
        secure: false,

        rewrite: (path) => path.replace("/openai/", ""),
      },
    },
  },
  resolve: {
    build: {
      outDir: "./dist",
    },
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
