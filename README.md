# marwann.tech

1:1 software engineering mentorship at [marwann.tech](https://marwann.tech) — a personal practice with Marwan Mostafa, not a marketplace.

Programs cover junior to mid, mid to senior, technical coaching, and interview preparation. Visitors apply through a Google Form. Review, payment, and scheduling stay manual.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Configuration

Replace these before launch:

- `APPLICATION_FORM_URL` in `src/config/site.ts`
- `NEXT_PUBLIC_SITE_URL` in `.env.local` / Vercel (production: `https://marwann.tech`)
- Hero video files in `src/config/media.ts`
- Mentor photos in `public/images/mentor/`

Brand name and canonical domain live in `src/config/site.ts` (`SITE_NAME`, `SITE_DOMAIN`, `SITE_URL`).

## Location behavior

Vercel sets `x-vercel-ip-country`.

- `EG` → Egypt prices + Arabic intro video
- `MY` → Malaysia prices + English intro video
- anything else / missing → International prices + English intro video

Locally, set `DEV_COUNTRY=EG` or `DEV_COUNTRY=MY` in `.env.local`. There is no country picker on the site.

## Rendering

- `/` and `/pricing` stream location-specific video and prices
- `/programs`, `/about`, `/resources`, `/book` are static
