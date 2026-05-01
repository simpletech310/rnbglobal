# R and B Global Security — Full Site Overhaul Plan

## Context

R and B Global Security is a California-based security firm offering two distinct service lines:
1. **B2B contract security** — uniformed guards, patrol, event security, camera installation for organizations.
2. **Training / certification** — Guard Card training, firearm training, baton/CPR/handcuff/pepper spray classes, Guard Card processing.

The current site (Wix) at https://www.randbglobalsecurity.com underdelivers on every dimension that matters for winning organizational contracts:

- **Trust signals are missing.** No California PPO license number, no certifications, no client logos, no testimonials, no case studies. A Yahoo email address (`r_marquia@yahoo.com`) is the primary contact.
- **Inconsistencies erode credibility.** Two different phone numbers appear (310-438-8044 in the header, 310-438-3044 elsewhere).
- **Content is thin.** About page is a few sentences. Services page lists 9 services with no detail or pricing. Meet the Team has only the founder. Contact page has no hours, no address, no map.
- **No B2B funnel.** Nothing speaks to procurement officers, facilities managers, event organizers, or property managers — the people who sign contracts. No industry pages, no RFP/quote flow.
- **Generic visual identity.** Stock-photo aesthetic, weak hierarchy, generic "Safety First" tagline, design ceiling capped by Wix templates.

**Goal:** Rebuild as a modern custom site that conveys professionalism, regulatory legitimacy, and operational depth — equally serving prospective clients (organizations looking to hire guards) and prospective trainees (individuals pursuing California guard cards / firearm permits).

**Scope constraint:** Keep the existing brand colors and logo concept. The icon will be redrawn as a clean SVG so it scales sharply on every screen.

---

## Decisions (already confirmed with user)

| Decision | Choice |
|---|---|
| Stack | **Next.js (App Router) + Tailwind CSS**, deployed to Vercel |
| Booking | **Inquiry forms only** — no online booking/payment. All training and contract leads route through forms + phone. |
| Content focus | **Equal weight** to B2B contracting and training. Two clear paths from the homepage. |
| Brand | Keep existing colors. Recreate logo icon as crisp **SVG**. |
| Content the user will supply | CA PPO license number, additional team photos/bios, confirmed correct phone number |

---

## Information Architecture

```
/                     Homepage — split funnel: Hire Guards | Get Trained
/services             Overview of contract security services
  /services/event-security
  /services/uniformed-guards
  /services/patrol
  /services/camera-installation
/training             Overview of all training programs
  /training/guard-card
  /training/firearm
  /training/baton
  /training/cpr
  /training/handcuff
  /training/pepper-spray
  /training/guard-card-processing
/industries           Who we protect (landing pages for B2B SEO)
  /industries/retail
  /industries/events
  /industries/corporate-office
  /industries/residential-hoa
  /industries/construction
/about                Company story, values, license, certifications
/team                 Founder + guards/trainers
/contact              Form, phone, address, hours, map, two CTAs (hire vs train)
/request-quote        Dedicated B2B intake form (longer, qualifying)
/faq                  Common questions for both audiences
/privacy, /terms      Legal
```

`/services` and `/training` each have sub-pages so each offering ranks individually for SEO and gives sales-quality depth.

---

## Page-by-page design

### Homepage `/`
- **Hero:** Strong photographic background (uniformed guard, professional setting). Headline conveys 27+ years protecting California organizations. Two primary CTAs side-by-side: **"Hire Security"** → `/request-quote` and **"Get Your Guard Card"** → `/training/guard-card`.
- **Trust bar** directly under hero: CA PPO license #, BSIS-certified, years in business, 24/7 dispatch, insured & bonded.
- **Two-path section:** Mirrored cards — one for organizations (industries served, response time, types of guards), one for individuals (training programs, exam pass rate, schedule).
- **Why R&B:** 4 pillars — Vetted & Trained Guards, Licensed & Insured, 24/7 Operations, Local CA Expertise.
- **Industries served:** Logo strip / icon grid with links to industry pages.
- **Testimonials:** Carousel of 3–6 client quotes (placeholders until user supplies).
- **Founder quote** with photo of Raymond Baker — humanizes the firm.
- **Final CTA section:** Phone, contact form preview, "Request a Quote" button.

