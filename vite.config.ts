import dotenv from "dotenv";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    "process.env": process.env,
  },
  server: {
    port: 7170,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        importers: [],
      },
    },
  },
});
