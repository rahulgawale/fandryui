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

import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const PKG_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG_FILE = 'fandry.json';
const DEFAULT_SFDX_DIR = 'fandryui';
const DEFAULT_API_VERSION = '67.0';

class CliError extends Error {}

function parseArgs(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '-h') flags.help = true;
    else if (arg.startsWith('--')) {
      const [key, inline] = arg.slice(2).split('=');
      const takesValue = key === 'dir' || key === 'target';
      flags[key] = takesValue ? (inline ?? argv[++i]) : true;
    } else positional.push(arg);
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

function loadConfig(cwd) {
  const path = join(cwd, CONFIG_FILE);
  if (!existsSync(path)) {
    throw new CliError(`No ${CONFIG_FILE} here. Run \`fandry init\` first.`);
  }
  return readJson(path).data;
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
  const dir = flags.dir ?? DEFAULT_SFDX_DIR;
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
  writeJson(join(cwd, CONFIG_FILE), { target: 'sfdx', dir }, '  ');

  console.log(`Initialized Fandry UI for Salesforce DX.`);
  console.log(`  ${registered ? 'package directory already in' : 'added package directory to'} sfdx-project.json: ${dir}`);
  console.log(`  wrote ${CONFIG_FILE}`);
  console.log(`Next: fandry add button input    (dependencies are added automatically)`);
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
    return statSync(p).isDirectory() ? listFiles(p, base) : [relative(base, p)];
  });
}

function sameContent(a, b) {
  const files = listFiles(a);
  return files.every((f) => existsSync(join(b, f)) && readFileSync(join(a, f), 'utf8') === readFileSync(join(b, f), 'utf8'));
}

const bundleMeta = (apiVersion) => `<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>${apiVersion}</apiVersion>
    <isExposed>false</isExposed>
</LightningComponentBundle>
`;

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

  const added = [];
  const unchanged = [];
  const modified = [];
  for (const key of all) {
    const { bundle } = registry.components[key];
    const from = join(PKG_ROOT, 'sfdx/lwc', bundle);
    const to = join(lwcDir, bundle);

    if (existsSync(to)) {
      if (sameContent(from, to)) unchanged.push(bundle);
      else if (!flags.overwrite) {
        // The source is yours to edit; never clobber it without being told to.
        modified.push(bundle);
        continue;
      } else added.push(bundle);
    } else added.push(bundle);

    if (!flags['dry-run']) {
      cpSync(from, to, { recursive: true, force: true });
      writeFileSync(join(to, `${bundle}.js-meta.xml`), bundleMeta(apiVersion));
    }
  }

  // Bundles using `lwc:is` fail to deploy to an org without dynamic components.
  const dynamic = all.filter((k) => registry.components[k].requires?.includes('dynamicComponents'));
  const deps = all.length - requested.length;
  console.log(`${flags['dry-run'] ? 'Would add' : 'Added'} ${added.length} bundle(s) to ${config.dir}/main/default/lwc` +
    ` (${requested.length} requested, ${deps} dependenc${deps === 1 ? 'y' : 'ies'})`);
  added.forEach((b) => console.log(`  + ${b}`));
  if (unchanged.length) console.log(`Already up to date: ${unchanged.join(', ')}`);
  if (dynamic.length) {
    console.log(`\nNote: ${dynamic.map((k) => registry.components[k].bundle).join(', ')} use lwc:is, which Salesforce only`);
    console.log('accepts in orgs with dynamic components enabled (otherwise deploy fails with LWC1188).');
  }
  if (modified.length) {
    console.log(`Skipped (you have edited these; pass --overwrite to replace): ${modified.join(', ')}`);
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

  fandry add <component...> [--overwrite] [--dry-run]
  fandry add --all
      Salesforce DX only. Copies each component's bundle into your project along with
      every bundle it depends on (e.g. \`fandry add table\` also adds input, button, ...).
      Files you have edited are left alone unless --overwrite is given.

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
