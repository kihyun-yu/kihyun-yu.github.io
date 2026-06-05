# Kihyun Yu

Personal academic homepage built with Next.js and Tailwind CSS.

## Content

- Personal/site metadata and navigation: `data/website.config.ts`
- About text: `data/home/About.mdx`
- Home page lists: `data/home/*.ts`
- Publications: `data/publications/Publications.bib`
- Profile image: `data/assets/profile.jpg`
- CV: `cv.pdf`

## Development

```bash
pnpm install
pnpm run dev
```

## Deployment

The GitHub Pages workflow builds the static site and copies `cv.pdf` to the exported site root.
