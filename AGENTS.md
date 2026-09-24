# AGENTS.md — Fandry UI

This document defines how humans and AI agents should reason when working in this repository.

It exists to preserve architectural intent, not to optimize for speed.

If you are an AI assistant, code generator, or automated agent:  
**read this file first and follow it strictly**.

---

## Mental Model

Fandry UI is a **single LWR OSS project** with clear boundaries.

Primitives live in `src/core/fandry/`.
Blocks live in `src/blocks/fandry/`.
The application lives in `src/modules/fandryui/`.

Primitives are foundational components that:

- Must remain small, boring, and predictable
- Should not contain business logic
- Should be extensible via slots and composition

The application can be messy.  
Primitives must not.

---

## Structure Responsibilities

### Primitives (`src/core/fandry/`)

Primitives are intentionally small.

Primitives provide:

- fandry-\* components built with native LWC
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

If you are unsure whether something belongs in core/fandry/, it probably does not.

---

## Design Tokens (Critical)

**Always use design tokens from `fandry/base/tokens.css` instead of hard-coded values.**

This is a **component library**, not a production application.

Every token has two names. A site **sets** the public `--fd-*` name (on
`:root`, a section, or one element) to theme everything below it. A
component **reads** the private `--_fd-*` name, which `tokens.css` resolves
from the public one or the default. `tokens.css` never declares a public
name: declaring it on `:host` is what would stop a site's value at the
shadow boundary.

✅ Good (inside a primitive, a block, or anything that extends Base):

