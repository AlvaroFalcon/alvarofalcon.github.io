# alvarofalcon.es

My personal portfolio, live at **[alvarofalcon.es](https://alvarofalcon.es)**.

A static, manga/print-inspired single page built with [Astro](https://astro.build): hard ink borders, screentone textures and comic-style panels, with no client-side framework.

## Tech stack

- **Astro 5** with static output and the content layer API
- **TypeScript** for config and the content schema
- **Plain CSS** with design tokens (no CSS framework)
- **Self-hosted fonts** via Fontsource: Anton (display) and Zen Kaku Gothic New (text)
- **`astro:assets` + sharp** for optimized images
- **`@astrojs/sitemap`** for the sitemap
- **Prettier** (with `prettier-plugin-astro`) and `astro check`
- **GitHub Actions → GitHub Pages**, served on a custom domain

## Project structure

```text
/
├── .github/workflows/deploy.yml   # Build and deploy to GitHub Pages on push to master
├── public/                        # Static files served as-is (favicon)
├── src/
│   ├── assets/                    # Images processed by astro:assets
│   ├── components/
│   │   ├── layout/                # Site header and footer
│   │   ├── sections/              # Page sections: hero, about, projects, contact
│   │   └── ui/                    # Reusable building blocks (ink panel, buttons, chips, project card…)
│   ├── data/projects/             # One JSON file per project shown on the site
│   ├── layouts/base-layout.astro  # HTML shell, meta tags and global styles
│   ├── lib/site-config.ts         # Single source of truth for name, role and links
│   ├── pages/index.astro          # The page: composes the sections
│   ├── styles/
│   │   ├── design-tokens.css      # Colours, type scale, spacing, shadows
│   │   ├── global.css             # Base styles
│   │   └── textures.css           # Screentone and ray textures
│   └── content.config.ts          # Schema for the projects collection
├── astro.config.mjs
├── CNAME                          # Custom domain: alvarofalcon.es
└── pnpm-workspace.yaml            # pnpm build permissions (esbuild, sharp)
```

## Getting started

Requires **Node.js 22+** and **pnpm 10.25** (pinned in `package.json`; `corepack enable` picks it up).

```bash
pnpm install
pnpm dev
```

| Command             | What it does                             |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start the dev server at `localhost:4321` |
| `pnpm build`        | Build the production site into `./dist/` |
| `pnpm preview`      | Preview the production build locally     |
| `pnpm check`        | Type-check `.astro` and `.ts` files      |
| `pnpm format`       | Format the codebase with Prettier        |
| `pnpm format:check` | Check formatting without writing changes |

## Adding a project

Projects are a content collection, so adding one needs no markup changes: drop a JSON file in `src/data/projects/`.

```json
{
	"order": 3,
	"title": "My\nProject",
	"category": "WEB · REACT",
	"summary": "One or two sentences about what it does and why.",
	"stack": ["React", "TypeScript"],
	"href": "https://example.com",
	"variant": "compact"
}
```

- `order` sets the chapter number and display order.
- `title` may contain `\n` to break the line on purpose.
- Leave out `href` to show the project as work in progress.
- `variant` is `featured`, `compact` or `dark`; `screentone: true` adds a texture wash.
- Optional `cover` and `coverAlt` add an image.

The schema in `src/content.config.ts` validates every file, so bad data fails the build instead of the page.

## Customizing

- **Identity and links:** edit `src/lib/site-config.ts`.
- **Theme:** change `--accent` in `src/styles/design-tokens.css` to re-colour the whole site.

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the site with `withastro/action` and publishes it to GitHub Pages. The `CNAME` file maps it to `alvarofalcon.es`.

My [devlogs](https://alvarofalcon.es/devlogs/) live in a [separate repository](https://github.com/AlvaroFalcon/devlogs) and are served under the same domain.

## License

[GPL-3.0](LICENSE.md)
