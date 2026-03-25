# aliahhmad.com

Personal portfolio website for Ali Ahmad, built as a React frontend with a Vercel serverless contact function. The site acts as a living resume, project showcase, blog, and contact experience, with a visual style inspired by iOS-style glassmorphism.

## What This Project Does

- Introduces Ali through a map-backed landing page and short bio
- Showcases featured work and detailed project pages
- Includes a blog section for long-form writing
- Lets visitors send messages through a custom contact form
- Uses a Vercel serverless function to handle contact submissions with Mailtrap

## Highlights

- React single-page application powered by Vite
- Animated landing page with a non-interactive Mapbox background
- Glassmorphism-inspired UI built with Tailwind CSS and custom styling
- Project detail pages with tabbed content and screenshot galleries
- Blog listing and blog detail routes
- Contact form with toast feedback and Mailtrap-powered email delivery

## Tech Stack

### Frontend

- React
- React Router
- Vite
- Tailwind CSS
- MUI Icons
- Lucide React
- React Hot Toast
- Mapbox GL via `react-map-gl`

### Backend

- Node.js
- Vercel Serverless Functions
- Mailtrap

## Project Structure

```text
.
├── api/
│   └── contact.js        # Vercel serverless function for contact form email delivery
├── src/
│   ├── components/
│   │   ├── home/         # Hero, map, about, and connect sections
│   │   ├── layout/       # Navbar and footer
│   │   ├── project-details/
│   │   ├── blog/
│   │   ├── blog-details/
│   │   └── ui/
│   ├── data/             # Project and blog metadata
│   ├── hooks/
│   ├── pages/            # Route-level pages
│   └── styles/
├── package.json
├── vite.config.js
└── README.md
```

## Routes

### Frontend

- `/` - home page
- `/work` - all projects
- `/work/:id` - individual project detail pages
- `/blog` - all blog posts
- `/blog/:id` - individual blog posts

### Backend

- `POST /api/contact` - sends a contact message through Mailtrap

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_MAPBOX_TOKEN=your_mapbox_token
MAILTRAP_TOKEN=your_mailtrap_token
```

### Notes

- `VITE_MAPBOX_TOKEN` is used by the frontend map component
- `MAILTRAP_TOKEN` is used by the serverless contact function

## Running Locally

Install dependencies:

```bash
npm install
```

Start the React frontend:

```bash
npm run dev
```

For production, Vercel serves the frontend and exposes the contact handler at `/api/contact`.

## Contact Flow

The contact form lives in the frontend UI and posts to `/api/contact`. That request is handled by a Vercel serverless function in [`api/contact.js`](/Users/aliahmad/Desktop/Code/aliahhmad.com/api/contact.js), which validates the request and uses Mailtrap to send the message to Ali's inbox. This keeps form handling under your control instead of relying on a third-party form platform.

## Design Direction

This project leans into a polished portfolio presentation rather than a generic starter template:

- translucent panels and layered surfaces
- map-driven hero section
- compact mobile-friendly navigation
- project storytelling through screenshots and tabbed sections

## Deployment Notes

This repository is currently structured for Vercel as:

- a Vite-built React frontend
- a colocated serverless API function under `api/`

That means the frontend and contact endpoint can be deployed together in a single Vercel project.

---

> **Note:** AI assistance was used in generating code comments and documentation throughout this project.
