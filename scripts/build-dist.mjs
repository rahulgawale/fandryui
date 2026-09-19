// Builds the publishable `fandryui` package into packages/ui/dist: `node scripts/build-dist.mjs`.
//
// The source of truth stays where it is: `fandry/*` modules under
// src/core/fandry and src/salesforce/fandry. This script keeps no second copy
// of any component; it *derives* the package, deterministically. Both flavors
// strip TypeScript with Babel (decorators left intact for the LWC compiler --
// tsc would lower them to __decorate and break @api/@track). They differ in
// naming, because the two platforms differ in namespace:
//
//   modules/fandry/<name>/      LWR / LWC OSS lets a package bring its own
//                               namespace, so the source is kept as-is:
//                               fandry/select  ->  <fandry-select>
//                               Resolved by the consumer's bundler through
//                               lwc.config.json; unused modules never ship.
//
//   sfdx/lwc/fandry<Name>/      Salesforce on-platform code lives in the org's
//                               default `c` namespace in flat camelCase
//                               bundles:  <c-fandry-select>. There is no
//                               bundler, so `fandry add` copies bundles into a
//                               project along with their dependencies, using
//                               registry.json (the dependency graph).
//
// No runtime loader or registry in either.

import { createRequire } from 'node:module';
import {
  chmodSync,
  cpSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build as esbuild } from 'esbuild';

const require = createRequire(import.meta.url);
const babel = require('@babel/core');

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const PKG_DIR = join(ROOT, 'packages/ui');
const OUT = join(PKG_DIR, 'dist');

// All under the `fandry` namespace. Same-named folders would collide in the
// output, which `assertNoCollision` turns into a hard error.
const SOURCE_ROOTS = ['src/core/fandry', 'src/salesforce/fandry'];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const uncapitalize = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

