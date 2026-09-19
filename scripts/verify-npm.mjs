// Proves fandry works as a *published* package, not just from the monorepo:
//
//   1. builds the package,
//   2. `npm pack`s it into a real tarball,
//   3. copies examples/consumer to a temp dir OUTSIDE this repo and installs
//      the tarball there (a copy in node_modules, not a symlink),
//   4. runs the consumer's production `lwr build`,
//   5. checks the module graph: what the consumer uses is in the bundle, what
//      it doesn't use is not.
//
// Set KEEP=1 to keep the temp project (printed at the end) for a browser check.

import { execFileSync } from 'node:child_process';
import {
  cpSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'packages/ui/dist');

const run = (cmd, args, cwd) =>
  execFileSync(cmd, args, { cwd, stdio: ['ignore', 'inherit', 'inherit'] });

function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

run('node', [join(ROOT, 'scripts/build-dist.mjs')], ROOT);

const work = mkdtempSync(join(tmpdir(), 'fandry-consumer-'));
const packOut = execFileSync('npm', ['pack', '--pack-destination', work, '--json'], {
  cwd: DIST,
  encoding: 'utf8'
});
const tarball = join(work, JSON.parse(packOut)[0].filename);

const project = join(work, 'consumer');
cpSync(join(ROOT, 'examples/consumer'), project, { recursive: true });
const pkgPath = join(project, 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
pkg.dependencies['fandryui'] = `file:${tarball}`;
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

run('npm', ['install', '--no-audit', '--no-fund'], project);

// Component dependencies came in through npm, not through anything we wrote.
const installed = join(project, 'node_modules/fandryui');
const tanstack = join(project, 'node_modules/@tanstack/table-core');
statSync(join(installed, 'lwc.config.json'));
statSync(tanstack);

run('npx', ['lwr', 'build', '--clean'], project);

const bundle = walk(join(project, '__lwr_cache__'))
  .concat(walk(join(project, 'site')))
  .filter((f) => /\.(js|css|html)$/.test(f))
  .map((f) => readFileSync(f, 'utf8'))
  .join('\n');

// A bundled module shows up as its specifier, e.g. `fandry/button`.
const included = (spec) => bundle.includes(spec);
const mustHave = ['fandry/button', 'fandry/select', 'fandry/popover', 'fandry/base'];
const mustNotHave = [
  'fandry/table', // also covers fandry/tableState
  'fandry/dialog',
  'fandry/lookup',
  'fandry/command',
  '@tanstack/table-core'
];

const failures = [
  ...mustHave.filter((s) => !included(s)).map((s) => `expected ${s} in the bundle`),
  ...mustNotHave.filter(included).map((s) => `${s} was bundled but the app never uses it`)
];

if (failures.length) {
  console.error(`\nConsumer verification FAILED:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}

console.log('\nConsumer verification passed:');
console.log(`  used:      ${mustHave.join(', ')}`);
console.log(`  not used:  ${mustNotHave.join(', ')} -- absent from the bundle`);

if (process.env.KEEP) {
  console.log(`  project kept at ${project}`);
} else {
  rmSync(work, { recursive: true, force: true });
}
