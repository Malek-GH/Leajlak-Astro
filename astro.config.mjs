import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

export default defineConfig({
  /* output: "server", */
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true,
  },
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
    inlineStylesheets: "auto",
  },
});
