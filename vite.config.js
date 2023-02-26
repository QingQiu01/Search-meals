import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  transpileDependencies: true,
  plugins: [vue()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target:
          "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/searchByName": {
        target:
          "http://www.themealdb.com/api/json/v1/1/search.php",
        changeOrigin: true,
        // rewrite: (path) =>
        //   path.replace(/^\/searchByName/, ""),
      },
      "/searchByLetter": {
        target:
          "http://www.themealdb.com/api/json/v1/1/search.php",
        changeOrigin: true,
        // rewrite: (path) =>
        //   path.replace(/^\/searchByLetter/, ""),
      },
      "/fullInfoById": {
        target:
          "http://www.themealdb.com/api/json/v1/1/lookup.php",
        changeOrigin: true,
        // rewrite: (path) =>
        //   path.replace(/^\/fullInfoById/, ""),
      },
      "/searchByIngredients": {
        target:
          "http://www.themealdb.com/api/json/v1/1/filter.php",
        changeOrigin: true,
        // rewrite: (path) =>
        //   path.replace(/^\/searchByIngredients/, ""),
      },
      "/randomMeals": {
        target:
          "http://www.themealdb.com/api/json/v1/1/random.php",
        changeOrigin: true,
        // rewrite: (path) =>
        //   path.replace(/^\/searchByName/, ""),
      },
    },
  },
});
