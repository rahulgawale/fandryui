# AGENTS.md — Fandry UI

This document defines how humans and AI agents should reason when working in this repository.

It exists to preserve architectural intent, not to optimize for speed.

If you are an AI assistant, code generator, or automated agent:  
**read this file first and follow it strictly**.

---

## Mental Model

Fandry UI is a **layered system**.

Each layer has a single responsibility.  
Crossing layers casually is considered a defect.

Layers (from bottom to top):

1. Core (primitives built with native LWC)
2. Platform adapters (LWR, Salesforce)
3. Applications (lwr-oss for playground, docs, demos)

Changes must respect this direction.

---

## Layer Responsibilities

### Core Layer (`packages/core`)
Core is intentionally small.

Core provides:
- fd-* primitives built with native LWC
- extensible structure
- slots, tokens, and contracts
- normalized semantic events

Core must remain:
- boring
- predictable
- opinionated

Core must **not**:
- contain business logic
- contain Salesforce logic
- grow configuration surfaces casually

If you are unsure whether something belongs in Core, it probably does not.

---

### Platform Layers (future)
Platform layers adapt Core to environments such as:
- LWR OSS
- Salesforce Platform

They may:
- translate APIs
- bridge platform constraints
- integrate platform services

They may not:
- change Core contracts
- fork Core behavior
- bypass Core primitives

---

### Applications (`apps/lwr-oss`)
Applications exist to:
- demonstrate
- test
- document

They are allowed to be messy.  
Core is not.

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
2. Ensure it can be extended via slots
3. Keep API surface minimal
4. Normalize only semantic events
5. Avoid platform assumptions

If these conditions are not met, the component does not belong in Core.

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

- Do not introduce new Core APIs casually
- Do not add dependencies without justification
- Do not refactor structure unless explicitly asked
- Do not optimize prematurely
- Do not collapse layers for convenience

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
