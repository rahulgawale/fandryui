# Contributing to Fandry UI

Thanks for your interest in contributing to Fandry UI.

Before you start: this project prioritizes **architecture, extensibility, and long-term maintainability** over speed or feature count. Contributions that violate these principles will be declined, even if they are technically correct.

This is intentional.

---

## Project Structure (Read First)

Fandry UI is a monorepo with strict boundaries.

```
packages/
  ├── core/ ← Foundational UI primitives (fd-\*)
  ├── vendor/ ← Generated vendor bundles (do not edit)
  ├── playground/ ← Dev & demo app
  ├── lwr-oss/ ← Compatibility testing (future)
  └── salesforce/ ← Platform packaging (future)
```


If you are unsure where something belongs, it probably does **not** belong in Core.

---

## Core Is Intentionally Small

`packages/core` is the foundation of Fandry UI.

Core exists to provide:
- extensible primitives
- stable public APIs
- predictable behavior
- design tokens

Core does **not** exist to solve application problems.

Before contributing to Core, read: packages/core/CORE_BOUNDARIES.md


Pull requests that violate Core boundaries will be closed.

---

## What We Accept

Contributions are welcome if they:

- Improve existing primitives without expanding scope
- Add **new primitives** with clear justification
- Improve accessibility or semantics
- Improve documentation or examples
- Fix bugs without introducing new APIs

Each PR should address **one concern**.

---

## What We Will Not Accept

The following will be rejected:

- Salesforce-specific logic in Core
- Business or solution components (lookup, datatable, etc.)
- Native form elements exposed in public APIs
- Vendor (`sl-*`) APIs leaking outside Core
- Large feature additions without discussion
- Configuration-heavy or “just in case” APIs

If a feature requires explanation longer than the code, it probably does not belong in Core.

---

## TypeScript Rules

Fandry UI uses TypeScript to enforce contracts.

Guidelines:
- Types should describe **public APIs**
- Avoid clever or complex generic types
- Prefer explicit unions over inference magic
- If a type makes the code harder to read, remove it

Types are contracts, not puzzles.

---

## Event & API Discipline

- Core normalizes **semantic events** only (`input`, `change`, `focus`, `blur`)
- Native DOM events bubble naturally and are not re-emitted
- Vendor-specific events must not escape Core

Do not introduce new events casually.

---

## Pull Request Expectations

Each pull request must include:
- Clear intent
- Architectural reasoning
- Scope justification (especially for Core changes)

PRs without context may be closed without comment.

---

## Philosophy

Fandry UI is not trying to be:
- the biggest UI library
- the fastest-moving project
- the most configurable system

It is trying to be:
- boring
- predictable
- extensible
- durable

If that resonates with you, you’re welcome here.
