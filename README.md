# Garma Pools

Landing page for Garma Pools — pool construction, maintenance, cleaning, repair,
and pool care products in the Rio Grande Valley, Texas. Built with Next.js
(App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project structure

- `src/data/` — editable content: `company.ts` (name/phone/region), `services.ts`,
  `quoteWizard.ts` (the get-a-quote flow), `construction.ts`, `maintenance.ts`,
  `products.ts`, `serviceAreas.ts`, `quickQuote.ts`, `howItWorks.ts`. Update
  these files rather than hardcoding copy in components.
- `src/components/` — one component per landing page section, plus `ui/` for
  shared primitives (`Container`, `SectionHeading`, `PlaceholderImage`).
- `src/lib/quote.ts` — where the quote wizard submission is sent. There is no
  backend yet; this is the single place to wire up email, WhatsApp, a CRM,
  Google Sheets, or a payment step later.
- `src/lib/schema.ts` — LocalBusiness/Service JSON-LD for local SEO.

## What's intentionally a placeholder

No real Garma Pools photography, pricing, product catalog, confirmed service
cities, or social links exist yet. These are marked clearly in the code and
UI so they're easy to find and replace:

- Photos: every image slot uses `PlaceholderImage` (`src/components/ui/PlaceholderImage.tsx`).
- Prices: `products.ts` and `quickQuote.ts` use `null` prices, rendered as
  "Request a custom quote" / "Price not yet available".
- Service area cities: `serviceAreas.ts` — coverage is shown as unconfirmed
  until the business confirms it.
- Construction categories not yet confirmed as real offerings are flagged
  with `confirmed: false` in `construction.ts`.
- Social links: `company.ts` — empty until real profile URLs are provided.

## Deploy

Deploys via Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL so
metadata, sitemap, and JSON-LD use the right domain.