### Services `/services` and sub-pages
Each sub-page follows the same template: hero with use case, what's included, who it's for, sample deployment scenarios, CTA to request a quote. Pricing intentionally not shown for B2B services — quote-driven by design.

### Training `/training` and sub-pages
Each sub-page: course overview, hours, price, what students learn, what's required to enroll (age, ID, fingerprinting), what they walk away with (CA Guard Card, BSIS certification, etc.), inquiry form. Pricing IS shown here — training is transactional and price transparency converts.

### Industries `/industries/*`
Five SEO landing pages. Each follows: pain points for that industry, how R&B addresses them, typical guard profile, sample post specs, related case studies (placeholders), CTA. These pages capture searches like "retail security guards Paramount CA" that the current site cannot rank for.

### About `/about`
Founding story, mission, values (Professionalism / Excellence / Timeliness — preserved from existing site), CA PPO license number prominently displayed, list of certifications (BSIS, CPR/AED, Baton, Firearm, etc.), insurance/bonding mention, service area map of Southern California.

### Team `/team`
Founder bio expanded. Card grid for additional team members (placeholder structure ready for user-supplied content). Each card: photo, name, role, certifications, brief bio.

### Contact `/contact`
Two clear paths in the form (radio: "Hire Security" vs "Get Trained"), then conditional fields. Phone, email, physical address (7300 Alondra Blvd, Suite 201, Paramount, CA 90723), hours of operation, embedded map. Social links.

### Request a Quote `/request-quote`
Longer qualifying form for organizations: company name, industry, location, type of guards needed, hours/coverage, start date, budget range, contact info. Builds a real B2B lead pipeline.

---

## Visual & brand system

- **Palette:** Existing brand blue + neutrals. Will sample exact hex values from the current site logo and codify in `tailwind.config.ts` as `brand-*` tokens.
- **Type:** Pair a confident sans for headlines (Inter, Manrope, or similar) with a readable body sans. No serifs — wrong tone for security.
- **Iconography:** Lucide or Phosphor icon set, used consistently and sparingly.
- **Photography:** Professional security imagery — guards on post, control rooms, training in progress. Curated stock initially; replace with real photos as available.
- **Logo:** Recreate the existing icon as a hand-built SVG component (`components/Logo.tsx`) so it renders crisp at every size and supports light/dark backgrounds via `currentColor`.
- **Motion:** Subtle. Fades on scroll, button micro-interactions. Nothing flashy — the audience is buyers of risk-mitigation services.
- **Accessibility:** WCAG 2.1 AA throughout — color contrast, keyboard nav, reduced-motion respect, semantic HTML, focus states.

---

## Technical architecture

```
randb-site/
├── app/
│   ├── layout.tsx                       Root layout, fonts, header, footer, metadata
│   ├── page.tsx                         Homepage
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx              Dynamic per-service pages from MDX/data
│   ├── training/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── industries/[slug]/page.tsx
│   ├── about/page.tsx
│   ├── team/page.tsx
│   ├── contact/page.tsx
│   ├── request-quote/page.tsx
│   ├── faq/page.tsx
│   ├── api/
│   │   ├── contact/route.ts             POST → email via Resend
│   │   └── quote/route.ts               POST → email via Resend
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── Logo.tsx                         SVG logo component
│   ├── Header.tsx, Footer.tsx
│   ├── Hero.tsx, TrustBar.tsx, CTASection.tsx
│   ├── ServiceCard.tsx, TrainingCard.tsx, IndustryCard.tsx
│   ├── Testimonial.tsx
│   ├── ContactForm.tsx, QuoteForm.tsx   React Hook Form + Zod
│   └── ui/                              Reusable primitives (Button, Input, etc.)
├── content/
│   ├── services.ts                      Typed data for services
│   ├── training.ts                      Typed data for training programs
│   ├── industries.ts
│   ├── team.ts
│   ├── testimonials.ts
│   └── faq.ts
├── lib/
│   ├── seo.ts                           Per-page metadata helpers
│   └── schema.ts                        JSON-LD generators (LocalBusiness, Course, Service)
├── public/
│   ├── images/                          Optimized photos
│   └── favicon, og-image, etc.
├── tailwind.config.ts                   Brand tokens
├── next.config.js
└── package.json
```

