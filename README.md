# tech-demos

Daily tech demos playground deployed via Cloudflare Pages preview branches.

## Overview

This repository hosts experimental tech demos and prototypes. Each weekday, a new demo may be added under `demos/<slug>/` on its own branch (e.g., `demo/interactive-canvas`). Cloudflare Pages automatically generates preview URLs for each branch, making it easy to share and review demos in isolation.

## Project Structure

```
tech-demos/
├── index.html          # Landing page listing all demos
├── src/                # TypeScript source files
│   └── main.ts
├── demos/              # Individual demo pages
│   └── hello/
│       └── index.html
├── dist/               # Build output (generated)
└── package.json
```

## Development

### Prerequisites

- Node.js 18+ and npm

### Setup

```bash
npm install
```

### Scripts

- `npm run dev` — Start development server with hot reload
- `npm run build` — Build for production to `dist/`
- `npm run preview` — Preview production build locally

## Deployment Workflow

1. **Create a demo branch**: `git checkout -b demo/your-feature-name`
2. **Add your demo**: Create `demos/your-feature-name/index.html` and assets
3. **Update landing page**: Add your demo to the list in `index.html`
4. **Push branch**: Cloudflare Pages will automatically deploy a preview
5. **Share the preview URL**: Use branch-specific URLs for feedback

### Branch Aliases

Cloudflare Pages supports [branch aliases](https://developers.cloudflare.com/pages/configuration/branch-build-controls/), allowing consistent URLs like `demo-feature-name.tech-demos.pages.dev` regardless of the exact branch name.

## Tech Stack

- **Build Tool**: Vite
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages
- **Styling**: Vanilla CSS (keep it simple)

## License

MIT
