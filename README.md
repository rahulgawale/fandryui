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
| `npm run build:npm` | Generate the publishable `fandryui` package (both platforms, CLI, registry) into `packages/ui/dist` |
| `npm run verify:sfdx` | Exercise the `fandry` CLI (init/add) against throwaway Salesforce DX and LWR projects |
| `npm run example:sfdx` | Install the demo's components into `examples/salesforce` with the CLI |
| `npm run verify:npm` | Pack it, install the tarball into a separate LWR app, production-build that app, and check the module graph |
| `npm run clean` | Remove `__lwr_cache__` and `site/` |
| `npm run deploy` | Build, then publish `site/` to GitHub Pages |

## Distribution: npm and Salesforce

One source, one package (`fandryui`), two platforms. Nothing is hand-maintained twice: `npm run build:npm` derives everything from `src/core/fandry` and `src/salesforce/fandry`, and the only difference is the namespace each platform uses.

| | LWR / LWC OSS | Salesforce platform |
| --- | --- | --- |
| Get it | `npm i fandryui`, then `npx fandry init` | `npx fandry init`, then `npx fandry add table lookup` |
| Why | a bundler resolves the graph and ships only what a page uses | no bundler and no npm: components are copied in as source, with their dependencies |
| Namespace | custom `fandry` (a package can bring its own) | default `c` (on-platform code has no other) |
| Tag | `<fandry-button>` | `<c-fandry-button>` |
| Import | `import Base from 'fandry/base'` | `import Base from 'c/fandryBase'` |
| In the package | `modules/fandry/button/button.js` | `sfdx/lwc/fandryButton/` (flat), `.js-meta.xml` written by `fandry add` |

`registry.json` (generated from what each bundle really imports and renders) is the dependency graph the CLI uses. `@tanstack/table-core` can't be imported on-platform, so the Salesforce flavor bundles it, unmodified, as `fandryTableCore`. Step-by-step guides live on the docs site under **Get started** (`/getting-started`, `/getting-started/lwr-oss`, `/getting-started/salesforce`); consumer setup and limitations are also in [packages/ui/README.md](packages/ui/README.md). A worked Salesforce DX project: [examples/salesforce](examples/salesforce/README.md). Publishing runs from [.github/workflows/npm-workflow.yml](.github/workflows/npm-workflow.yml) when a GitHub Release is published (npm Trusted Publishing, no token).

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

## Motion

Fandry's motion is CSS-first, small, and lives inside each component. There
is no animation library, no `<fandry-motion>`/`<fandry-transition>` wrapper,
and no `animation`/`duration`/`easing` props: the transient primitives
(`fandry-popover`, `fandry-menu` inside it, `fandry-dialog`, `fandry-tooltip`,
`fandry-toast`) already know how to enter and exit, so this is all a
consumer writes:

```html
<fandry-dialog open={isOpen} label="Delete item" ontoggle={handleToggle}>...</fandry-dialog>
```

- **Tokens** (`src/core/fandry/base/tokens.css`): `--fd-duration-fast` (120ms),
  `--fd-duration-normal` (200ms), `--fd-duration-slow` (320ms),
  `--fd-ease-standard`, `--fd-ease-emphasized`. Components enter with
  `normal` and exit with `fast`.
- **Primitives** (`src/core/fandry/base/motion.css`): internal `@keyframes` for
  fade, fade-up, fade-scale, and slide (each with an `-in`/`-out` pair). They
  animate only `opacity` and transforms. A component applies one to its own
  panel, inside its own shadow tree — there's nothing global to select, and
  internal markup stays an implementation detail.
- **Enter/exit**: a panel plays its entrance the moment it mounts. On close it
  stays in the DOM, non-interactive (`inert`), until its exit animation has
  finished, then unmounts. That's the whole lifecycle (entering → open →
  exiting → removed) — CSS does the animating, and `fandry/motion`'s
  `exitFinished()` (a few lines over the native Web Animations API's
  `getAnimations()`) is what tells the component when it's safe to remove the
  panel. It resolves right away when nothing is animating, so a panel can
  never get stuck in the DOM. Focus and scroll-lock are handed back at the
  moment of closing, never after the exit.
- **Reduced motion**: under `prefers-reduced-motion: reduce` the duration
  tokens become `0ms`. Every state change and lifecycle step still happens,
  instantly; consumers don't opt in. Looping loading indicators (spinner,
  skeleton, indeterminate progress) keep running — they signal "still
  working", not a transition.
- **Custom motion**: it's ordinary HTML/CSS/LWC around Fandry components.
  Anything Fandry doesn't animate, or a motion you'd rather own end to end,
  is plain CSS in your own component; Fandry exposes no animation hooks to
  configure.

Live examples: the popover, menu, dialog, tooltip, and toast pages under
`/components`.

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
