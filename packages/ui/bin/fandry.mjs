#!/usr/bin/env node
// fandry: set up Fandry UI in a project, on either platform.
//
//   fandry init [--sfdx | --lwr] [--dir <package-dir>]
//   fandry add <component...> | --all [--overwrite] [--dry-run]
//   fandry list
//
// LWR / LWC OSS resolves the whole `fandryui` npm package through the bundler,
// which ships only what a page uses, so there is nothing to copy: `init` just
// points the project at the package.
//
// The Salesforce platform has no bundler and no npm resolution. `add` copies
// component bundles into your project as ordinary source you own (and can
// edit), together with every bundle they depend on, using the dependency
// graph in registry.json.

import { createHash } from 'node:crypto';
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG_FILE = 'fandry.json';
const DEFAULT_SFDX_DIR = 'fandryui';
const DEFAULT_API_VERSION = '67.0';
const META_SUFFIX = '.js-meta.xml';

class CliError extends Error {}

const VALUE_FLAGS = new Set(['dir', 'target']);
const BOOLEAN_FLAGS = new Set(['sfdx', 'lwr', 'all', 'overwrite', 'dry-run', 'help']);

function parseArgs(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '-h') {
      flags.help = true;
    } else if (arg.startsWith('--')) {
      const eq = arg.indexOf('=');
      const key = eq === -1 ? arg.slice(2) : arg.slice(2, eq);
      const inline = eq === -1 ? undefined : arg.slice(eq + 1);

      if (VALUE_FLAGS.has(key)) {
        const value = inline ?? argv[++i];
        if (value === undefined || value === '' || value.startsWith('-')) {
          throw new CliError(`--${key} needs a value.`);
        }
        flags[key] = value;
      } else if (BOOLEAN_FLAGS.has(key)) {
        if (inline !== undefined) throw new CliError(`--${key} does not take a value.`);
        flags[key] = true;
      } else {
        // A typo such as --dryrun must not silently turn a preview into a write.
        throw new CliError(`Unknown option --${key}. See \`fandry --help\`.`);
      }
    } else if (arg.startsWith('-') && arg !== '-') {
      throw new CliError(`Unknown option ${arg}. See \`fandry --help\`.`);
    } else {
      positional.push(arg);
    }
  }
  return { command: positional.shift(), positional, flags };
}

function readJson(path) {
  const text = readFileSync(path, 'utf8');
  // Keep the file's own indentation so an edit doesn't rewrite every line.
  const indent = /^([ \t]+)"/m.exec(text)?.[1] ?? '  ';
  return { data: JSON.parse(text), indent };
}

function writeJson(path, data, indent) {
  writeFileSync(path, `${JSON.stringify(data, null, indent)}\n`);
}

function loadRegistry() {
  const path = join(PKG_ROOT, 'registry.json');
  if (!existsSync(path)) {
    throw new CliError('registry.json not found: run this from an installed fandryui package.');
  }
  return JSON.parse(readFileSync(path, 'utf8'));
}

function readConfig(cwd) {
  const path = join(cwd, CONFIG_FILE);
  return existsSync(path) ? readJson(path).data : null;
}

function loadConfig(cwd) {
  const config = readConfig(cwd);
  if (!config) throw new CliError(`No ${CONFIG_FILE} here. Run \`fandry init\` first.`);
  return config;
}

// --- init

function detectTarget(cwd, flags) {
  if (flags.sfdx) return 'sfdx';
  if (flags.lwr) return 'lwr';
  if (flags.target) {
    if (!['sfdx', 'lwr'].includes(flags.target)) {
      throw new CliError(`Unknown --target "${flags.target}" (expected sfdx or lwr).`);
    }
    return flags.target;
  }
  if (existsSync(join(cwd, 'sfdx-project.json'))) return 'sfdx';
  if (existsSync(join(cwd, 'lwr.config.json')) || existsSync(join(cwd, 'lwc.config.json'))) {
    return 'lwr';
  }
  throw new CliError(
    'Could not tell what kind of project this is (no sfdx-project.json, lwr.config.json or lwc.config.json).\n' +
      'Re-run with --sfdx or --lwr.'
  );
}

