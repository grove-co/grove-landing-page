# Grove Landing Page

A modern, minimal landing page for Grove — a student contributor program where college CS students work on real open-source projects alongside experienced engineers.

## Tech Stack

- **Framework:** [Astro](https://astro.build) (static site generation)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Fonts:** Inter (via Google Fonts)
- **Deployment:** Vercel (recommended)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Project Structure

```text
/
├── public/
│   └── favicon.svg          # Grove leaf logo
├── src/
│   ├── components/
│   │   ├── Header.astro     # Fixed navigation
│   │   ├── Hero.astro       # Main hero section
│   │   ├── HowItWorks.astro # 4-step process
│   │   ├── Projects.astro   # Featured projects
│   │   ├── Benefits.astro   # What you get
│   │   ├── FAQ.astro        # Common questions
│   │   ├── CTA.astro        # Discord join CTA
│   │   └── Footer.astro     # Site footer
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout
│   ├── pages/
│   │   └── index.astro      # Landing page
│   └── styles/
│       └── global.css       # Tailwind + custom theme
└── package.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at localhost:4321        |
| `npm run build`   | Build production site to ./dist/          |
| `npm run preview` | Preview production build locally            |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Astro — no config needed
4. Deploy!

### Other Platforms

Astro builds to static HTML. The ./dist/ folder can be deployed to any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Customization

### Discord Link

Update the Discord invite URL in src/components/CTA.astro

### Projects

Edit the projects array in src/components/Projects.astro

### Colors

Theme colors are defined in src/styles/global.css

## License

MIT
