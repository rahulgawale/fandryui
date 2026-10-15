# Contributing to Fandry UI

Thanks for your interest in contributing to Fandry UI.

Before you start: this project prioritizes **architecture, extensibility, and long-term maintainability** over speed or feature count. Contributions that violate these principles will be declined, even if they are technically correct.

This is intentional.

---

## Project Structure (Read First)

Fandry UI is a single LWR OSS project with clear boundaries.

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

Development:

```bash
npm install
npm run dev
```

If you are unsure where something belongs, it probably does **not** belong in core/fandry/.

---

## Primitives Are Intentionally Small

`src/core/fandry/` is the foundation of Fandry UI.

Primitives exist to provide:

- extensible components built with native LWC
- stable public APIs
- predictable behavior
- design tokens

Primitives do **not** exist to solve application problems.

---

## Always Use Design Tokens (Non-Negotiable)

This is a **component library**, not a production application.

**Rule: All primitive styles must use design tokens from `fandry/base/tokens.css`.**

Never use hard-coded values like:

- `4px` → use `var(--_fd-radius-sm)`
- `8px` → use `var(--_fd-space-2)`
- `#333` → use `hsl(var(--_fd-text))`
- `rgba(0,0,0,0.1)` → use token-based values

Why:

- Ensures consistency across all components
- Enables theming and customization
- Makes maintenance predictable
- Preserves architectural intent

Components read the private `--_fd-*` names; sites set the public `--fd-*` ones to theme (see the header of `tokens.css`). If you need a value that doesn't have a token, add it to `fandry/base/tokens.css` first, as `--_fd-name: var(--fd-name, default);`.

Anything a site might restyle gets a `part` from the shared vocabulary (see AGENTS.md, "Parts"), listed in that component's `parts` in `componentsData`.

All fandry-\* components should:

- Extend the Base class from fandry/base
- Use design tokens from fandry/styles
- Normalize semantic events only
- Be composable via slots

Pull requests that violate primitive boundaries will be closed.

### Focus rings

Draw a focus ring with the shared ring tokens, not a `box-shadow` of your own: `--_fd-ring-control` for a control (button, checkbox, link) and `--_fd-ring-field` for a text field's box. Keep `outline: var(--_fd-ring-width) solid transparent` beside it, which is what forced-colors mode paints. A component that also wants a shadow of its own (a button's hover lift) keeps it in a private `--_fd-*` variable and lists it after the ring, so neither replaces the other.

---

## Server Rendering (LWR SSR)

On a site with LWR SSR, a component's constructor, `connectedCallback`, `@api` setters and module scope run on the server, where there is no `document` or `window`. Don't use them there: no `document`/`window` listeners, timers, `requestAnimationFrame`, measuring or focusing. Do that work in `renderedCallback` or an event handler, or skip it on the server:

```ts
connectedCallback() {
  // Rendered on a server (SSR): there is no document yet, and the browser runs this again.
  if (typeof document === 'undefined') {
    return;
  }
  document.addEventListener('keydown', this.handleDocumentKeydown);
}
```

When the page loads, the browser creates the component again and runs these callbacks and setters for real, so skipping them on the server loses nothing. `base/__tests__/serverRender.ssr-test.ts` renders every component in `componentsData` with no `document` (see Testing).

---

## Sharing Behavior Between Components

When two public components need the same behavior but different presentation, share the **behavior**, not the markup.

- Put the state and behavior in a **template-less base class** in its own folder (`fandry/tableState`, `fandry/searchState`). It extends `Base`, has no `.html`, and marks what a subclass may override as `protected`.
- Each public component is a thin subclass with its own template. `fandry-table` is `tableState` plus a table template; `fandry-combobox` and `fandry-command` are `searchState` plus an anchored listbox and a modal palette.
- A consumer who needs different markup extends the same base class instead of copying internals. This is how we avoid building a black box (see AGENTS.md).
- Keep the popup out of the base. What differs between components (where the panel lives, what picking an item does) belongs in the subclass.
- Add an exact path entry for the base in `tsconfig.json`; the `fandry/*` wildcard can't express the folder convention.
- Don't reach for `fandry-popover` when the trigger is a text field: a popover toggles on any click inside its trigger, which fights clicking into a field to type.

For a data-driven list (options, commands), an item may carry its own `component` and `componentProps`, rendered with `lwc:is` in place of the plain label. LWC slot names must be static, so a per-item named slot isn't possible. The custom component draws only the inside of a row; the row keeps its role, highlight and click handling.

---

## Commit Message Convention (Conventional Commits)

