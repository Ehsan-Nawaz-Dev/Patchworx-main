# Patchworx Paving – Permanent Road Repair Website

This repository contains the marketing website for **Patchworx Paving®**, a permanent road repair solution focused on long‑term, high‑performance pavement repair.

The site is a single‑page React application with sections for the hero, problem, solution, comparisons, long‑term value, trust/testimonials, contact/quote form, legal information, and footer.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn‑ui components

## Getting started

Make sure you have a recent version of **Node.js** and **npm** installed.

```sh
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

By default the app runs on `http://localhost:5173` (or whichever port Vite chooses if that one is taken).

## Project structure

- `src/`
  - `main.tsx` – React entry point
  - `App.tsx` – app shell and router
  - `pages/Index.tsx` – main landing page layout
  - `components/` – hero, problem, solution, comparison, trust, contact, legal, footer, and shared UI components
  - `hooks/` – custom hooks (e.g. toast)

## Customization

- Update content, wording, and imagery in `src/components/*` and `src/pages/Index.tsx`.
- Adjust global styling and theme tokens in `src/index.css`, `tailwind.config.ts`, and shadcn‑ui config.
- SEO/meta tags and structured data are configured in `index.html`.

## License

Internal / private use for the Patchworx Paving project.
