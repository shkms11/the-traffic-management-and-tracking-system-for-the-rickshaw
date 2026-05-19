import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoName = "the-traffic-management-and-tracking-system-for-the-rickshaw";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), tsconfigPaths()],

  base: mode === "production" ? `/${repoName}/` : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
