import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@views": "/src/views",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@types": "/src/types",
      "@api": "/src/api",
      "@router": "/src/router",
      "@store": "/src/store",
    },
  },
});