// What differs between the two flavors. `moduleName` is the on-disk folder /
// main-file stem; `specifier` is how other modules import it; `tagPrefix` is
// how a template uses it.
const TARGETS = {
  npm: {
    modulesOut: join(OUT, 'modules/fandry'),
    moduleName: (dir) => dir,
    specifier: (dir) => `fandry/${dir}`,
    tagPrefix: 'fandry-',
    // Nothing to rewrite: the source already speaks `fandry/*` and `<fandry-*>`.
    rename: (text) => text
  },
  sfdx: {
    modulesOut: join(OUT, 'sfdx/lwc'),
    moduleName: (dir) => `fandry${capitalize(dir)}`,
    specifier: (dir) => `c/fandry${capitalize(dir)}`,
    tagPrefix: 'c-fandry-',
    // `fandry/select` -> `c/fandrySelect`; `fandry-radio-group` -> `c-fandry-radio-group`.
    // Applied to code, markup, CSS and comments alike so messages a consumer
    // sees in the console name the tag they actually wrote. The one npm
    // package (table-core) can't be imported on-platform, so it points at the
    // vendored bundle written by `vendorTableCore`.
    rename: (text) =>
      text
        .replace(
          /(?<![\w/.-])fandry\/([a-zA-Z]+)/g,
          (_, dir) => `c/fandry${capitalize(dir)}`
        )
        .replace(/(?<![\w-])fandry-(?=[a-z])/g, 'c-fandry-')
        .replace(/(from\s+)(['"])@tanstack\/table-core\2/g, "$1'c/fandryTableCore'")
  }
};

function stripTypeScript(source, filename) {
  const { code } = babel.transformSync(source, {
    filename,
    babelrc: false,
    configFile: false,
    comments: true,
    compact: false,
    plugins: [
      ['@babel/plugin-syntax-decorators', { legacy: true }],
      // Matches tsconfig's `useDefineForClassFields: false`: type-only fields
      // are dropped rather than emitted as `field;`.
      ['@babel/plugin-transform-typescript', { allowDeclareFields: false }]
    ]
  });
  return `${code}\n`;
}

function assertNoCollision(seen, name, from) {
  if (seen.has(name)) {
    throw new Error(`Both ${seen.get(name)} and ${from} would build ${name}`);
  }
  seen.set(name, from);
}

function buildComponent(t, seen, srcRoot, dir) {
  const name = t.moduleName(dir);
  assertNoCollision(seen, name, `${srcRoot}/${dir}`);

  const from = join(ROOT, srcRoot, dir);
  const to = join(t.modulesOut, name);
  mkdirSync(to, { recursive: true });

  const files = readdirSync(from);
  // LWC pairs `name.css` with `name.html` by filename, so the stylesheet is
  // renamed only when a template of the same name exists. A lone `base.css`
  // is imported explicitly (`./base.css`) and must keep its name.
  const hasTemplate = files.includes(`${dir}.html`);

  for (const file of files) {
    const src = join(from, file);
    if (!statSync(src).isFile()) continue; // __tests__ etc. are not shipped

    const ext = extname(file);
    const stem = file.slice(0, -ext.length);
    // Only the component's main files take the module name; helpers such as
    // paginationLinks.html or base/tokens.css keep theirs, so relative
    // imports between them stay valid.
    const isMain = stem === dir && (ext !== '.css' || hasTemplate);
    const outStem = isMain ? name : stem;
    const raw = readFileSync(src, 'utf8');

    if (ext === '.ts') {
      writeFileSync(join(to, `${outStem}.js`), stripTypeScript(t.rename(raw), src));
    } else if (ext === '.html' || ext === '.css') {
      writeFileSync(join(to, `${outStem}${ext}`), t.rename(raw));
    }
    // Anything else (stray notes, fixtures) is intentionally left behind.
  }
  return { dir, name, specifier: t.specifier(dir), hasTemplate };
}

function buildTarget(t) {
  mkdirSync(t.modulesOut, { recursive: true });
  const seen = new Map();
  const components = [];
  for (const srcRoot of SOURCE_ROOTS) {
    for (const dir of readdirSync(join(ROOT, srcRoot)).sort()) {
      if (statSync(join(ROOT, srcRoot, dir)).isDirectory()) {
        components.push(buildComponent(t, seen, srcRoot, dir));
      }
    }
  }
  return components;
}

// On-platform LWC can't import an npm package, and it isn't reasonable to ask
// consumers to hand-assemble one. `@tanstack/table-core` is bundled, unmodified
// and unminified, into a single ES module inside its own LWC bundle, so it is
// installed and deployed like any other component.
async function vendorTableCore() {
  const pkgDir = dirname(require.resolve('@tanstack/table-core/package.json'));
  const pkg = JSON.parse(readFileSync(join(pkgDir, 'package.json'), 'utf8'));
  const name = 'fandryTableCore';
  const dir = join(OUT, 'sfdx/lwc', name);
  mkdirSync(dir, { recursive: true });

  await esbuild({
    entryPoints: [join(pkgDir, pkg.module)],
    outfile: join(dir, `${name}.js`),
    bundle: true,
    format: 'esm',
    target: 'es2020',
    minify: false,
    legalComments: 'none',
    banner: {
      js: `// @tanstack/table-core ${pkg.version} (MIT), bundled unmodified so it can be\n// imported on the Salesforce platform. Source: https://github.com/TanStack/table\n`
    }
  });
  return { dir: 'tableCore', name, specifier: `c/${name}`, hasTemplate: false };
}

// Direct dependencies of each Salesforce bundle, read from what the bundle
// actually imports and renders, so the graph can't drift from the code.
function buildRegistry(sfdxComponents, version) {
  const byBundle = new Map(sfdxComponents.map((c) => [c.name, c.dir]));
  const components = {};

  for (const c of sfdxComponents) {
    const dir = join(OUT, 'sfdx/lwc', c.name);
    const deps = new Set();
    // `lwc:is` (per-item custom components) is rejected by orgs that haven't
    // enabled dynamic components (LWC1188), so the CLI warns about it.
    const requires = [];
    for (const file of readdirSync(dir)) {
      const text = readFileSync(join(dir, file), 'utf8');
      if (file.endsWith('.html') && /\blwc:(is|component)\b/.test(text)) {
        requires.push('dynamicComponents');
      }
      for (const [, bundle] of text.matchAll(/from\s+['"]c\/(fandry[A-Za-z]+)['"]/g)) {
        deps.add(byBundle.get(bundle));
      }
      for (const [, tag] of text.matchAll(/<\/?c-fandry-([a-z-]+)/g)) {
        deps.add(kebabToCamel(tag));
      }
    }
    deps.delete(c.dir);
    components[c.dir] = {
      bundle: c.name,
      // Helpers such as base or searchState have no template of their own.
      kind: c.hasTemplate ? 'component' : 'module',
      dependencies: [...deps].sort(),
      ...(requires.length && { requires: [...new Set(requires)] })
    };
  }

  const sorted = Object.fromEntries(Object.entries(components).sort(([a], [b]) => a.localeCompare(b)));
  return { version, components: sorted };
}

// packages/ui/package.json holds the hand-maintained metadata. The version is
// not stored there: semantic-release bumps the repo root, and the published
// version is stamped from it so the two can never drift.
function writeManifest(rootPkg) {
  const manifest = JSON.parse(readFileSync(join(PKG_DIR, 'package.json'), 'utf8'));

  // Keep the one runtime dependency in lockstep with what the source is
  // developed and tested against, instead of a second hand-edited range.
  manifest.dependencies = {
    ...manifest.dependencies,
    '@tanstack/table-core': rootPkg.dependencies['@tanstack/table-core']
  };

  const { name, ...rest } = manifest;
  writeFileSync(
    join(OUT, 'package.json'),
    `${JSON.stringify({ name, version: rootPkg.version, ...rest }, null, 2)}\n`
  );
}

// Every relative import, cross-module import and component tag in the output
// must point at something that exists, so a bad rename fails here rather than
// in a consumer's bundler or a Salesforce deploy.
function verify(targetName, t, components) {
  const specifiers = new Set(components.map((c) => c.specifier));
  const namespace = t.specifier('x').split('/')[0]; // 'fandry' | 'c'
  const problems = [];

  for (const { name } of components) {
    const dir = join(t.modulesOut, name);
    for (const file of readdirSync(dir)) {
      const text = readFileSync(join(dir, file), 'utf8');
      const where = relative(ROOT, join(dir, file));

      for (const [, spec] of text.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
        if (spec.startsWith('.')) {
          try {
            statSync(resolve(dir, spec));
          } catch {
            problems.push(`${where}: missing relative import ${spec}`);
          }
        } else if (spec.startsWith(`${namespace}/`) && !specifiers.has(spec)) {
          problems.push(`${where}: import of unknown module ${spec}`);
        } else if (targetName === 'sfdx' && spec.startsWith('@')) {
          // The platform has no npm resolution: nothing may import a package.
          problems.push(`${where}: sfdx bundle imports npm package ${spec}`);
        }
      }

      const tagRe = new RegExp(`<\\/?(${t.tagPrefix}[a-z-]+)`, 'g');
      for (const [, tag] of text.matchAll(tagRe)) {
        // `<fandry-radio-group>` / `<c-fandry-radio-group>` -> source dir `radioGroup`
        const dirName = kebabToCamel(tag.slice(t.tagPrefix.length));
        if (!components.some((c) => c.dir === dirName)) {
          problems.push(`${where}: unknown tag <${tag}>`);
        }
      }

      // Nothing from the *other* flavor may be left behind.
      const wrong =
        targetName === 'npm'
          ? /(?<![\w-])c-fandry-|(?<![\w/.-])c\/fandry[A-Z]/
          : /(?<![\w/.-])fandry\/[a-zA-Z]|(?<![\w-])fandry-[a-z]/;
      if (wrong.test(text)) problems.push(`${where}: wrong-flavor fandry reference left behind`);
    }
  }

  if (problems.length) {
    throw new Error(`${targetName} verification failed:\n  ${problems.join('\n  ')}`);
  }
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const rootPkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'));

// --- npm flavor (LWR / LWC OSS)
const npmComponents = buildTarget(TARGETS.npm);
verify('npm', TARGETS.npm, npmComponents);
// LWC's module resolver reads this from the package root. `modules` says where
// the code lives; `expose` is the public surface -- a specifier not listed here
// cannot be imported by a consumer's own code (files inside the package still
// resolve each other through this same config).
writeFileSync(
  join(OUT, 'lwc.config.json'),
  `${JSON.stringify(
    { modules: [{ dir: 'modules' }], expose: npmComponents.map((c) => c.specifier).sort() },
    null,
    2
  )}\n`
);

// --- Salesforce flavor
const sfdxComponents = [...buildTarget(TARGETS.sfdx), await vendorTableCore()];
verify('sfdx', TARGETS.sfdx, sfdxComponents);
const registry = buildRegistry(sfdxComponents, rootPkg.version);
writeFileSync(join(OUT, 'registry.json'), `${JSON.stringify(registry, null, 2)}\n`);

// --- package files
cpSync(join(PKG_DIR, 'bin'), join(OUT, 'bin'), { recursive: true });
chmodSync(join(OUT, 'bin/fandry.mjs'), 0o755);
writeManifest(rootPkg);
cpSync(join(ROOT, 'LICENSE'), join(OUT, 'LICENSE'));
cpSync(join(PKG_DIR, 'README.md'), join(OUT, 'README.md'));

console.log(
  `Built fandryui@${rootPkg.version}: ${npmComponents.length} modules (npm) + ${sfdxComponents.length} bundles (sfdx) -> ${relative(ROOT, OUT)}`
);
