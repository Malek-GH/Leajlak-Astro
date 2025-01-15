import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import playformInline from "@playform/inline";

import node from "@astrojs/node";

export default defineConfig({
  output: "server",

  integrations: [
    playformCompress(),
    tailwind({
      applyBaseStyles: false,
    }),
    playformInline(),
  ],

  trailingSlash: "ignore",

  build: {
    css: {
      postcss: "./postcss.config.js",
    },
    inlineStylesheets: "always",
  },

  adapter: node({
    mode: "standalone",
  }),
});