function initSfdx(cwd, flags) {
  const projectPath = join(cwd, 'sfdx-project.json');
  if (!existsSync(projectPath)) {
    throw new CliError('No sfdx-project.json here. Run this from the root of your Salesforce DX project.');
  }

  // Re-running `init` keeps an earlier choice (and what was installed there)
  // rather than starting over with the default and orphaning it.
  const existing = readConfig(cwd);
  const prior = existing?.target === 'sfdx' ? existing : null;
  const dir = flags.dir ?? prior?.dir ?? DEFAULT_SFDX_DIR;

  if (prior && dir !== prior.dir && Object.keys(prior.installed ?? {}).length) {
    throw new CliError(
      `Fandry components are already installed in "${prior.dir}". Move that directory to "${dir}" ` +
        `(and update sfdx-project.json) first, or drop --dir to keep using "${prior.dir}".`
    );
  }

  const { data: project, indent } = readJson(projectPath);

  // Fandry lives in its own package directory next to your app code, so the
  // copied source is easy to tell apart, deploy on its own, or keep unedited.
  project.packageDirectories ??= [];
  const registered = project.packageDirectories.some((p) => p.path === dir);
  if (!registered) {
    project.packageDirectories.push({ path: dir });
    writeJson(projectPath, project, indent);
  }
  mkdirSync(join(cwd, dir, 'main/default/lwc'), { recursive: true });
  writeJson(join(cwd, CONFIG_FILE), { ...(prior ?? {}), target: 'sfdx', dir }, '  ');

  console.log(`Initialized Fandry UI for Salesforce DX.`);
  console.log(`  ${registered ? 'package directory already in' : 'added package directory to'} sfdx-project.json: ${dir}`);
  console.log(`  wrote ${CONFIG_FILE}`);
  console.log(`Next: fandry add button input   (dependencies are added automatically)`);
}

function initLwr(cwd) {
  // lwr.config.json nests modules under `lwc`; lwc.config.json holds them at the top.
  const lwrPath = join(cwd, 'lwr.config.json');
  const lwcPath = join(cwd, 'lwc.config.json');
  const isLwr = existsSync(lwrPath);
  const path = isLwr ? lwrPath : lwcPath;
  if (!existsSync(path)) {
    throw new CliError('No lwr.config.json or lwc.config.json here. Run this from your project root.');
  }

  const { data, indent } = readJson(path);
  const holder = isLwr ? (data.lwc ??= {}) : data;
  holder.modules ??= [];
  const present = holder.modules.some((m) => m.npm === 'fandryui');
  if (!present) {
    holder.modules.push({ npm: 'fandryui' });
    writeJson(path, data, indent);
  }
  writeJson(join(cwd, CONFIG_FILE), { target: 'lwr' }, '  ');

  console.log(`Initialized Fandry UI for LWR / LWC OSS.`);
  console.log(`  ${present ? 'already in' : 'added { "npm": "fandryui" } to'} ${relative(cwd, path)}`);
  console.log(`  wrote ${CONFIG_FILE}`);
  console.log(`Use <fandry-button> etc. directly. The bundler includes only the components you use,`);
  console.log(`so there is nothing to \`fandry add\`. (Make sure \`npm install fandryui\` has been run.)`);
}

// --- add / list

// Accepts `table`, `Table`, `fandryTable`, `fandry-table`, `c-fandry-table`.
function resolveName(input, registry) {
  const stripped = input.replace(/^c-/, '').replace(/^fandry[-_]?/i, '');
  const camel = stripped.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const key = Object.keys(registry.components).find((k) => k.toLowerCase() === camel.toLowerCase());
  if (!key) {
    const names = Object.keys(registry.components).join(', ');
    throw new CliError(`Unknown component "${input}".\nAvailable: ${names}`);
  }
  return key;
}

