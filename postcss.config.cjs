const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    purgecss({
      content: ["./src/**/*.{html,js,astro}"],
      safelist: [],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    ...(process.env.NODE_ENV === "production" ? [require("cssnano")] : []),
  ],
};
