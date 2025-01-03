import purgecss from "@fullhuman/postcss-purgecss";

export const plugins = [
  require("autoprefixer"),
  purgecss({
    content: ["./src/**/*.html", "./src/**/*.astro", "./src/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  }),
  ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
];