function closure(requested, registry) {
  const order = [];
  const seen = new Set();
  const visit = (key) => {
    if (seen.has(key)) return;
    seen.add(key);
    for (const dep of registry.components[key].dependencies) visit(dep);
    order.push(key);
  };
  requested.forEach(visit);
  return order;
}

function listFiles(dir, base = dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? listFiles(p, base) : [relative(base, p).split(sep).join('/')];
  });
}

// A bundle's identity is its source files. The .js-meta.xml is per-project
// (API version, exposure, targets) and belongs to the user, so it is never
// part of the comparison and never rewritten once it exists.
function bundleHash(dir) {
  const hash = createHash('sha256');
  for (const file of listFiles(dir).filter((f) => !f.endsWith(META_SUFFIX)).sort()) {
    hash.update(file);
    hash.update('\0');
    hash.update(readFileSync(join(dir, file)));
    hash.update('\0');
  }
  return hash.digest('hex');
}

const bundleMeta = (apiVersion) => `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>${apiVersion}</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
`;

// Replaces the bundle wholesale, so files the new version dropped don't linger,
// but carries the user's existing .js-meta.xml across.
function installBundle(from, to, bundle, apiVersion) {
  const metaPath = join(to, `${bundle}${META_SUFFIX}`);
  const meta = existsSync(metaPath) ? readFileSync(metaPath, 'utf8') : bundleMeta(apiVersion);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
  writeFileSync(metaPath, meta);
}

function add(cwd, names, flags) {
  const config = loadConfig(cwd);
  if (config.target === 'lwr') {
    console.log('This is an LWR / LWC OSS project: nothing to add.');
    console.log('`npm install fandryui` provides every component, and your bundler ships only the ones you use.');
    return;
  }

  const registry = loadRegistry();
  const requested = flags.all
    ? Object.keys(registry.components).filter((k) => registry.components[k].kind === 'component')
    : names.map((n) => resolveName(n, registry));
  if (!requested.length) {
    throw new CliError('Name at least one component (or pass --all). See `fandry list`.');
  }

  const projectPath = join(cwd, 'sfdx-project.json');
  const apiVersion = existsSync(projectPath)
    ? (readJson(projectPath).data.sourceApiVersion ?? DEFAULT_API_VERSION)
    : DEFAULT_API_VERSION;
  const lwcDir = join(cwd, config.dir, 'main/default/lwc');
  const all = closure(requested, registry);
  const named = new Set(requested);
  const baseline = { ...(config.installed ?? {}) };
  const dryRun = Boolean(flags['dry-run']);

  const added = [];
  const updated = [];
  const replaced = [];
  const unchanged = [];
  const skipped = [];

  for (const key of all) {
    const { bundle } = registry.components[key];
    const from = join(PKG_ROOT, 'sfdx/lwc', bundle);
    const to = join(lwcDir, bundle);
    const fresh = bundleHash(from);

    let action;
    if (!existsSync(to)) {
      action = 'add';
    } else {
      const current = bundleHash(to);
      if (current === fresh) action = 'same';
      // Untouched since Fandry installed it, so a newer package version can
      // replace it safely. Anything else is the user's own edit (or predates
      // baseline tracking) and is left alone.
      else if (baseline[bundle] === current) action = 'update';
      // --overwrite applies only to what was named, never to its dependencies.
      else if (flags.overwrite && named.has(key)) action = 'replace';
      else action = 'skip';
    }

    if (action === 'skip') {
      skipped.push(bundle);
      continue;
    }
    if (action === 'same') {
      unchanged.push(bundle);
    } else {
      ({ add: added, update: updated, replace: replaced })[action].push(bundle);
      if (!dryRun) installBundle(from, to, bundle, apiVersion);
    }
    baseline[bundle] = fresh;
  }

  if (!dryRun) {
    const sorted = Object.fromEntries(Object.entries(baseline).sort(([a], [b]) => a.localeCompare(b)));
    writeJson(join(cwd, CONFIG_FILE), { ...config, version: registry.version, installed: sorted }, '  ');
  }

  // Bundles using `lwc:is` fail to deploy to an org without dynamic components.
  const dynamic = all.filter((k) => registry.components[k].requires?.includes('dynamicComponents'));
  const deps = all.length - requested.length;
  console.log(
    `${dryRun ? 'Would add' : 'Added'} ${added.length} bundle(s) to ${config.dir}/main/default/lwc` +
      ` (${requested.length} requested, ${deps} dependenc${deps === 1 ? 'y' : 'ies'})`
  );
  added.forEach((b) => console.log(`  + ${b}`));
  if (updated.length) console.log(`${dryRun ? 'Would update' : 'Updated'} to this version (you had not edited them): ${updated.join(', ')}`);
  if (replaced.length) console.log(`${dryRun ? 'Would replace' : 'Replaced'} (--overwrite): ${replaced.join(', ')}`);
  if (unchanged.length) console.log(`Already up to date: ${unchanged.join(', ')}`);
  if (dynamic.length) {
    console.log(`\nNote: ${dynamic.map((k) => registry.components[k].bundle).join(', ')} use lwc:is, which Salesforce only`);
    console.log('accepts in orgs with dynamic components enabled (otherwise deploy fails with LWC1188).');
  }
  if (skipped.length) {
    // Two reasons look identical from here: the user edited the bundle, or it
    // predates baseline tracking. Either way it differs and is not ours to overwrite.
    console.log(`\nSkipped (differs from this version and has changes of yours): ${skipped.join(', ')}`);
    console.log('To replace one, name it directly with --overwrite: fandry add <name> --overwrite');
  }
}

