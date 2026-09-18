# Fandry UI

**Why Should React Have All the Fun?**

Fandry UI is an opinionated, extensible UI foundation for **Lightning Web Components**, built from scratch with native LWC. This repo is both the component library itself and its own marketing/docs site, built entirely out of the library's own primitives.

- **Native LWC primitives** for behavior & accessibility
- **Strict boundaries** to keep the system sane as it grows
- **Extensibility over completeness** as a core principle

This is infrastructure, not a component zoo — the docs site around it exists to prove that out, not to be the point.

**Live site:** [fandryui.forcetrails.com](https://fandryui.forcetrails.com)

---

## What This Is

- A **design-system foundation** for LWC — 30 primitives (`fandry-*`) across Layout, Typography, Forms, Feedback, and Overlays & Data
- Focused on **extensibility over feature count**
- Built for **Salesforce, LWR, and the real world**
- TypeScript-first, single LWR project, boring by design

## What This Is Not

- Not a replacement for SLDS (yet)
- Not a drag-and-drop page builder
- Not React, pretending to be LWC

The primitives themselves are deliberately small and un-flashy — see `src/core/CORE_BOUNDARIES.md`. The marketing site is where flashy is allowed, since its whole job is showing what the primitives can compose into.

---

## Repository Structure

```
src/
  ├── assets/                # Static assets, global styles
  ├── layouts/                # LWR's HTML shell (fonts, meta)
  ├── core/
  │   └── fandry/              # Primitives (native LWC, TypeScript) -- the library itself
  │       ├── base/             # Shared base class + design tokens (tokens.css)
  │       ├── button/, card/, table/, ...  # One folder per fandry-* primitive
  └── modules/
      └── fandryui/             # The site itself: real composites and pages
          ├── home/, heroSection/, featureGrid/, dashboardExample/, ...
          ├── examples/, exampleGallery/    # /examples -- 10 interactive patterns
          ├── componentsIndex/, componentDoc/  # /components -- per-primitive docs
          └── componentsData/               # Single source of truth for the docs nav/props/code
      └── fandryuidemos/        # Docs-only illustration components (one demoX per
                                  # primitive, rendered live inside componentDoc) --
                                  # kept in their own namespace so they're never
                                  # mistaken for real site chrome
```

Key rule: **Primitives stay small.** If something feels like an app feature, it does not belong in `src/core/fandry/`.

---

## Prerequisites

- Node.js **20.13.1+** (this repo is pinned to `20.16.0` via Volta)
- npm (comes with Node.js)

## Setup

From repo root:

```bash
npm install
```

## Development

Start the LWR development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You should see the marketing home page, with `/examples` (10 interactive patterns) and `/components` (live docs for all 30 primitives) as the other two routes.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the LWR dev server (hot-reloading) |
| `npm run build` | Static-site-generate a production build into `site/` |
| `npm start` | Serve a build already in `site/` |
| `npm test` / `npm run test:watch` | Run the Jest suite (`@lwc/jest-preset`) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run clean` | Remove `__lwr_cache__` and `site/` |
| `npm run deploy` | Build, then publish `site/` to GitHub Pages |

## Layout Patterns

Use LWC for what LWC is good at. Use HTML and CSS for what HTML and CSS are
good at. LWC earns its keep on behavior, state, and accessibility; layout is
already a solved CSS problem, and wrapping it in a component would trade a
tool people already know for a black-boxed, rigid one they'd have to learn.
Fandry UI components should not own application layout. Containers, grids,
and stacks are CSS problems CSS already solves well, so instead of
`fandry-container`, `fandry-grid`, or `fandry-stack` components, Fandry
documents these as plain CSS classes/patterns (built on the same design
tokens as every primitive) in `src/assets/styles/global.css`:

```html
<div class="fandry-container">
  <fandry-heading level="1">Orders</fandry-heading>

  <div class="fandry-grid">
    <fandry-card>...</fandry-card>
    <fandry-card>...</fandry-card>
    <fandry-card>...</fandry-card>
  </div>
</div>
```

- `.fandry-container` — centers content, caps it at the site's standard
  `72rem` max-width, and applies responsive inline padding via
  `--fd-space-6`.
- `.fandry-grid` — a responsive `display: grid` (`repeat(auto-fit,
  minmax(280px, 1fr))`) for cards, dashboard metrics, and similar content
  blocks, with no breakpoints to configure.
- A vertical stack doesn't need a class at all: `display: flex;
  flex-direction: column; gap: var(--fd-space-4);` on any wrapper.

See `src/core/CORE_BOUNDARIES.md` for why these are CSS patterns, not
components.

## Design Principles

- Extensibility > completeness
- Composition > configuration
- Outcomes > implementations
- Boring is success

If a change feels exciting, it probably doesn't belong in `src/core/fandry/`.

## Contributing

Read these first:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [AGENTS.md](AGENTS.md)
- [src/core/CORE_BOUNDARIES.md](src/core/CORE_BOUNDARIES.md)

They exist to protect the architecture, not to slow you down.

## Status

- Early
- Experimental
- Architecture-first
- APIs may change in v0.x

That's intentional.

## License

MIT License - see the LICENSE file for details.
