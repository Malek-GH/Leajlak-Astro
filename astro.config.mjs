import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import playformCompress from "@playform/compress";

export default defineConfig({
  integrations: [
    playformCompress(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  trailingSlash: "ignore",
  build: {
    css: {
      postcss: "./postcss.config.cjs",
    },
    inlineStylesheets: "never",
  },
});
