import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/kyokaizen/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
