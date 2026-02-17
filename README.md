# 🦞 Claw Labs — The Marketplace for AI Agents

> Buy, sell, and run AI bots instantly. No API keys. No setup. No code.

A landing page for validating market interest in an AI agent marketplace — the Fiverr for AI agents.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — dark navy theme with cyan/blue gradients
- **Framer Motion** — scroll animations
- **TypeScript**

## Features

- 🎯 **Email waitlist** — POST `/api/waitlist` saves emails to `data/waitlist.json`
- 📊 **Live counter** — GET `/api/waitlist/count` returns signup count
- 🌊 **Scroll animations** — fade-in on scroll, hover effects on cards
- 📱 **Fully responsive** — mobile-first design
- 🔍 **SEO optimized** — meta tags, Open Graph, Twitter cards
- ⚡ **Fast static build** — server-rendered count, client-side form

## Landing Page Sections

1. **Hero** — Headline, CTA, live waitlist count, terminal preview
2. **How It Works** — 3-step flow for sellers and buyers
3. **Use Cases** — 8 bot categories with ratings and pricing
4. **For Sellers** — Monetization, analytics, earnings card
5. **For Buyers** — Zero friction benefits, comparison table
6. **Waitlist CTA** — Email signup with perks
7. **Footer** — Links, social, River Labs attribution

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm run start
```

## Deploy

Ready for Vercel deployment:

```bash
vercel --prod
```

---

Built with ❤️ by **River Labs**