Fandry UI uses [Conventional Commits](https://www.conventionalcommits.org/) for automated versioning and changelog generation.

**Format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `fix:` - Bug fixes (triggers PATCH release: 0.1.0 → 0.1.1)
- `feat:` - New features (triggers MINOR release: 0.1.0 → 0.2.0)
- `feat!:` or `BREAKING CHANGE:` - Breaking changes (triggers MAJOR release: 0.1.0 → 1.0.0)
- `docs:` - Documentation only changes (no release)
- `chore:` - Maintenance tasks (no release)
- `refactor:` - Code refactoring (no release)
- `style:` - Code style changes (no release)

**Examples:**

```
fix(button): correct hover shadow on ghost variant

feat(radio): add fandry-radio-group component for proper grouping

feat(input)!: remove deprecated value attribute

BREAKING CHANGE: The value attribute has been replaced with v-model pattern
```

**Rules:**

- Use lowercase for type and scope
- Keep subject line under 72 characters
- Use imperative mood ("add" not "added")
- Reference issues in footer: `Closes #123`

All commits to `main` branch must follow this convention. PRs should be squash-merged with a proper conventional commit message.

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

- Salesforce-specific logic in primitives
- Business or solution components: record lookups, wizards, forms with behavior. Generic search and selection primitives (`fandry-combobox`, `fandry-command`) are in scope. Anything that knows what a *record* is (a Salesforce lookup or polymorphic lookup) is not: it lives outside `src/core/` and extends `fandry/searchState`.
- Direct native form elements in public APIs (wrap them properly)
- Large feature additions without discussion
- Configuration-heavy or "just in case" APIs

If a feature requires explanation longer than the code, it probably does not belong in fd/.

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

- Single-concern primitives normalize **semantic events** only (`input`, `change`, `focus`, `blur`)
- Components with real state or behavior may add a semantic event the base vocabulary can't express (`select`, `toggle`), as AGENTS.md's Event Model allows. Each one must be documented and earn its place; don't add one per prop.
- Native DOM events bubble naturally and are not re-emitted
- Custom events must be semantic and well-documented

Do not introduce new events casually.

---

## Testing

Primitives use `@lwc/jest-preset`. Tests live in a colocated `__tests__` folder next to the component:

```
src/core/fandry/button/
  ├── button.ts
  ├── button.html
  ├── button.css
  └── __tests__/
      └── button.test.ts
```

Import the component under test with a relative path (`import FdButton from '../button'`), not the `fandry/*` alias — the alias is resolved by the build tooling, not by Jest or `tsc`.

Run tests with:

```bash
npm test
npm run test:watch
```

Test helpers (a custom item component, a subclass of a base class) live in the same `__tests__` folder. Two limits worth knowing:

- LWC freezes component prototypes, so `jest.spyOn` on an inherited method fails. Count calls in a small test subclass instead.
- jsdom has no layout, no real focus behavior and no ARIA id resolution. For overlays and keyboard interaction, also check the component in a real browser with `npm run dev`.

New primitives should cover their public API surface: rendered output, attribute reflection, and any semantic events dispatched. Do not test implementation details (private methods, internal state shape).

`npm test` runs two Jest projects, both set up in `jest.config.cjs`: `dom` (`*.test.ts`, `@lwc/jest-preset`) and `ssr` (`*.ssr-test.ts`, `@lwc/jest-preset/ssr`), which renders components with LWC's server engine and no `document`. A new primitive listed in `componentsData` is server-rendered by `serverRender.ssr-test.ts` automatically. If it only reaches for the browser in a certain state (open, with data), add the props for that state to the test's `PROPS`.

---

## Docs Site

The docs site (`src/modules/fandryui`) may be messy; a few things in it are checked:

- **Every route** in `lwr.config.json` has `properties`: a `title` (60 characters or fewer), a `description` (160 or fewer, unique) and its canonical `path`, ending in `/`. List the same URL in `src/assets/sitemap.xml` and in `src/assets/llms.txt` with its description. `routeMeta.test.ts` fails until all three agree. A component or getting-started page takes its description from its data (`componentsData`, `gettingStartedData`).
- **Internal links** end in `/`, like the canonical URLs, so they don't redirect.
- **Docs text** in `componentsData` and `gettingStartedData` marks code with backticks (`` `fandry-toast` ``, `` `--fd-bg` ``), rendered as `<code>` by `fandryui/docText`. Render that text through `<fandryui-doc-text>`, never as `{text}`, or the backticks show.
- **Demos** restyle through tokens and parts, as a site would. Don't put a `box-shadow` on a control's part (`fandry-button::part(base)`): a `::part()` rule from outside wins over the component's own `box-shadow` in every state, so it removes the focus ring. Put a shadow on the element with `filter: drop-shadow()` instead.

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
