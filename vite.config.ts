import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("./index.ts"),
      name: "InfLoad",
      formats: ["es", "cjs", "umd"], // ES Module, CommonJS, and UMD
      fileName: (format) => `inf-load.${format}.js`,
    },
    rollupOptions: {
      output: {
        dir: "dist", // Root output directory
        format: "es",
        inlineDynamicImports: false,
        globals: {},
      },
      external: [], // Specify dependencies to exclude from bundle
    },
  },
});
