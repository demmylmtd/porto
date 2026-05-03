# DemmyFi Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.
Professional finance vibe — navy, black & gold color scheme.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display + DM Sans)
- Deployed on Vercel

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Open http://localhost:3000

# 3. Build for production
npm run build
```

## Customize Your Content

All personal data lives in **one file** — just edit this:

```
lib/data.ts
```

Things to update:
- `siteConfig` — name, email, social links
- `experiences` — work & education history
- `certifications` — your credentials
- `projects` — your projects
- `blogPosts` — your articles

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero + featured experience + projects |
| `/about` | Bio, skills, background |
| `/experience` | Timeline of experience & education |
| `/certifications` | Credentials grouped by category |
| `/case-studies` | Detailed finance & consulting case studies |
| `/projects` | Project cards grid |
| `/blog` | Articles & writing |
| `/contact` | Email + social links |

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js — click Deploy
4. Done!
