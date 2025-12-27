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

If you are unsure where something belongs, it probably does **not** belong in core/fd/.

---

## Primitives Are Intentionally Small

`src/core/fd/` is the foundation of Fandry UI.

Primitives exist to provide:

- extensible components built with native LWC
- stable public APIs
- predictable behavior
- design tokens

Primitives do **not** exist to solve application problems.

---

## Always Use Design Tokens (Non-Negotiable)

This is a **component library**, not a production application.

**Rule: All primitive styles must use design tokens from `fd/base/tokens.css`.**

Never use hard-coded values like:

- `4px` → use `var(--fd-radius-sm)`
- `8px` → use `var(--fd-space-2)`
- `#333` → use `hsl(var(--fd-text))`
- `rgba(0,0,0,0.1)` → use token-based values

Why:

- Ensures consistency across all components
- Enables theming and customization
- Makes maintenance predictable
- Preserves architectural intent

If you need a value that doesn't have a token, add it to `fd/base/tokens.css` first.

All fd-\* components should:

- Extend the Base class from fd/base
- Use design tokens from fd/styles
- Normalize semantic events only
- Be composable via slots

Pull requests that violate primitive boundaries will be closed.

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

feat(radio): add fd-radio-group component for proper grouping

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
- Business or solution components (lookup, datatable, etc.)
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

- Primitives normalize **semantic events** only (`input`, `change`, `focus`, `blur`)
- Native DOM events bubble naturally and are not re-emitted
- Custom events must be semantic and well-documented

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
