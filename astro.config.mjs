// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	// Tailwind is on its way out — the redesign styles are plain CSS. It stays
	// wired up only until the last legacy component is deleted.
	integrations: [tailwind(), sitemap()],
	site: "https://alvarofalcon.es",
	output: "static",
});
