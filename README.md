# LeadSavior.ai — Marketing Website

Dark, premium single-page SaaS landing site for LeadSavior AI — three AI-powered growth tools for local service businesses: AI Receptionist, Review Poacher, and Website Builder.

## Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion (scroll and interaction animations)
- No backend — checkout via Stripe Payment Links (TODO), booking via Calendly

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Deployed on Vercel, auto-deploys on push to `main`. `vercel.json` handles client-side routing rewrites.

### Environment variables (Vercel)

```
VITE_CALENDLY_URL=https://calendly.com/david7803ktm/30min
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_REPLACE_WITH_YOUR_KEY
```

## TODO

- Replace Calendly links on pricing buttons with Stripe Payment Links (see comments in `src/components/Pricing.jsx` and `src/lib/constants.js`)

## Contact

david@leadsavior.ai — © 2025 LeadSavior AI
