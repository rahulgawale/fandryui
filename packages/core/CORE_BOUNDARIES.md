# Fandry Core – Scope & Boundaries

Fandry Core is intentionally constrained.

Its purpose is to provide:
- stable abstractions
- consistent APIs
- a foundation for higher-level components

It is **not** a feature playground.

---

## What Core Is Allowed to Contain

Core may include:

- Base UI primitives (input, textarea, label)
- Design tokens
- Adapter utilities
- Accessibility-safe defaults
- Thin wrappers around web-component primitives
- Stable, documented APIs

---

## What Core Must NEVER Include

The following are explicitly forbidden in Core:

### ❌ Salesforce-Specific Logic
- Record awareness
- LDS / wire adapters
- Apex calls
- Flow integration
- Navigation helpers

These belong in higher layers.

---

### ❌ Complex Business Components
- Datatables
- Lookups
- Multi-select logic
- File uploads
- Charts
- Layout builders

If it feels like a “solution”, it does not belong in Core.

---

### ❌ SLDS or Lightning Base Components
- No SLDS classes
- No `lightning-*` components
- No Salesforce UI abstractions

Core must remain platform-agnostic at the UI level.

---

### ❌ Vendor API Leakage
- No public exposure of Shoelace/Web Awesome APIs
- No dependency on vendor-specific event names
- No reliance on internal vendor DOM structure

All vendor usage must be hidden behind adapters.

---

### ❌ Configuration Explosion
- No “just in case” options
- No infinite variants
- No premature extensibility

Core prefers **opinionated defaults**.

---

## Growth Rule

If a proposed change makes Core:
- harder to reason about
- harder to document
- harder to replace

It will be rejected.

Core should feel:
- boring
- predictable
- stable

That is success.

---

## Enforcement

Changes that violate these rules will be reverted, even if technically correct.

These boundaries exist to protect long-term maintainability.
