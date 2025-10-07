import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Configuration pour Vite-SSG
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        fr: path.resolve(__dirname, 'fr.html'),
        pt: path.resolve(__dirname, 'pt.html'),
        es: path.resolve(__dirname, 'es.html'),
        de: path.resolve(__dirname, 'de.html'),
        it: path.resolve(__dirname, 'it.html'),
      },
    },
  },
  preview: {
    port: 8080,
    host: true,
  },
}));
