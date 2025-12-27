# AGENTS.md — Fandry UI

This document defines how humans and AI agents should reason when working in this repository.

It exists to preserve architectural intent, not to optimize for speed.

If you are an AI assistant, code generator, or automated agent:  
**read this file first and follow it strictly**.

---

## Mental Model

Fandry UI is a **single LWR OSS project** with clear boundaries.

Primitives live in `src/core/fd/`.
The application lives in `src/modules/fandryui/`.

Primitives are foundational components that:

- Must remain small, boring, and predictable
- Should not contain business logic
- Should be extensible via slots and composition

The application can be messy.  
Primitives must not.

---

## Structure Responsibilities

### Primitives (`src/core/fd/`)

Primitives are intentionally small.

Primitives provide:

- fd-\* components built with native LWC
- extensible structure via Base class
- slots, tokens, and contracts
- normalized semantic events

Primitives must remain:

- boring
- predictable
- opinionated

Primitives must **not**:

- contain business logic
- contain Salesforce-specific logic
- grow configuration surfaces casually
- use hard-coded values instead of design tokens

If you are unsure whether something belongs in core/fd/, it probably does not.

---

## Design Tokens (Critical)

**Always use design tokens from `fd/base/tokens.css` instead of hard-coded values.**

This is a **component library**, not a production application.

✅ Good:

```css
border-radius: var(--fd-radius-sm);
padding: var(--fd-space-2);
color: hsl(var(--fd-text));
```

❌ Bad:

```css
border-radius: 4px;
padding: 8px;
color: #333;
```

Hard-coded values:

- Break theming
- Make maintenance difficult
- Create inconsistency
- Are not acceptable in primitives

If a token doesn't exist, add it to `fd/base/tokens.css` first.

---

### Base Class (`src/core/fd/base/`)

All fd-\* primitives extend Base.

Base provides:

- shared styles via static stylesheets
- design tokens import
- consistent foundation

Base must not:

- contain component-specific logic
- grow beyond shared styling needs

---

### Application (`src/modules/fandryui/`)

The application exists to:

- demonstrate primitives
- test behavior
- document usage

It is allowed to be messy.  
Primitives are not.

---

## Design Principles (Non-Negotiable)

### 1. Extensibility over completeness

We prefer:

- fewer features
- cleaner extension points

Over:

- feature-rich but rigid components

---

### 2. Composition over configuration

Prefer:

- slots
- composition
- small primitives

Avoid:

- flag-heavy APIs
- “just in case” options
- implicit behavior

---

### 3. Outcomes over implementations

Do not copy implementations from other systems.

Instead:

- understand the outcome
- reproduce it cleanly
- delegate behavior where appropriate

---

### 4. Boring is success

If a change feels exciting:

- reconsider it
- simplify it
- or move it out of Core

Core should feel uneventful.

---

## Event Model

- Core normalizes **semantic events only**
  - `input`
  - `change`
  - `focus`
  - `blur`
- Native DOM events bubble naturally
- Custom events must be semantic and well-documented

Do not proxy or re-emit DOM events unless there is a strong, documented reason.

---

## TypeScript Guidance

TypeScript is used to:

- define public contracts
- protect refactors
- communicate intent

TypeScript must not be used to:

- create clever abstractions
- encode business logic
- hide architectural mistakes

If a type is hard to read, it is wrong.

---

## How to Add a New Primitive

Before adding a new `fd-*` component:

1. Verify it is a **primitive**, not a solution
2. Ensure it extends Base class from fd/base
3. Ensure it can be extended via slots
4. Keep API surface minimal
5. Normalize only semantic events
6. Use design tokens from fd/styles
7. Import Base using namespace: `import Base from 'fd/base'`

If these conditions are not met, the component does not belong in core/fd/.

---

## How to Think About “AI Can Generate This”

If a component is:

- trivial to generate
- trivial to replace
- trivial to fork

Then it still needs:

- correct boundaries
- stable contracts
- predictable behavior

Generation does not remove the need for design.

---

## Agent Behavior Rules

If you are an AI agent:

- Do not introduce new primitive APIs casually
- Do not add dependencies without justification
- Do not refactor structure unless explicitly asked
- Do not optimize prematurely
- Do not break primitive boundaries for convenience
- Always use namespace imports for components: `import Base from 'fd/base'`
- Always use npm (not pnpm) for this project

If instructions conflict, **preserve architecture over task completion**.

---

## Final Note

This repository optimizes for:

- longevity
- clarity
- discipline

Not for:

- velocity
- novelty
- trend alignment

If you follow these constraints, your contributions will fit naturally.

If you ignore them, the system will degrade quietly.

That outcome is unacceptable.
