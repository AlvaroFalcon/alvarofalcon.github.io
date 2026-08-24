import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
 * Projects are the only content on the site. Keeping them in a collection
 * means adding a chapter is one JSON file and never a markup change, and the
 * schema fails the build rather than the page when the data is wrong.
 *
 * Note: this lives at src/content.config.ts with a loader, which is the
 * Astro 5 content layer API. The handoff describes the older
 * src/content/config.ts + `type: "data"` form, which no longer applies.
 */
const projects = defineCollection({
	loader: glob({ pattern: "**/*.json", base: "./src/data/projects" }),
	schema: ({ image }) =>
		z.object({
			/** Chapter number; also the display order. */
			order: z.number().int().positive(),
			/** May contain newlines — the design breaks titles deliberately. */
			title: z.string(),
			/** Kicker beside the chapter chip, e.g. "ANDROID · KOTLIN". */
			category: z.string(),
			summary: z.string(),
			stack: z.array(z.string()).nonempty(),
			/** Absent means the project is unreleased and renders as WIP. */
			href: z.string().url().optional(),
			cta: z.string().default("VIEW PROJECT"),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			/** Adds a screentone wash to cards that would otherwise read flat. */
			screentone: z.boolean().default(false),
			variant: z.enum(["featured", "compact", "dark"]).default("compact"),
		}),
});

export const collections = { projects };
