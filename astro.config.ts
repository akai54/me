import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkCodeTitle from "remark-code-title";
import image from "@astrojs/image";
import { remarkReadingTime } from "./remark-reading-time.js";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://tylerwray.me/',
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
    remarkPlugins: [remarkReadingTime, remarkCodeTitle],
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});
