import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/*
 * Projects are the only content on the site. Each one is a Markdown file:
 * the frontmatter drives the card on the home page and the header of its
 * detail page, and the body is the long write-up shown on that page.
 * Adding a project is one file and never a markup change, and the schema
 * fails the build rather than the page when the data is wrong.
 *
 * The file name is the project's id and its URL: easypixel.md is served at
 * /projects/easypixel/.
 */
const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
	schema: ({ image }) =>
		z.object({
			/** Chapter number; also the display order. */
			order: z.number().int().positive(),
			/** May contain newlines — the design breaks titles deliberately. */
			title: z.string(),
			/** Kicker beside the chapter chip, e.g. "ANDROID · KOTLIN". */
			category: z.string(),
			/** One or two sentences for the card and the detail page lead. */
			summary: z.string(),
			stack: z.array(z.string()).nonempty(),
			/** Shown on the detail page header, e.g. "2024 — present". */
			period: z.string().optional(),
			/** What I did on it, for projects that were not solo work. */
			role: z.string().optional(),
			/** Unreleased work renders a WORK IN PROGRESS marker. */
			wip: z.boolean().default(false),
			/** Private code: no repo link, and the page says so. */
			private: z.boolean().default(false),
			/** Off-site links; each renders as a button on the detail page. */
			links: z
				.array(z.object({ label: z.string(), href: z.string().url() }))
				.default([]),
			/**
			 * Screenshots, in display order. The first one doubles as the
			 * cover of a featured card unless `cover` is set.
			 */
			gallery: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						caption: z.string().optional(),
						/** Phone screenshots get a narrower, taller tile. */
						portrait: z.boolean().default(false),
					})
				)
				.default([]),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			/** Adds a screentone wash to cards that would otherwise read flat. */
			screentone: z.boolean().default(false),
			variant: z.enum(["featured", "compact", "dark"]).default("compact"),
		}),
});

export const collections = { projects };
