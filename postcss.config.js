import purgecss from "@fullhuman/postcss-purgecss";

export const plugins = [
  require("tailwindcss"),
  require("autoprefixer"),

  purgecss({
    content: ["./src/**/*.{html,js,astro}"],
    safelist: [],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  }),

  ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
];
