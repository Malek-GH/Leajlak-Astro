import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import purgecss from "astro-purgecss";

import robotsTxt from "astro-robots-txt";

import compressor from "astro-compressor";

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    purgecss({
      fontFace: true,
      keyframes: true,
      safelist: ["random", "yep", "button", /^nav-/],
      blocklist: ["usedClass", /^nav-/],
      content: [process.cwd() + "/src/**/*.{astro}"],
      extractors: [
        {
          extractor: (content) =>
            content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
          extensions: ["astro", "html"],
        },
      ],
    }),
    robotsTxt(),
    compressor({
      gzip: true,
      brotli: false,
      fileExtensions: [".html", ".css", ".js", ".svg"],
    }),
  ],
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "never",
  },
});
