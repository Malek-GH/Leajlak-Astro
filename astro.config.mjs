import { defineConfig } from "astro/config";
import astroCompress from "astro-compress";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  plugins: [astroCompress()],
  integrations: [tailwind({ applyBaseStyles: false })],
  trailingSlash: "ignore",
});