function list() {
  const registry = loadRegistry();
  const rows = Object.entries(registry.components);
  const width = Math.max(...rows.map(([k]) => k.length));
  console.log(`fandryui ${registry.version}\n`);
  for (const [key, { kind, dependencies, requires }] of rows) {
    const deps = dependencies.length ? `  needs: ${dependencies.join(', ')}` : '';
    const dyn = requires?.includes('dynamicComponents') ? '  [uses lwc:is]' : '';
    console.log(`${key.padEnd(width)}  ${kind === 'module' ? '(shared)' : '        '}${deps}${dyn}`);
  }
}

const HELP = `fandry: set up Fandry UI in a project

Usage
  fandry init [--sfdx | --lwr] [--dir <package-dir>]
      Salesforce DX: adds a "${DEFAULT_SFDX_DIR}" package directory (or --dir) to sfdx-project.json.
      LWR / LWC OSS: adds { "npm": "fandryui" } to your lwr.config.json / lwc.config.json.
      The platform is detected from the project; pass --sfdx or --lwr to force it.
      Re-running keeps the directory you chose earlier.

  fandry add <component...> [--overwrite] [--dry-run]
  fandry add --all
      Salesforce DX only. Copies each component's bundle into your project along with
      every bundle it depends on (e.g. \`fandry add table\` also adds input, button, ...).
      Re-running updates bundles you have not touched to the installed version of
      fandryui. Bundles you have edited are skipped; --overwrite replaces only the
      components you name, never their dependencies. Your .js-meta.xml is never rewritten.

  fandry list
      Shows every component and what it depends on.
`;

function main() {
  const { command, positional, flags } = parseArgs(process.argv.slice(2));
  const cwd = process.cwd();

  if (!command || flags.help || command === 'help') return console.log(HELP);
  if (command === 'init') {
    return detectTarget(cwd, flags) === 'sfdx' ? initSfdx(cwd, flags) : initLwr(cwd);
  }
  if (command === 'add') return add(cwd, positional, flags);
  if (command === 'list') return list();
  throw new CliError(`Unknown command "${command}".\n\n${HELP}`);
}

try {
  main();
} catch (error) {
  if (!(error instanceof CliError)) throw error;
  console.error(`fandry: ${error.message}`);
  process.exitCode = 1;
}