```css
border-radius: var(--_fd-radius-sm);
padding: var(--_fd-space-2);
color: hsl(var(--_fd-text));
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

If a token doesn't exist, add it to `fandry/base/tokens.css` first, as
`--_fd-name: var(--fd-name, default);`. Sizes that belong to one component
(the switch's width, the tooltip's arrow) are tokens too, and whatever can
be derived from them is `calc()`ed rather than written down.
`base/__tests__/tokens.test.ts` fails on a `px`/`rem` length or a color
literal in component CSS; only `1px` (screen-reader-only boxes, optical
nudges) and zero are allowed.

### No per-component hooks

Don't add a custom property that only one component reads
(`--fd-card-bg`, `--fd-button-radius`, ...). It looks like a token but
isn't, and it duplicates what already exists: a token set on one element
is already scoped to it, and a part styles one component's internals. The
six such hooks that exist are deprecated and kept only for existing sites;
`tokens.test.ts` fails on a new one. A variable a component sets for its
own use (like the motion `--_fd-slide-*` direction) is private: `--_fd-`.

### Text

A primitive or block never ships words a site can't replace; public sites
are translated. Visible text is a slot with the English as its fallback
(`<slot name="clear-all">Clear all</slot>`). Text that can't be markup --
an `aria-label`, a string built from numbers ("2 of 5 selected") -- comes
from one `messages` prop per component, typed `Fd<Name>Messages`, with its
English in an exported `DEFAULT_<NAME>_MESSAGES` that the prop is merged
over. One `messages` prop, not a prop per string.

Text a field shows is overridable the same way on every field: `label`
and `help-text` slots (toggles take their label in the default slot, an
alert its `title` slot), with the prop as fallback. A slot must work
without its prop: keep the wrapper rendered and `hidden` while empty,
not behind `if:true={prop}`, or a slotted label never appears.

### Parts

Every element a site might reasonably restyle carries a `part`, named from
the shared vocabulary in `componentsData`'s `PART_DESCRIPTIONS` (`base` for
the single outermost element; `label`, `control`, `input`, `help-text`,
`indicator`, `panel`, `option`, ...). Reuse a name that means the same thing
before inventing one. `part` on a child fandry-* component is taken as a
property and never reaches the DOM: expose the child's element with
`exportparts="base: name"` instead. A component's `parts` list in
`componentsData` must match its templates; `parts.test.ts` checks it. Parts
are public API: renaming or removing one is a breaking change.

A state a site might style (checked, selected, active, current, disabled,
a variant) is an extra name on the part that shows it, built with
`partList('control', { checked: this.checked })` from `fandry/parts`, so
`::part(control checked)` targets it. Use the words in
`STATE_DESCRIPTIONS`; one word, one meaning (`current` is the page being
viewed, `active` the option under the keyboard). A class a site can't see
is not a state it can style.

### Motion

Motion is CSS-first and lives inside the component that owns it. Use the
`--_fd-duration-*`/`--_fd-ease-*` tokens and the keyframes in
`fandry/base/motion.css`; animate `opacity` and transforms, not layout. A
transient primitive (one that mounts/unmounts a panel) stays mounted until
its exit animation has finished, via `exitFinished()` from `fandry/motion` —
not `animationend`, and not a `setTimeout` guessing a duration. Reduced motion
is handled by the tokens themselves (they go to `0ms`), so a component never
needs its own `prefers-reduced-motion` query. Do not add animation props,
a generic motion/transition component, or an animation dependency.

---

### Blocks (`src/blocks/fandry/`)

Blocks are the *solution* layer that primitives are forbidden from being:
installable patterns (a data table with search, filters, inline edit and save
hooks; later, forms, settings pages, ...) composed **only** from primitives.
They exist so `core/fandry/` can stay small.

A block:

- is built from `fandry-*` primitives and design tokens, with no new
  dependencies and no hard-coded values
- is split like `table`: a template-less `<name>State` class holding the
  behavior, and a thin `<name>` component that adds the ready-made template --
  a consumer who needs other markup extends the state class
- is **controlled**: it never mutates the consumer's `data`; it reports
  outcomes through events and takes requests through function hooks
  (`saveRow`, `deleteRow`)
- takes column/field configuration through data the consumer already has (a
  tanstack column's `meta`), not a second configuration format
- gets its working page under `/blocks/<name>` in the application, running on
  dummy data, and its own tests
- is shipped by the same build as primitives: it appears in `registry.json` as
  `kind: "block"` and installs with `fandry add <name>`. `fandry add --all`
  covers components only.

A block may use every primitive; a primitive must never import a block. If a
primitive needs something a block has, that something belongs in the primitive
or nowhere.

### Base Class (`src/core/fandry/base/`)

All fandry-\* primitives extend Base.

Base provides:

- shared styles via static stylesheets
- design tokens import
- consistent foundation

Base must not:

- contain component-specific logic
- grow beyond shared styling needs

---

### Distribution (`scripts/build-dist.mjs`, `packages/ui/bin/`)

`fandryui` (npm, `packages/ui/dist`, gitignored) is **generated** from
`src/core/fandry` and `src/salesforce/fandry`, in two flavors: `modules/fandry/*`
for LWR / LWC OSS (`<fandry-*>`, kept as authored) and `sfdx/lwc/fandry*` for
Salesforce (renamed to `c/fandry*` / `<c-fandry-*>`, since on-platform code
lives in the default `c` namespace). Never edit generated output and never keep
a hand-maintained copy of a primitive. Author source with the `fandry/*`
namespace as usual. The `fandry` CLI (`packages/ui/bin/fandry.mjs`, no
dependencies) is hand-written; its dependency graph, `registry.json`, is
generated from what the bundles actually import and render, so a new
primitive needs no registration. On Salesforce nothing may import an npm
package: `@tanstack/table-core` is vendored as `fandryTableCore`, and the
build fails if any other package import appears.
`npm run verify:npm` and `npm run verify:sfdx` prove both platforms work.

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

**Booleans are a last resort, not a first instinct.** Before adding a
`true`/`false` `@api` property, ask whether the variation it controls
could instead be expressed as a slot, a named region, or an overridable
piece of the component. A boolean is acceptable when it toggles a
genuinely binary behavior (`disabled`, `loading`); it is not acceptable
as a substitute for letting the consumer supply their own markup.

*The one deliberate exception is fandry-table's feature flags*
(`enablePagination`, `enableRowSelection`, `singleRowSelection`,
`manualSorting`, ...). Each maps one-to-one to a tanstack feature and
toggles a genuinely binary behavior; the data-table block is where the
richer, composed layer lives. Don't copy the pattern to another primitive:
a new flag there, or anywhere else, has to meet the rule above.

**Do not build a black box.** `lightning-*` base components cannot be
extended, forked, or partially replaced by a consumer — that opacity is
exactly what this library exists to avoid. Every primitive should ship a
simple, ready-to-use default *and* a real seam for a consumer to override
or replace a piece of it without forking the whole component. Where a
component carries real internal state (not just presentation), prefer
splitting it into a template-less base class holding the state/behavior
and a thin default component that extends it with the ready-made
template — a consumer who needs different markup extends the same base
and writes their own template, instead of copying the component's
internals.

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

## Value props: native-like, not controlled

Primitives behave like native form controls (and `lightning-input`): a
control updates its own `value` / `checked` / `open` as the user acts, and
reports it with `change`. Blocks are controlled instead (they never change
the data they're given). This is deliberate -- making every primitive
controlled would break every consumer that doesn't write the value back.
The cost is documented for consumers in packages/ui/README.md ("Values").

## Event Model

- Primitives (`src/core/fandry/`, single-concern components like inputs and
  buttons) normalize to the base semantic vocabulary only:
  - `input`
  - `change`
  - `focus`
  - `blur`
- Application components (real state/behavior, like fandry-table's sorting,
  pagination, selection, filtering) may introduce additional custom
  events beyond that base vocabulary when the base vocabulary genuinely
  can't express the domain event (e.g. `sortchange`, `pagechange`,
  `rowselectionchange`, `filterchange`, `rowclick`) -- this is not a
  license to invent an event per prop; each one must earn its place the
  same way `input`/`change` did.
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

Before adding a new `fandry-*` component:

1. Verify it is a **primitive**, not a solution
2. Ensure it extends Base class from fandry/base
3. Ensure it can be extended via slots
4. Keep API surface minimal
5. Normalize only semantic events
6. Use design tokens from fandry/styles
7. Import Base using namespace: `import Base from 'fandry/base'`

If these conditions are not met, the component does not belong in core/fandry/.

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
- Always use namespace imports for components: `import Base from 'fandry/base'`
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
