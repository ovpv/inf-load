import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  server: {
    hmr: {
      overlay: false, // Prevents silent failures
    },
  },
  build: {
    rollupOptions: {
      input: {
        example: path.resolve(__dirname, "./src/index.ts"),
        index: path.resolve(__dirname, "./index.html"),
      },
      output: {
        dir: "dist", // Root output directory
        entryFileNames: ({ name }) => `${name}/index.js`,
        format: "es",
        inlineDynamicImports: false,
        globals: {},
      },
      external: [],
    },
  },
});
