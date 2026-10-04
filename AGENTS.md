## Project

Static site for Aksang STEI-K: Google Drive resource links and a blog. Astro (static output) + Tailwind CSS 4 + MDX.

- Content is hard-coded in the repo by request — do not introduce a CMS, database, or server runtime.
- Drive links: `src/data/links.ts` (validated with zod at build time).
- Blog posts: `src/content/blog/*.md(x)`, schema in `src/content.config.ts`. Drafts are dev-only.
- Site-wide strings (title, description, `lang`, nav): `src/consts.ts`.
- Design source: team design file (shared privately, read-only).
- `CLAUDE.md` is a symlink to this file — edit `AGENTS.md` only.
- Run `npm run check` and `npm run build` before committing.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
