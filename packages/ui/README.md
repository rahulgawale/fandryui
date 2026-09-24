# fandry

Small, extensible [Lightning Web Components](https://lwc.dev) you own and can read. Fandry UI ships as **plain LWC source** (HTML, CSS and JavaScript), not a compiled runtime, so there is nothing to reverse-engineer: open `node_modules/fandryui/modules/fandry/button/` and read it.

Docs and live examples: <https://fandryui.forcetrails.com>

## Native shadow DOM, on Salesforce too

Every fandry component renders in **native shadow DOM**, not Salesforce's synthetic-shadow polyfill: `fandry/base` sets `static shadowSupportMode = 'native'`, which LWC honours per component even in orgs that load the polyfill. Lightning base components were built on synthetic shadow and Salesforce is moving them to native over time; fandry is native already. What that gives you:

- **Restyling from outside.** `::part()` and `exportparts` need a real shadow root. Under synthetic shadow a component's internals can't be styled from your CSS at all.
- **Standard behavior.** Encapsulation, slots, focus and `event.composedPath()` work as the web platform specifies, not as a polyfill approximates them, so browser docs and devtools tell the truth.
- **One behavior everywhere.** The same component behaves identically on an LWR site and in a Salesforce org, whatever shadow mode the org uses for everything else.

Your own components can stay in whatever mode they use today: a synthetic-shadow component can use fandry components and style them with parts and tokens (checked in a Salesforce org). Global stylesheets such as SLDS don't reach inside a fandry component, by design; theme it with `--fd-*` tokens and parts instead.

## Installation

```bash
npm install fandryui
```

or `pnpm add fandryui`. Then run the setup command for your platform. The package includes a small CLI, `fandry` (`npx fandry ...`, or `npx fandryui ...` before it is installed).

`lwc` is a **peer dependency** (`^8.0.0`): an LWC project already has it, and two copies of the engine in one app break component identity, so Fandry uses yours.

### LWR / LWC OSS

```bash
npx fandry init
```

This adds `{ "npm": "fandryui" }` to your `lwr.config.json` (or `lwc.config.json`); you can also add it by hand:

```json
{
  "lwc": {
    "modules": [
      { "dir": "$rootDir/src/modules" },
      { "npm": "fandryui" }
    ]
  }
}
```

That is all: `npm install` brings every component and its one third-party dependency (`@tanstack/table-core`, used by `fandry-table`). Component-to-component dependencies are resolved by your bundler at build time, and only the components you use ship. There is nothing to `fandry add`.

### Salesforce DX

The platform has no bundler and cannot import npm packages, so components are copied into your project as source you own, together with everything they depend on:

```bash
npx fandry init                    # adds a "fandryui" package directory to sfdx-project.json
npx fandry add table lookup        # adds fandryTable, fandryTableState, fandryInput, ... automatically
sf project deploy start --source-dir fandryui
```

- Components are `<c-fandry-button>` etc., because on-platform code lives in the default `c` namespace.
- `fandry add` follows dependencies for you (`fandry add table` also adds `input`, `checkbox`, `pagination`, `skeleton`, the shared `base`, and more). `fandry list` shows the graph.
- Each bundle gets a `.js-meta.xml` using your project's `sourceApiVersion`.
- The copied files are yours: commit and edit them. Your `.js-meta.xml` files (API version, exposure, targets) are never rewritten.
- **Upgrading:** after updating `fandryui`, run `npx fandry add <name>` again. Bundles you have not edited are updated to the new version; bundles you have edited are skipped. `--overwrite` replaces only the components you name, never their dependencies. Fandry records what it installed in `fandry.json` to tell an upgrade from an edit, so commit that file too.
- `table` needs `@tanstack/table-core`, which cannot be imported on-platform. `fandry add table` installs it as the bundle `fandryTableCore`, the library bundled unmodified into one ES module.
- `fandry add --all` installs every component; `--dir <path>` (on `init`) uses a different package directory.

### Blocks

Blocks are larger, ready-made patterns built from the components above. On LWR / LWC OSS they ship in the same package (`<fandry-data-table>`); on Salesforce they install like any component:

```bash
npx fandry add data-table          # the block plus everything it is built from
npx fandry add form
```

`data-table` gives you search, column filters, pagination, selection, row actions, inline editing and `saveRow` / `deleteRow` hooks with success and error toasts, with skeleton loading and a saving state. It is controlled: it never edits your `data`, it reports `rowsave` / `rowdelete` and you put the result back. `--all` does not include blocks; ask for one by name. A live version with the full API is at [/blocks/data-table](https://fandryui.forcetrails.com/blocks/data-table).

`form` is a form that can read first and edit on demand (`mode="read"`). Fields are plain data (`{ name, label, type, required, validate }`), errors show once a field has been left or a save was attempted, a form-level `validate` hook covers rules that span fields or need the server, and a `saveValues` hook is where the request goes. Like `data-table` it is controlled: it reports `save` and you put the result back into `values`. Live at [/blocks/form](https://fandryui.forcetrails.com/blocks/form).

## Usage

The package brings its own `fandry` namespace (LWR and LWC OSS allow custom namespaces), so `fandry/button` is `<fandry-button>`:

```html
<template>
  <fandry-button onclick={handleSave}>Save</fandry-button>

  <fandry-select label="Fruit" options={options} value={fruit} onchange={handleChange}>
  </fandry-select>
</template>
```

Fandry is meant to be composed with ordinary LWC, HTML and CSS. **You do not need to adopt the whole architecture.** There is no Fandry root component, router, state manager, layout system, or bootstrap. Use one component or thirty; your app keeps owning layout, state, data fetching and routing.

Components expose their API through `@api` properties and slots, and most form and action controls also take `elementProps` for reaching the underlying native element. See each component's page on the docs site.

## Only what you use ships

There is no registry and nothing is registered globally. Your bundler follows the normal module graph, so a page using `<fandry-button>` does not include `table`, `dialog`, `lookup` and the rest. The repository's `npm run verify:npm` checks this: it installs the packed tarball into a separate LWR app, runs a production `lwr build`, and asserts unused components are absent from the bundle.

## Theming

Components work with no global stylesheet: every design token has a default inside the component. To theme, set any token on an ancestor. On `:root` it changes every component on the page; on a section or a single element it changes only what is inside:

```css
:root {
  --fd-primary: 210 90% 40%;   /* colors are H S% L%, no commas */
  --fd-radius-md: 0;
  --fd-font-sans: "Brand Sans", system-ui, sans-serif;
}

.promo {
  --fd-bg: 38 92% 95%;
}
```

The full list, with defaults, is in `modules/fandry/base/tokens.css` (the `--fd-*` names; the `--_fd-*` ones are what components read internally, so don't set those). `--brand-primary` / `--brand-accent` still work as the older names for `--fd-primary` / `--fd-accent`.

To restyle one element inside a component, use its parts. Each component's page lists them:

```css
fandry-link::part(link) { color: inherit; text-decoration: none; }
fandry-input::part(control) { border-radius: 999px; }
fandry-select::part(panel) { box-shadow: none; }
```

A part also carries its state's name while the state is on, so naming both styles just that state:

```css
fandry-checkbox::part(control checked) { background: hsl(160 84% 26%); }
fandry-select::part(option selected)   { font-weight: 700; }
fandry-button::part(base secondary)    { border-color: currentColor; }
fandry-table::part(row selected)       { background: hsl(160 40% 96%); }
```

**Deprecated:** `--fd-button-radius`, `--fd-button-padding-x`, `--fd-button-border-width`, `--fd-card-bg`, `--fd-card-height` and `--fd-icon-size` still work but will be removed. Use the part instead: `.round::part(base) { border-radius: 999px; padding-inline: 0 }`, `.promo::part(base) { background: ... }`, `fandry-card, fandry-card::part(base) { height: 100% }`, `.big::part(base) { width: 3rem; height: 3rem }`.

Parts need a real shadow root, so every fandry component opts into native shadow DOM (`static shadowSupportMode = 'native'` on `fandry/base`). They work the same on LWR and on Salesforce, including orgs that still load the synthetic-shadow polyfill for other components. A component of yours that extends `fandry/base` inherits that too.

## Customizing, from a token to a copy

Each step goes further than the one before; go only as far as you need:

1. **Tokens**: `:root { --fd-primary: ...; --fd-radius-md: 0 }` themes everything, or one section.
2. **Parts and states**: `fandry-button::part(base secondary) { ... }` restyles one element inside a component. The quick win for most visual changes.
3. **Slots and `messages`**: replace content and text (see Translating).
4. **Extend the state class** (`fandry/tableState`, `fandry/searchState`, `fandry/formState`, ...): your own markup on the same behavior.
5. **Copy the component.** When you want something parts can't express, say a button with an animated rainbow border, copy its source into your own namespace and change anything. Components are short, plain LWC. Keep `extends Base` and your copy still follows the site's tokens and renders in native shadow DOM:
   - LWR / LWC OSS: copy `node_modules/fandryui/modules/fandry/button/` to e.g. `src/modules/my/rainbowButton/`, then rename the files and the class.
   - Salesforce: `fandry add button` already put `fandryButton` in your project; copy that folder to `rainbowButton` and rename it. `fandry add` never overwrites files you changed.

   A copy doesn't get the library's future fixes; that's the trade for owning it. The button page on the docs site has a working example.

Lightning base components offer styling hooks and some slots, but their internals can't be restyled, extended or copied: a look they don't offer means rebuilding the component from SLDS blueprints.

## Translating

No component has words you can't replace. Visible text is a slot with the English as its fallback; text that can't be markup (accessible names, "2 of 5 selected", "Page 1 of 3") comes from a `messages` prop. Pass only the keys you want to change:

```js
tableMessages = {
  selectionStatus: (selected, total) => `${selected} von ${total} ausgewählt`,
  selectRow: (label, n) => `${label ?? `Zeile ${n}`} auswählen`,
  pageStatus: (page, count) => `Seite ${page}${count ? ` von ${count}` : ''}`
};
```

```html
<fandry-table messages={tableMessages} ...></fandry-table>
<fandry-lookup messages={lookupMessages}>
  <span slot="clear-all">Alle entfernen</span>
</fandry-lookup>
```

Each component exports its defaults (`DEFAULT_TABLE_MESSAGES` from `fandry/tableState`, `DEFAULT_FORM_MESSAGES` from `fandry/formState`, ...) as the full list of what can be changed.

## Values

Form controls work like native ones: `<fandry-input value={email} onchange={handleChange}>` shows what the user types and reports it with `change`, whether or not you write it back. Write it back when you keep the value in your own state, as usual.

One case needs care. LWC only pushes a prop when the value you bind changes, so if you *reject* an edit by keeping the same value, the control keeps showing what the user typed. To put a control back, set the property on the element itself, which always applies:

```js
handleChange(event) {
  if (!isAllowed(event.detail)) {
    event.target.value = this.email; // the control shows this.email again
    return;
  }
  this.email = event.detail;
}
```

Blocks (`data-table`, `form`) are controlled instead: they never change the data you pass in and report outcomes through events.

## Extending

`fandry/base` is the shared base class all components extend. It is exported so you can build your own components that share Fandry's stylesheet and tokens:

```js
import Base from 'fandry/base';

export default class MyThing extends Base {}
```

A component that extends `Base` reads tokens by their `--_fd-*` names (`padding: var(--_fd-space-2)`), which follow the site's theme.

Anything listed in the package's `lwc.config.json` `expose` array is public API. Files inside the package are not.

## Icons

`fandry-icon` is a sizing and color frame around whatever glyph you slot into it (inline `<svg>`, `<img>`, and so on). Fandry does not ship an icon set and never fetches icons at runtime; the few glyphs components need (such as a select's chevron) are drawn with CSS inside the component.

## Known limitations

- **No TypeScript declarations and no source maps.** The library is written in TypeScript, but the published files are the readable JavaScript with types stripped. `.ts` and `.map` files inside an LWC component folder would confuse module resolution, so they are not shipped.
- **LWR and `lwc@8`.** Fresh installs of `lwr@0.18.3` can currently resolve `@lwc/compiler@9`, which rejects LWR's own loader. If your build fails with `LWC1121` inside `@lwrjs/loader`, pin the `@lwc/*` packages (see `examples/consumer/package.json` in the repository for a working set of `overrides`).
- **Salesforce: `select`, `combobox`, `command` and `lookup` use dynamic components.** They use `lwc:is` (so a consumer can swap in a custom component per item). Salesforce accepts that only when the bundle's own `.js-meta.xml` declares `<capabilities><capability>lightning__dynamicComponent</capability></capabilities>` (and the API version is 55 or later, with Lightning Web Security on); otherwise the deploy fails with `LWC1188`. It is per bundle: a `jsconfig.json` setting does nothing on the platform. `fandry add` writes the capability into the meta files it creates, and tells you if one that already existed lacks it (those files are yours and are never rewritten). Your own components that merely *use* `<c-fandry-select>` need nothing extra. `fandry list` marks the bundles involved. The other components, including `table` with its vendored `fandryTableCore`, have been deployed to a real org and run on a Lightning page.

## Versioning

Semantic versioning. While the version is `0.x`, minor releases may include breaking changes to component APIs; each is recorded in the [changelog](https://github.com/rahulgawale/fandryui/blob/main/CHANGELOG.md). `1.0` will mark stable component APIs.

## License

MIT
