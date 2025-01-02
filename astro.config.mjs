import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import playformCompress from "@playform/compress";

export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), playformCompress()],
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "never",
  },
  build: {
    css: {
      postcss: "./postcss.config.js",
    },
  },
});
