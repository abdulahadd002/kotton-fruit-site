# Kotton Fruit — Site Prototype

Front-end-only Next.js prototype for the brand revamp. No backend, no real cart, no real checkout — mock data only. Built to evaluate the new brand identity and UX direction before committing to a full build.

## Stack
- Next.js 15 (App Router, RSC where possible)
- TypeScript strict
- Tailwind CSS + CSS variables for design tokens
- GSAP + ScrollTrigger + Lenis + SplitType for motion
- Mock data in `/data/*.json`

## Run
```bash
cd "kottonfruit-site"
npm install
npm run dev
```

Open http://localhost:3000.

## Pages shipped in Pass 1
- `/` — Home (hero, drop strip, manifesto, UGC wall, list signup)
- `/drops/drop-003` — Drop landing (cover, statement, lookbook, shop the drop)
- `/products/[handle]` — PDP (gallery, sticky info, story, in-the-wild)

## Design system
Defined in `lib/tokens.ts` and `styles/globals.css`. See `design-reference/` in the parent directory for the full design language and award-winning patterns reference.

## What's mocked
- Product images: solid color blocks with SKU codes (intentional — focuses judgment on layout/type/motion)
- Lifestyle/UGC/lookbook images: Unsplash URLs
- Cart, checkout, account, auth: not implemented in Pass 1
