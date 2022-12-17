import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// To use this install @types/node
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // add alias
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      assets: path.resolve(__dirname, "./src/assets/"),
    },
  },
  // set custom host & port
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [react()],
  define: {
    __APP_NAME__: JSON.stringify("custom-app-name"),
  },
});
