# AGENTS.md — Essen Restaurant

## Commands
- Use Bun as the package manager; the committed lockfile is `bun.lock`.
- Dev server: `bun run dev` starts Next.js with Turbopack.
- Production check: `bun run build`.
- Focused verification: `bun run lint` and `bun run typecheck`.
- Formatting: `bun run format` only writes `**/*.{ts,tsx}`; it does not format CSS, JSON, or Markdown.
- No test runner is configured; do not claim tests ran unless you add/configure one.

## App Structure
- This is a single Next.js 16 App Router app, not a monorepo.
- Route entrypoint: `app/page.tsx` renders the landing page.
- Root layout: `app/layout.tsx` wires fonts, metadata, global CSS, and `components/theme-provider.tsx`.
- API routes live under `app/api/...` and use Next.js Route Handlers (`route.ts`).
- Backend logic lives in `services/`, `models/`, and `lib/` (currently minimal / placeholder).

## Styling And UI
- Tailwind CSS v4 is configured through `app/globals.css` and `@tailwindcss/postcss`; there is no `tailwind.config.*`.
- shadcn is configured by `components.json` with style `base-nova`, icon library `tabler`, CSS variables enabled, and aliases such as `@/components`, `@/components/ui`, and `@/lib/utils`.
- Prefer shadcn UI components from `@/components/ui`; add new ones with the shadcn CLI instead of hand-rolling common primitives.
- Use `@/lib/utils` `cn()` for class merging.
- Use `@tabler/icons-react` for icons. Do not introduce emoji icons or inline SVGs unless a required brand asset has no Tabler equivalent.
- Theme switching uses `next-themes` with `class` on `<html>`.
- Force light theme only: `forcedTheme="light"`, `enableSystem={false}`, `defaultTheme="light"`.

## Conventions
- TypeScript is strict and uses `@/*` as an alias to the repository root.
- Avoid `any`; model data with explicit interfaces/types in the feature area or a shared module when reused.
- Keep feature code grouped by feature where possible.
- Prettier settings are 2 spaces, no semicolons, double quotes, trailing commas where valid, and LF line endings.

## Tech Stack
- **Frontend:** Next.js 16 App Router, React 19, Tailwind CSS v4, shadcn/ui
- **Backend:** Next.js API Routes, Mongoose (MongoDB) — optional, site runs fine without it
- **Package Manager:** Bun

## Important Notes
- Environment variables are defined in `.env.example`. Never commit real secrets.
- `lib/db.ts` uses a singleton Mongoose connection pattern for Next.js. It gracefully skips connection if `MONGODB_URI` is not set.
- The site is a static frontend by default. MongoDB is only needed if you add dynamic backend features later.
- `lib/data.ts` contains all restaurant data: menu items, reviews, features, and verified Unsplash image URLs.
- Images are loaded from `images.unsplash.com` with `unoptimized: true` in `next.config.ts`.
- Cart state is managed via React Context in `components/cart-provider.tsx` (client-side only, no persistence).

## How to Run
1. `bun install`
2. `bun run dev`
3. Open `http://localhost:3000`

## Agent Rules
- Do not install new dependencies unless necessary; prefer built-ins or existing stack.
- Keep API routes thin; business logic lives in `services/`.
- Always preserve `.env.example` when adding new env vars.
- Run `bun run build` before committing to ensure it compiles.
