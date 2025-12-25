# Fandry UI

**Why Should React Have All the Fun?**

Fandry UI is an opinionated, extensible UI foundation for **Lightning Web Components**, built on modern Web Components instead of fighting them.

It combines:
- **Vendor web components** for behavior & accessibility
- **Thin LWC adapters** for Salesforce trust and lifecycle
- **Strict boundaries** to keep the system sane as it grows

This is infrastructure, not a component zoo.

---

## What This Is

- A **design-system foundation** for LWC
- Focused on **extensibility over feature count**
- Built for **Salesforce, LWR, and the real world**
- TypeScript-first, monorepo-based, boring by design

---

## What This Is Not

- Not a replacement for SLDS (yet)
- Not a drag-and-drop page builder
- Not a collection of flashy demo components
- Not React, pretending to be LWC

---

## Repository Structure

```
packages/
├── core/ # fd-* primitives (LWC, TypeScript)
├── vendor/ # bundled web components (generated)
├── playground/ # experiments & docs (non-LWC)
├── lwr-oss/ # LWR-based runtime validation
```

Key rule: **Core stays small.**  
If something feels like an app feature, it does not belong there.

## Prerequisites

- Node.js **18.17+** (20+ recommended)
- pnpm **9+**

Install pnpm if needed:

```bash
npm install -g pnpm
```

## Prerequisites

- Node.js **18.17+** (20+ recommended)
- pnpm **9+**

Install pnpm if needed:

```bash
npm install -g pnpm
```

## Setup

From repo root:

```bash
pnpm install
```

Build vendor web components:

```bash
pnpm run build:vendor
```

Typecheck Core:

```bash
pnpm --filter @fandry/core exec tsc --noEmit
```

## Run LWR OSS Playground

This is the real runtime for Fandry UI components.

```bash
pnpm --filter lwr-oss dev
```

Open the URL printed by LWR (usually http://localhost:3000).

- You should see:
- fd-input
- fd-textarea
- Vendor behavior working
- Slots and events behaving correctly


## Design Principles

- Extensibility > completeness
- Composition > configuration
- Outcomes > implementations
- Boring is success

If a change feels exciting, it probably doesn’t belong in Core.

##Contributing

Read these first:
- CONTRIBUTING.md
- AGENTS.md
- packages/core/CORE_BOUNDARIES.md

They exist to protect the architecture, not to slow you down.

## Status

- Early
- Experimental
- Architecture-first
- APIs may change in v0.x

That’s intentional.

## License

MIT License - see the LICENSE file for details.

“This project bundles third-party web components licensed under MIT or compatible licenses. See individual packages for details.”