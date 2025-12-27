# Fandry UI

**Why Should React Have All the Fun?**

Fandry UI is an opinionated, extensible UI foundation for **Lightning Web Components**, built from scratch with native LWC.

It provides:
- **Native LWC primitives** for behavior & accessibility
- **Strict boundaries** to keep the system sane as it grows
- **Extensibility over completeness** as a core principle

This is infrastructure, not a component zoo.

---

## What This Is

- A **design-system foundation** for LWC
- Focused on **extensibility over feature count**
- Built for **Salesforce, LWR, and the real world**
- TypeScript-first, single LWR project, boring by design

---

## What This Is Not

- Not a replacement for SLDS (yet)
- Not a drag-and-drop page builder
- Not a collection of flashy demo components
- Not React, pretending to be LWC

---

## Repository Structure

```
src/
  ├── assets/          # Static assets
  ├── core/
  │   └── fd/          # All primitives (native LWC, TypeScript)
  │       ├── base/    # Base class with shared styles
  │       ├── button/
  │       ├── input/
  │       ├── textarea/
  │       └── styles/  # Tokens and base styles
  └── modules/
      └── fandryui/    # Main app component
```

Key rule: **Primitives stay small.**  
If something feels like an app feature, it does not belong in core/fd/.

## Prerequisites

- Node.js **18.17+** (20+ recommended)
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

Open http://localhost:3000/fandryui in your browser.

You should see:
- fd-input
- fd-textarea
- fd-button
- Native LWC primitives working
- Slots and events behaving correctly


## Design Principles

- Extensibility > completeness
- Composition > configuration
- Outcomes > implementations
- Boring is success

If a change feels exciting, it probably doesn’t belong in Core.

## Contributing

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