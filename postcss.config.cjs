const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    purgecss({
      content: ["./src/**/*.{html,js,astro}"], // Adjust to your file structure
      safelist: [], // Add any dynamically generated classes here
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    require("cssnano")({
      preset: "default", // Minify the CSS
    }),
  ],
};
