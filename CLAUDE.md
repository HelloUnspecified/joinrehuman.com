# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for Unspecified Software Co., built with:
- Astro framework (v5.x)
- React for interactive components
- Tailwind CSS for styling
- MDX for content management

The site follows a component-based architecture with content managed through MDX files. It appears to be a marketing/agency website with various sections like hero, features, testimonials, pricing, etc.

## Commands

### Development

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build
npm run preview
```

### Astro-specific commands

```bash
# Run Astro CLI commands
npm run astro -- [command]

# Examples:
npm run astro -- add [integration]  # Add an integration
npm run astro -- check              # Check for errors
```

### Formatting

The project uses Prettier for code formatting:

```bash
# Format all files
npx prettier --write .
```

## Project Architecture

### Directory Structure

- `/src`: Main source code
  - `/components`: UI and functional components
    - `/functional`: React components (forms, sliders, etc.)
    - `/ui`: Astro components (header, footer, navigation, cards, etc.)
    - Other directories organized by page or feature
  - `/content`: MDX content files organized by section/page
  - `/css`: CSS styles (Tailwind and custom)
  - `/layout`: Layout templates
  - `/pages`: Astro pages and routes
  - `/utils`: Utility components

- `/public`: Static assets
  - `/assets`: Images, icons, JS scripts

### Content Management

Content is managed through MDX files in the `/src/content` directory, organized by section:
- `/IndexPage`: Content for the home page
- `/site`: Site-wide configurations (meta, header, footer)
- `/aboutPage`, `/blogs`, etc.: Content for specific pages

Each MDX file uses frontmatter for structured data.

### Key Components

1. **Layout System**
   - `Layout.astro`: Main layout component that includes header, footer, and loads CSS/JS

2. **Page Structure**
   - Pages in `/src/pages` use components from `/src/components`
   - Each page imports a layout and relevant section components

3. **Content Flow**
   - Content from MDX files is fetched using `getEntryBySlug`
   - Data is passed to components as props

4. **Interactive Elements**
   - React components in `/components/functional` handle interactive elements
   - Form submissions use web3forms.com API

5. **Styling**
   - Tailwind CSS for most styling
   - Additional custom CSS in `/src/css`
   - Animation using jos-animation library

## Development Patterns

1. **Adding New Pages**
   - Create a new `.astro` file in `/src/pages`
   - Use the main `Layout.astro` component
   - Import and use appropriate components

2. **Adding New Content**
   - Create MDX files in the appropriate content directory
   - Use frontmatter for structured data
   - Reference content in components using `getEntryBySlug`

3. **Creating Components**
   - Astro components (`.astro`) for static content
   - React components (`.jsx`) for interactive elements
   - Follow existing naming and organization patterns

4. **Styling Guidelines**
   - Use Tailwind classes for styling
   - Follow existing class naming patterns
   - Custom CSS in `/src/css` for specialized needs