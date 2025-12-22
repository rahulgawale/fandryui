# Contributing to Fandry UI

Thanks for your interest in contributing to Fandry UI.

Before you do anything: this project prioritizes **architecture, correctness, and long-term maintainability** over speed or feature count.

If you’re looking to quickly add features or shortcuts, this may not be the right project for you.

---

## Guiding Principles

All contributions must align with these principles:

1. **Core stays small**
2. **Abstractions are intentional**
3. **Salesforce-specific logic does not leak into Core**
4. **No breaking changes without discussion**
5. **Developer experience > feature breadth**

---

## Repository Structure (read this first)

- `packages/core`
  - Mandatory, open source
  - Stable APIs only
  - No Salesforce hacks
- `packages/free`
  - Optional components
  - Still open source
- `packages/pro`
  - Not part of this repository

If you are unsure where something belongs, it probably does **not** belong in Core.

---

## What You Can Contribute (v0.x)

- Bug fixes
- Documentation improvements
- Design token refinements
- Accessibility improvements
- Small, focused primitives (with justification)

---

## What Will Not Be Accepted

Pull requests will be rejected if they:

- Add Salesforce-specific logic to Core
- Introduce SLDS or Lightning base components
- Add large feature sets without prior discussion
- Expand Core beyond its defined scope
- Depend directly on third-party UI libraries in public APIs
- Optimize prematurely or add configuration “just in case”

---

## Design Decisions Are Intentional

If something looks “too simple”, assume it is by design.

Please do not:
- add options because “someone might need it”
- generalize prematurely
- expose internal vendor APIs

If you believe a design decision is flawed, open a discussion *before* coding.

---

## Pull Request Guidelines

- One concern per PR
- Clear description of intent
- No unrelated refactors
- Include reasoning, not just code

PRs that lack context will be closed without comment.

---

## Code Style & Philosophy

- Prefer clarity over cleverness
- Prefer composition over inheritance
- Prefer boring solutions
- Avoid framework magic

This is infrastructure code. Treat it as such.

---

## Final Note

Fandry UI is not trying to win popularity contests.

It is trying to be **correct, calm, and durable**.

If that resonates with you, you’re welcome here.
