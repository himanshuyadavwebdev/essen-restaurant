# Essen Restaurant

A modern, animated restaurant website built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **shadcn/ui**. Designed for a premium steakhouse experience with warm linen/beige tones, McDonald's red accents, and smooth CSS-only animations.

## Features

- **7 Pages**: Home, Menu, About, Reviews, Reservations, Contact, Order
- **Real Food Photography** — verified Unsplash images throughout
- **Smooth CSS Animations** — Ken Burns hero background, floating orbs, hover transitions, and staggered entrance animations
- **Performance Optimized** — no JavaScript animation libraries; pure CSS `@keyframes` and `transition` for 60fps animations without flicker
- **Responsive Design** — mobile-first with Tailwind CSS v4
- **Cart System** — add menu items to an order cart with quantity management
- **Reservation Form** — table booking with date, time, guests, and occasion selection
- **Newsletter Signup** — E-club subscription component
- **Forced Light Theme** — warm linen palette locked; no dark mode

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Runtime | [Bun](https://bun.sh) |
| React | 19 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| UI Kit | [shadcn/ui](https://ui.shadcn.com) (base-nova style) |
| Icons | [@tabler/icons-react](https://tabler-icons.io) |

## Project Structure

```
app/                  # Next.js App Router pages
  page.tsx            # Landing / Home
  menu/page.tsx       # Food menu with cart add
  about/page.tsx      # Story, values, chef
  reviews/page.tsx    # Guest reviews & ratings
  reserve/page.tsx    # Table reservation form
  contact/page.tsx    # Contact form & info
  order/page.tsx      # Cart & checkout
  api/                # Backend API routes
  layout.tsx          # Root layout (fonts, theme, globals)
  globals.css         # Warm palette, custom keyframes, utilities
components/
  ui/                 # shadcn components
  navbar.tsx          # Sticky nav + reservation bar
  footer.tsx          # Footer + quick links
  newsletter.tsx      # E-club signup
  cart-provider.tsx   # React context cart state
lib/
  data.ts             # Menu items, reviews, images, features
  db.ts               # Mongoose singleton (optional, for future backend)
  utils.ts            # cn() helper
public/               # Static assets
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/docs/installation) (recommended) — or Node.js 20+

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/himanshuyadavwebdev/essen-restaurant.git
   cd essen-restaurant
   ```

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Run the dev server**

   ```bash
   bun run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Optional: Database Setup

If you want to add backend features later (user accounts, reservations storage, etc.):

```bash
# 1. Copy the example env file
cp .env.example .env

# 2. Add your MongoDB connection string
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/essen
JWT_SECRET=your-super-secret-key

# 3. The app works fine without a database for the frontend-only experience
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Next.js dev server with Turbopack |
| `bun run build` | Create optimized production build |
| `bun run start` | Start production server |
| `bun run lint` | Run ESLint |
| `bun run typecheck` | Run TypeScript compiler (no emit) |
| `bun run format` | Format all `**/*.{ts,tsx}` with Prettier |

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#F5F0E8` | Page background (linen) |
| `--foreground` | `#3D2B1F` | Primary text (dark warm brown) |
| `--primary` | `#DA291C` | McDonald's red — buttons, accents |
| `--accent` | `#F4A261` | Golden yellow — highlights |
| `--card` | `#FFFAF5` | Card surfaces |
| `--border` | `#D9C9B6` | Warm tan borders |

## Animation Philosophy

This project uses **zero JavaScript animation libraries**. All motion is handled via CSS:

- **Load animations** — hero title, subtitle, and CTA buttons fade/scale in on page load with staggered `animation-delay`
- **Hover interactions** — cards lift (`translateY`), images zoom (`scale`), buttons scale with `transition`
- **Ambient motion** — hero background Ken Burns pan, subtle floating decorative orbs
- **Reduced motion** — `prefers-reduced-motion` media query disables animations for accessibility

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy (no environment variables required for the frontend)

> **Note:** Ensure `images.unsplash.com` is in your Next.js `remotePatterns` if you switch off `unoptimized` images.

## License

MIT

---

Built with passion by the Essen team.
