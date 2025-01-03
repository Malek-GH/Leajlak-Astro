import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import playformInline from "@playform/inline";

export default defineConfig({
  integrations: [
    playformCompress(),
    tailwind({
      applyBaseStyles: false,
    }),
    (await import("@playform/inline")).default(),
  ],
  trailingSlash: "ignore",
  build: {
    css: {
      postcss: "./postcss.config.js",
    },
    inlineStylesheets: "never",
  },
});