**Forms:** React Hook Form + Zod validation. Submissions POST to Next.js route handlers that send via **Resend** (simple, reliable transactional email) to a chosen inbox. Spam protection via honeypot field + Cloudflare Turnstile.

**SEO:**
- Per-page `<title>` and meta descriptions via Next.js metadata API.
- JSON-LD structured data: `LocalBusiness` (sitewide), `Service` (each service page), `Course` (each training page), `FAQPage` (FAQ).
- Auto-generated sitemap and robots.
- Open Graph images per page.
- Local SEO basics: NAP (name/address/phone) consistent in footer, schema, and contact page.

**Performance targets:** Lighthouse ≥ 95 across the board. Static rendering for all pages, image optimization via `next/image`, fonts via `next/font`.

**Hosting:** Vercel (free tier sufficient at this scale). DNS pointed from current registrar to Vercel — preserves `randbglobalsecurity.com`.

**Analytics:** Vercel Analytics (privacy-friendly) + Google Tag Manager hook so the user can add GA4 / Meta Pixel later.

---

## Content gaps & how they're handled

| Item | User to supply | Placeholder strategy |
|---|---|---|
| CA PPO license # | Yes | `PPO# XXXXXXX` in footer/about until provided |
| Correct phone number | Yes | Use 310-438-3044 sitewide until confirmed; one-line change |
| Additional team bios/photos | Yes | Team page renders only Raymond's card until user adds entries to `content/team.ts` |
| Client testimonials | No (later) | Three credible-sounding placeholder quotes attributed to "Property Manager, Long Beach" etc., clearly marked in the data file as placeholders |
| Real client logos | No (later) | Logo strip hidden until provided |
| Project photos | No (later) | Curated stock until user supplies |

All placeholder content lives in typed data files (`content/*.ts`) so swaps are a one-line edit, not a hunt through JSX.

---

## Build sequence

1. **Foundation** — Next.js project, Tailwind, brand tokens, fonts, layout, header/footer, SVG logo component.
2. **Static pages** — About, Team, Contact, FAQ, legal.
3. **Service & training systems** — data files, sub-page templates, overview pages.
4. **Industry pages** — five SEO landing pages.
5. **Homepage** — composed last, since it pulls from all the above.
6. **Forms & API** — Contact, Quote, Resend integration, Turnstile.
7. **SEO & schema** — metadata, sitemap, JSON-LD, OG images.
8. **Polish** — accessibility audit, Lighthouse pass, responsive QA at 375 / 768 / 1280 / 1920.
9. **Deploy** — Vercel, custom domain swap, redirect old Wix URLs to closest matches.

Estimated scope: ~25–35 pages of original content across roughly 15 unique page templates. Realistic for a focused multi-day build.

---

## Verification

End-to-end checks before going live:

- **Local dev:** `npm run dev` — every route loads, no console errors.
- **Build:** `npm run build` — no TypeScript or lint errors, all pages statically generated.
- **Lighthouse:** ≥ 95 Performance / Accessibility / Best Practices / SEO on homepage and 2–3 key inner pages.
- **Forms:** Submit Contact and Quote forms in dev — verify Resend delivery to a test inbox, verify validation errors render, verify Turnstile blocks empty bot submissions.
- **Responsive:** Manual sweep at 375 / 768 / 1280 / 1920 with browser devtools.
- **Schema:** Run pages through Google Rich Results Test — `LocalBusiness`, `Course`, `Service`, `FAQPage` all valid.
- **NAP consistency:** Phone, address, business name identical across header, footer, contact page, and JSON-LD.
- **Link audit:** No broken internal links, all CTAs route to the correct funnel.
- **Pre-launch on Vercel preview URL:** User reviews end-to-end before DNS cutover.
- **Post-launch:** 301 redirects from old Wix paths (`/book-online`, `/meet-the-team`, etc.) to new equivalents so existing inbound links and Google rankings carry over.

---

## Open items the user should track

- Provide CA PPO license number.
- Confirm correct primary phone number (310-438-3044 vs 310-438-8044).
- Decide on a professional email (e.g., `info@randbglobalsecurity.com`) to replace the Yahoo address — recommended even though not strictly required for the rebuild.
- Supply additional team headshots and bios when ready.
- Supply 3–6 real testimonials and any client logos cleared for use.
- Decide whether to keep the Wix booking system live in parallel during transition, or sunset it at launch.
