import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
/* import playformInline from "@playform/inline"; */

export default defineConfig({
  integrations: [
    playformCompress(),
    tailwind({
      applyBaseStyles: false,
    }),
    /* playformInline() */
    ,
  ],
  trailingSlash: "ignore",
  build: {
    css: {
      postcss: "./postcss.config.js",
    },
    inlineStylesheets: "auto",
  },
});
