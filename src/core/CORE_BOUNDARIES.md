# Fandry Core – Boundaries & Enforcement

Fandry Core is intentionally constrained.

Its purpose is to provide **foundational UI primitives** that are:
- extensible
- predictable
- platform-agnostic

Core is not a solution layer.

---

## What Core MAY contain

Core may include:
- fd-* primitives built with native LWC (input, textarea, checkbox, etc.)
- structural layout for primitives
- slots for extensibility
- design tokens
- semantic event normalization

---

## What Core MUST NOT contain

The following are explicitly forbidden in Core:

### ❌ Platform Logic
- Salesforce record awareness
- LDS / wire adapters
- Apex calls
- Flow integration
- Navigation helpers

---

### ❌ Business or Solution Components
- Lookups
- Datatables
- File uploads
- Validation UX
- Wizards
- Forms with behavior

If it feels like an app feature, it does not belong in Core.

---

### ❌ Native Form Elements in Public APIs
- `<input>`
- `<textarea>`
- `<select>`

Native elements must be **properly wrapped** in fd-* components with normalized events and APIs.

---

### ❌ Configuration Explosion
- No “just in case” props
- No feature flags
- No preemptive extensibility

Core prefers opinionated defaults.

---

## Enforcement Rules

- Any addition to Core must justify its presence
- Additions that expand scope will be rejected
- Breaking these rules is grounds for reverting code

---

## Philosophy

Core should feel:
- boring
- small
- predictable

That is success.

If Core feels exciting, something is wrong.
