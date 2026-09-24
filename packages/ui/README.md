# fandry

Small, extensible [Lightning Web Components](https://lwc.dev) you own and can read. Fandry UI ships as **plain LWC source** (HTML, CSS and JavaScript), not a compiled runtime, so there is nothing to reverse-engineer: open `node_modules/fandryui/modules/fandry/button/` and read it.

Docs and live examples: <https://fandryui.forcetrails.com>

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

`::part()` needs native shadow DOM: LWR sites use it, and so do Salesforce orgs with native shadow on. In an org still on synthetic shadow, parts have no effect; tokens work in both.

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
