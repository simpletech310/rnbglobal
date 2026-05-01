# R and B Global Security

Marketing site for R and B Global Security — a California-licensed firm offering contract security services and BSIS-aligned training programs.

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS 3
- TypeScript
- React Hook Form + Zod
- Resend (transactional email)
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY etc.
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Environment variables

| Var | Required | Notes |
|---|---|---|
| `RESEND_API_KEY` | Recommended | If unset, form submissions log to the server console instead of emailing. |
| `CONTACT_TO_EMAIL` | Recommended | Where contact / quote form submissions are delivered. |
| `CONTACT_FROM_EMAIL` | Recommended | Verified Resend sender. |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Used for canonical URLs and sitemap. |

## Open content items

These appear as placeholders until supplied:

- California PPO license number (BSIS) — update `content/site.ts`.
- Confirmed primary phone number — update `content/site.ts`.
- Additional team headshots and bios — append to `content/team.ts`.
- Real client testimonials and logos — append to `content/testimonials.ts`.

## Deploy

Push to `main` triggers a Vercel deploy. Set the env vars above in the Vercel project settings before going live.
