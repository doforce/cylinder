# Cylinder HN

A Next.js client for Hacker News: the six story lists, plus search across all of Hacker News.

## Commands

```bash
bun install
bun run dev     # http://localhost:3000
bun run build
bun run start
bun run fmt     # prettier: no semicolons, double quotes, 100 columns
```

There is no test script, and `components/ui/calendar.test.tsx` is not wired to a runner. Type-check with `bunx tsc --noEmit`.

## Layout

- `app/[tab]/[num]/page.tsx` — one page of a story list. `app/page.tsx` renders the first tab.
- `app/search/` — search page, its zustand store (`store.ts`), the filter bar, pagination.
- `components/hn/` — everything that renders a story or a hit.
- `components/ui/` — shadcn primitives; treat as vendored.
- `lib/hn.ts` — the only place that fetches. `lib/types.ts` — HN and Algolia shapes. `lib/utils.ts` — date and link helpers.
- `config.ts` — the single source of user-visible text and of every tunable number.
- `styles/globals.css` — Tailwind v4 entry. `@/*` maps to the repo root.

## Conventions

- Menus, page size, tags, sorts, presets and other user-visible text live in `config.ts`; components read from there.
- Reuse the stack already in `package.json` (Next 16 App Router, React 19, Tailwind v4, zustand, SWR, radix). Ask before adding a dependency.
- Fetch through `lib/hn.ts` only. `request()` returns `undefined` on failure, so pages answer a missing payload with `notFound()` or `NoData` instead of throwing.
- Server Components by default; reach for `"use client"` when a component needs state, effects or event handlers.
- Bump `package.json` `version` in every commit that changes behaviour: patch for a fix or an internal refactor, minor for a new user-visible feature, major for a breaking change. A commit touching only docs, comments or formatting leaves the version alone. The header and footer render that number, so a stale one is user-visible.
- Run `bun run fmt` before you finish.

## Recipes

**Add a tab** — Add the name to `hnMenu` in `config.ts`. It feeds the nav, the sitemap, the metadata keywords and the page guard.

**Add a filter option** — Append to `hnSort` or `hnSupportTags` in `config.ts`; the filter bar, the store default and `fetchSearch()` all read those arrays.

**Add a filter dimension** — Extend `QueryStore` in `app/search/store.ts`, add the control in `app/search/filter.tsx`, and map it into `params` in `fetchSearch()` (`lib/hn.ts`).

**Change how a card looks** — `components/hn/hn-card.tsx` renders both list stories and search hits; `components/hn/hn-fetch-card.tsx` adapts a Firebase item into that shape.

## Two APIs, on purpose

Story lists come from the official Firebase API (ids first, then one item each), the canonical ordered source. Search comes from Algolia, because Firebase cannot search. A hit and an item are different shapes, and `components/hn/hn-fetch-card.tsx` is where one becomes the other.

## Vocabulary

`GLOSSARY.md` fixes this project's terms (Tab, `num` vs `page`, Hit, presets). Read it before naming anything user-visible or touching paging.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
