# CLAUDE.md

## Project

Astro 5.x marketing site for re/Human (Unspecified Software Co.) with React interactive components, Tailwind CSS, and MDX content.

## Commands

- `npm run dev` — dev server on localhost:4321
- `npm run build` — production build to ./dist/
- `npx prettier --write .` — format all files
- `npm run astro -- check` — check for errors

## Key Patterns

- Astro components (.astro) for static content, React (.jsx) for interactive elements
- Content managed via MDX files in /src/content with frontmatter
- Astro 5 Content Layer API for fetching content (not the deprecated getEntryBySlug)
- Form submissions use web3forms.com API
- Animations use gsap library

## Style

- Use Tailwind classes for styling
- Follow existing component organization patterns
