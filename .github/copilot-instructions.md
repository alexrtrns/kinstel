The instructions below are targeted guidance for AI coding assistants (Copilot-style agents) that will work on this repository.

Keep this short, actionable, and specific to patterns and files found in this project.

1. Big-picture architecture (what to change and where)

- This is a Next.js 15 app using the App Router (`src/app`) and React 18 server components by default. Server/component boundaries matter: files under `src/app` are server components unless they include `'use client'`.
- UI components and small interactive bits live in `src/components/*`. Many components in `src/components/ui/*` are client components and start with `"use client"`.
- Global layout and metadata: `src/app/layout.tsx` defines site metadata, global CSS (`globals.css`), analytics, and the WhatsApp widget.
- Pages: `src/app/page.tsx` composes sections (Hero, Stats, Services, Portfolio, Cta). Several sections are dynamically imported using Next's `dynamic()` with loading skeletons.
- Path alias: imports use `@/*` mapped to `./src/*` (see `tsconfig.json`). Prefer `@/` imports for intra-repo references.

2. AI and GenKit integration (how AI is wired here)

- The project uses GenKit with Google AI plugins. Entry point: `src/ai/genkit.ts` exports `ai = genkit({ plugins: [googleAI()], model: 'googleai/gemini-2.5-flash' })`.
- Developer helper scripts: `package.json` defines `genkit:dev` and `genkit:watch`:
  - `npm run genkit:dev` runs `genkit start -- tsx src/ai/dev.ts` (dev flows are imported for side effects in `src/ai/dev.ts`).
  - `npm run genkit:watch` runs the same with `--watch` to reload flows.
- `.genkit/` is ignored by `.gitignore`. Expect local GenKit state, generated flows, or telemetry to appear there when running GenKit.

3. Dev, build and test workflows (commands and gotchas)

- Run the Next dev server on port 9002: `npm run dev` (uses Turbopack by default). If Turbopack causes issues, run `next dev` without `--turbopack` by editing `package.json`.
- Production build: `npm run build` (sets NODE_ENV=production before `next build`). On Windows PowerShell the env assignment in `package.json` may not work; use: `$env:NODE_ENV='production'; npm run build` if needed.
- Typecheck & lint: `npm run typecheck` (tsc --noEmit) and `npm run lint` (next lint). Note `next.config.ts` currently disables type and eslint build failures (`ignoreBuildErrors`, `ignoreDuringBuilds`).

4. Project-specific conventions & patterns

- Server vs. client: Keep components that need browser APIs or hooks marked with `'use client'`. Examples: `src/components/layout/header.tsx`, `src/components/ui/*` (many client components).
- Dynamic imports: Several larger sections use `dynamic(() => import(...).then(m => m.Component), { loading: () => <Skeleton /> })`. Follow that pattern when lazy-loading heavy UI sections.
- Styling: Tailwind is used; utility merging function is `cn()` in `src/lib/utils.ts` which wraps `clsx + twMerge`. Use `cn(...)` to compose classes.
- Fonts: Google fonts are configured in `src/app/fonts.ts` and applied via classNames in `src/app/layout.tsx`.
- Images: `next.config.ts` defines remote patterns. When adding external images ensure they match the allowed hostnames (placehold.co, images.unsplash.com, picsum.photos) or add patterns.

5. Integration points & external deps to be aware of

- Firebase: `firebase` is a dependency and `apphosting.yaml` suggests Firebase Hosting is used. No explicit firebase wiring located in top-level files; search for firebase as needed.
- GenKit / Google AI: See `src/ai/genkit.ts` and `package.json` scripts. GenKit may require local environment variables or Google credentials when using Google AI plugins. `.env*` files are gitignored.
- Vercel analytics is used via `@vercel/analytics` in `src/app/layout.tsx`.

6. Files to inspect for context when changing behavior

- `src/app/layout.tsx` — global layout, metadata, analytics, and widget wiring.
- `src/app/page.tsx` — how sections compose the homepage and how `dynamic()` is used.
- `src/ai/genkit.ts` and `src/ai/dev.ts` — AI runtime setup and developer flows.
- `src/components/ui/*` — reusable client-side primitives (toaster, modal, input, etc.).
- `src/lib/*` — utilities and placeholder data.
- `next.config.ts`, `tsconfig.json`, `package.json` — build, path alias and scripts.

7. Example tasks & how to approach them (concrete examples)

- Add a new interactive widget that uses client hooks: create a component under `src/components/ui/` with `'use client'` at the top, export it, then import it in a server component using dynamic import if it's heavy.
- Add a new AI flow: add logic modules under `src/ai/flows` (or similar) and import them for side effects in `src/ai/dev.ts` — use `npm run genkit:dev` to iterate locally.
- Add a remote image host: update `next.config.ts` -> `images.remotePatterns` to include the host, then reference it with Next's `Image` component or `<img>`.

8. Safety and assumptions

- No secrets are checked in; `.env*` is ignored. Don't attempt to infer API keys from code. If flows require credentials (GenKit/Google), request them from the repo owner.
- Assumed path alias: `@/` -> `src/` (from `tsconfig.json`). Use this consistently.

If anything above is unclear or you want additional examples (unit tests, adding a GenKit flow, or a short walkthrough for running GenKit + Next locally), tell me which area to expand and I will update this file.
