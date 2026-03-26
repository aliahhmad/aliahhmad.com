# aliahhmad.com

Personal portfolio website for Ali Ahmad, built with React, Vite, Tailwind CSS, and a Vercel serverless contact API. The site acts as a living resume, project showcase, blog, and contact experience, with a glassmorphism-inspired visual language and a Mapbox-backed landing page.

## Overview

This project is a single-page React application with client-side routing for:

- a map-backed home page
- a curated work section with detailed project pages
- a blog index and blog detail views
- a modal contact form that posts to a custom serverless endpoint

The frontend is deployed alongside `api/contact.js`, which forwards contact submissions through Mailtrap.

## Features

- Sticky Mapbox background on the home page with Rochester time display
- Floating bottom navigation shared across the site
- Work listing plus dedicated project detail pages for:
  - Schdlr
  - aliahhmad.com
  - App Brewery course projects
- Reusable project-detail UI patterns including:
  - status pills
  - CTA link groups
  - browser-style screenshot frames
  - stat cards
  - feature cards
  - tech stack cards
  - architecture flows
  - screenshot galleries with a lightbox
- Blog index and long-form blog detail page support
- Modal contact form with toast feedback
- Vercel Analytics and Speed Insights integration

## Tech Stack

### Frontend

- React 19
- React Router
- Vite
- Tailwind CSS
- MUI Icons
- Lucide React
- React Hot Toast
- Mapbox GL via `react-map-gl`

### Backend

- Vercel Serverless Functions
- Mailtrap

### Tooling

- ESLint
- PostCSS
- Autoprefixer

## Project Structure

```text
.
├── api/
│   └── contact.js
├── public/
│   ├── home/
│   ├── projects/
│   └── work/
├── src/
│   ├── components/
│   │   ├── blog/
│   │   ├── blog-details/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── work/
│   │   └── work-details/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Routing

### Frontend Routes

- `/` - home page
- `/work` - all work/projects
- `/work/:id` - project detail page
- `/blog` - all blog posts
- `/blog/:id` - blog detail page

### API Route

- `POST /api/contact` - send a contact message

## Key Directories

- `src/pages/`
  Route-level page composition for home, work, and blog routes.

- `src/components/work-details/`
  Detail pages for each featured project, built from reusable UI building blocks.

- `src/components/ui/`
  Shared presentational pieces such as pills, browser frames, galleries, stat cards, and architecture flows.

- `src/data/`
  JSON metadata for blog and work listings.

- `src/hooks/usePageTitle.js`
  Small hook for updating the browser tab title per route.

- `src/styles/index.css`
  Global Tailwind layers, glass utility styles, animation definitions, and shared design tokens.

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token
MAILTRAP_TOKEN=your_mailtrap_token
```

### Variable Notes

- `VITE_MAPBOX_TOKEN`
  Required by the homepage map component.

- `MAILTRAP_TOKEN`
  Required by the Vercel contact API for sending emails.

## Local Development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Contact Flow

The contact modal in the frontend submits a `POST` request to `/api/contact`.

That request is handled by [`api/contact.js`](/Users/aliahmad/Desktop/Code/aliahhmad.com/api/contact.js), which:

- handles the browser preflight request
- validates the incoming message
- sends the message through Mailtrap
- returns a success or failure response to the UI

This keeps form handling inside the project instead of relying on a third-party form service.

## Design Notes

This project intentionally avoids a generic portfolio template feel. The current design direction includes:

- deep dark surfaces with translucent glass panels
- a map-driven landing page rather than a static hero background
- compact floating navigation for long-scroll pages
- story-driven project detail pages with screenshots, features, and architecture summaries

## Deployment

This repository is structured for Vercel deployment as:

- a Vite-built frontend
- a colocated serverless function under `api/`

That allows the frontend and contact endpoint to be deployed together in one project.

## Known Note

At the time of writing, ESLint may flag `process` inside `api/contact.js` unless the API file is configured for a Node/Vercel environment in the ESLint setup.

---

AI assistance was used for parts of the code comments and documentation in this project.
