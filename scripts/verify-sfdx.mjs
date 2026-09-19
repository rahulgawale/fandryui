// End-to-end check of the `fandry` CLI against throwaway projects in an OS temp
// dir (never this repo). Offline; needs no Salesforce org.
//
// The key assertion does not trust registry.json: after `fandry add`, every
// `c/fandryX` import and `<c-fandry-x>` tag inside the installed bundles must
// resolve to a bundle that is also installed, i.e. the result is self-contained.

import { execFileSync, spawnSync } from 'node:child_process';
import {
  appendFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync
} from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'packages/ui/dist');
const CLI = join(DIST, 'bin/fandry.mjs');

if (!process.env.SKIP_BUILD) {
  execFileSync('node', [join(ROOT, 'scripts/build-dist.mjs')], { cwd: ROOT, stdio: 'inherit' });
}

const failures = [];
const check = (ok, message) => {
  if (!ok) failures.push(message);
};

const runCli = (cli, cwd, args) => {
  const r = spawnSync('node', [cli, ...args], { cwd, encoding: 'utf8' });
  return { code: r.status, out: `${r.stdout}${r.stderr}` };
};
const fandry = (cwd, ...args) => runCli(CLI, cwd, args);
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
const kebabToCamel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const work = mkdtempSync(join(tmpdir(), 'fandry-cli-'));

// ---- Salesforce DX project (4-space indent, API 66.0 to prove both are honored)
const sf = join(work, 'sf');
mkdirSync(join(sf, 'force-app/main/default/lwc'), { recursive: true });
writeFileSync(
  join(sf, 'sfdx-project.json'),
  `${JSON.stringify(
    { packageDirectories: [{ path: 'force-app', default: true }], namespace: '', sourceApiVersion: '66.0' },
    null,
    4
  )}\n`
);

let r = fandry(sf, 'init');
check(r.code === 0, `init (sfdx) exited ${r.code}: ${r.out}`);
const project = readJson(join(sf, 'sfdx-project.json'));
check(project.packageDirectories.some((p) => p.path === 'fandryui'), 'init did not add the fandryui package directory');
check(project.packageDirectories[0].default === true, 'init disturbed the existing default package directory');
check(readFileSync(join(sf, 'sfdx-project.json'), 'utf8').includes('\n    "packageDirectories"'), 'init did not preserve 4-space indentation');
check(readJson(join(sf, 'fandry.json')).target === 'sfdx', 'fandry.json target is not sfdx');
r = fandry(sf, 'init');
check(readJson(join(sf, 'sfdx-project.json')).packageDirectories.length === 2, 'a second init duplicated the package directory');

r = fandry(sf, 'add', 'table', 'lookup', 'c-fandry-radio-group', 'fandryDialog');
check(r.code === 0, `add exited ${r.code}: ${r.out}`);
check(/fandryLookup.*uses? lwc:is/s.test(r.out) && /lightning__dynamicComponent/.test(r.out), `add of a lwc:is component did not explain the capability: ${r.out}`);
const lwc = join(sf, 'fandryui/main/default/lwc');
const installed = new Set(readdirSync(lwc));
for (const b of ['fandryTable', 'fandryTableState', 'fandryTableCore', 'fandryBase', 'fandryLookup', 'fandrySearchState', 'fandryRadioGroup', 'fandryRadio', 'fandryDialog']) {
  check(installed.has(b), `expected bundle ${b} to be installed`);
}
check(!installed.has('fandryCarousel') && !installed.has('fandryMenu'), 'installed a bundle nobody asked for or depends on');

// Self-containment, straight from the installed source.
function assertSelfContained(installed) {
  for (const bundle of installed) {
    for (const file of readdirSync(join(lwc, bundle))) {
      if (file.endsWith('.xml')) {
        check(readFileSync(join(lwc, bundle, file), 'utf8').includes('<apiVersion>66.0</apiVersion>'), `${bundle} meta xml does not use the project's API version`);
        continue;
      }
      const text = readFileSync(join(lwc, bundle, file), 'utf8');
      for (const [, dep] of text.matchAll(/from\s+['"]c\/(fandry[A-Za-z]+)['"]/g)) {
        check(installed.has(dep), `${bundle}/${file} imports c/${dep}, which was not installed`);
      }
      for (const [, tag] of text.matchAll(/<\/?c-fandry-([a-z-]+)/g)) {
        const dep = `fandry${kebabToCamel(tag).replace(/^./, (c) => c.toUpperCase())}`;
        check(installed.has(dep), `${bundle}/${file} renders <c-fandry-${tag}>, which was not installed`);
      }
      check(!/from\s+['"]@/.test(text), `${bundle}/${file} imports an npm package`);
    }
    check(existsSync(join(lwc, bundle, `${bundle}.js-meta.xml`)), `${bundle} has no .js-meta.xml`);

    // A bundle using lwc:is needs the dynamic-component capability in its own
    // meta (else the platform rejects it with LWC1188), and one that does not
    // use it must not carry it.
    const usesDynamic = readdirSync(join(lwc, bundle)).some(
      (f) => f.endsWith('.html') && /lwc:(is|component)\b/.test(readFileSync(join(lwc, bundle, f), 'utf8'))
    );
    const meta = readFileSync(join(lwc, bundle, `${bundle}.js-meta.xml`), 'utf8');
    check(
      usesDynamic === meta.includes('<capability>lightning__dynamicComponent</capability>'),
      `${bundle}: ${usesDynamic ? 'uses lwc:is but its .js-meta.xml lacks' : 'does not use lwc:is but its .js-meta.xml declares'} the lightning__dynamicComponent capability`
    );
  }
}
assertSelfContained(installed);

r = fandry(sf, 'add', 'table');
check(/Added 0 bundle/.test(r.out), `re-running add was not a no-op: ${r.out}`);

// Blocks install exactly like components, dependencies included -- and are
// marked as blocks by `fandry list`.
r = fandry(sf, 'add', 'data-table');
check(r.code === 0, `add data-table exited ${r.code}: ${r.out}`);
// data-table uses select, whose template uses lwc:is: the capability is written for it.
check(/fandrySelect uses lwc:is/.test(r.out), `add data-table did not mention select's lwc:is: ${r.out}`);
r = fandry(sf, 'add', 'form');
check(r.code === 0, `add form exited ${r.code}: ${r.out}`);
const withBlock = new Set(readdirSync(lwc));
for (const b of ['fandryForm', 'fandryFormState', 'fandryFormField', 'fandryRadioGroup', 'fandryRadio', 'fandrySwitch', 'fandryTextarea', 'fandryAlert']) {
  check(withBlock.has(b), `expected bundle ${b} to be installed by form`);
}
for (const b of ['fandryDataTable', 'fandryDataTableState', 'fandryTableState', 'fandryMenu', 'fandryPopover', 'fandryToast', 'fandryToastViewport', 'fandryDialog', 'fandrySelect', 'fandryMotion']) {
  check(withBlock.has(b), `expected bundle ${b} to be installed by data-table`);
}
assertSelfContained(withBlock);
// A .js-meta.xml that already exists is the user's: not rewritten, but they are
// told what is missing.
const selectMeta = join(lwc, 'fandrySelect/fandrySelect.js-meta.xml');
const withoutCapability = readFileSync(selectMeta, 'utf8').replace(/\s*<capabilities>[\s\S]*?<\/capabilities>/, '');
writeFileSync(selectMeta, withoutCapability);
r = fandry(sf, 'add', 'select');
check(
  /fandrySelect already had a \.js-meta\.xml/.test(r.out) && readFileSync(selectMeta, 'utf8') === withoutCapability,
  `an existing .js-meta.xml missing the capability was rewritten, or the user was not told: ${r.out}`
);

r = fandry(sf, 'list');
check(/dataTable\s+\(block\)/.test(r.out), `fandry list did not mark data-table as a block: ${r.out}`);
check(/\bform\s+\(block\)/.test(r.out), `fandry list did not mark form as a block: ${r.out}`);

const edited = join(lwc, 'fandryButton');
fandry(sf, 'add', 'button');
writeFileSync(join(edited, 'fandryButton.css'), '/* my edit */\n');
r = fandry(sf, 'add', 'button');
check(/Skipped/.test(r.out) && readFileSync(join(edited, 'fandryButton.css'), 'utf8') === '/* my edit */\n', 'add clobbered an edited file');
fandry(sf, 'add', 'button', '--overwrite');
check(readFileSync(join(edited, 'fandryButton.css'), 'utf8') !== '/* my edit */\n', '--overwrite did not restore the file');

r = fandry(sf, 'add', 'nope');
check(r.code === 1 && /Unknown component/.test(r.out), 'unknown component did not fail cleanly');

// ---- regressions found in review of PR #69

// The .js-meta.xml belongs to the user: exposure and targets must survive
// re-runs, even when the bundle itself is "already up to date".
const buttonMeta = join(lwc, 'fandryButton/fandryButton.js-meta.xml');
const customMeta = readFileSync(buttonMeta, 'utf8').replace('<isExposed>false</isExposed>', '<isExposed>true</isExposed><targets><target>lightning__AppPage</target></targets>');
writeFileSync(buttonMeta, customMeta);
fandry(sf, 'add', 'button');
fandry(sf, 'add', 'table');
check(readFileSync(buttonMeta, 'utf8') === customMeta, 'add reset a customised .js-meta.xml');

// A preview must not write, and a typo must not turn one into a write.
const before = readFileSync(join(sf, 'fandry.json'), 'utf8');
r = fandry(sf, 'add', 'card', '--dry-run');
check(r.code === 0 && !existsSync(join(lwc, 'fandryCard')) && readFileSync(join(sf, 'fandry.json'), 'utf8') === before, '--dry-run wrote to the project');
r = fandry(sf, 'add', 'card', '--dryrun');
check(r.code === 1 && /Unknown option --dryrun/.test(r.out) && !existsSync(join(lwc, 'fandryCard')), 'a mistyped flag was silently accepted');

// Argument parsing: values are not swallowed blindly, '=' inside a value survives.
const argsProject = join(work, 'args');
mkdirSync(argsProject);
writeFileSync(join(argsProject, 'sfdx-project.json'), JSON.stringify({ packageDirectories: [{ path: 'force-app', default: true }], sourceApiVersion: '66.0' }));
r = fandry(argsProject, 'init', '--dir', '--sfdx');
check(r.code === 1 && /--dir needs a value/.test(r.out) && !existsSync(join(argsProject, '--sfdx')), '--dir consumed the next flag as its value');
fandry(argsProject, 'init', '--dir=vendor/a=b');
check(readJson(join(argsProject, 'fandry.json')).dir === 'vendor/a=b', '--dir=value was split at every "="');

// Re-running init keeps an earlier --dir instead of orphaning it.
const dirProject = join(work, 'dir');
mkdirSync(dirProject);
writeFileSync(join(dirProject, 'sfdx-project.json'), JSON.stringify({ packageDirectories: [{ path: 'force-app', default: true }], sourceApiVersion: '66.0' }));
fandry(dirProject, 'init', '--dir', 'vendor/fandry');
fandry(dirProject, 'add', 'button');
fandry(dirProject, 'init');
check(readJson(join(dirProject, 'fandry.json')).dir === 'vendor/fandry', 'a plain re-run of init dropped the earlier --dir');
check(readJson(join(dirProject, 'sfdx-project.json')).packageDirectories.length === 2, 'a re-run of init added a second package directory');
r = fandry(dirProject, 'init', '--dir', 'elsewhere');
check(r.code === 1 && /already installed/.test(r.out), 'init moved to a new --dir while components were installed in the old one');

// Upgrades vs. edits, against a copy of the package we can "release" a new version of.
const pkg = join(work, 'pkg');
cpSync(DIST, pkg, { recursive: true });
const pkgLwc = join(pkg, 'sfdx/lwc');
writeFileSync(join(pkgLwc, 'fandryLabel/legacy.css'), '/* v1 only */\n');
const up = join(work, 'up');
mkdirSync(up);
writeFileSync(join(up, 'sfdx-project.json'), JSON.stringify({ packageDirectories: [{ path: 'force-app', default: true }], sourceApiVersion: '66.0' }));
const cli = join(pkg, 'bin/fandry.mjs');
runCli(cli, up, ['init']);
runCli(cli, up, ['add', 'input', 'table']);
const upLwc = join(up, 'fandryui/main/default/lwc');
check(existsSync(join(upLwc, 'fandryLabel/legacy.css')), 'test setup: v1 file was not installed');

// "New release": label changes and drops legacy.css; button and base change too.
rmSync(join(pkgLwc, 'fandryLabel/legacy.css'));
for (const b of ['fandryLabel', 'fandryButton', 'fandryBase']) {
  appendFileSync(join(pkgLwc, b, `${b}.js`), '\n// v2\n');
}
// The user edited button locally before upgrading.
appendFileSync(join(upLwc, 'fandryButton/fandryButton.js'), '\n// my edit\n');

r = runCli(cli, up, ['add', 'table']);
check(/Updated[^\n]*fandryLabel/.test(r.out) && /Updated[^\n]*fandryBase/.test(r.out), `untouched bundles were not upgraded: ${r.out}`);
check(readFileSync(join(upLwc, 'fandryLabel/fandryLabel.js'), 'utf8').includes('// v2'), 'upgrade did not install the new version');
check(!existsSync(join(upLwc, 'fandryLabel/legacy.css')), 'upgrade left a file the new version dropped');
check(/Skipped[^\n]*fandryButton/.test(r.out) && readFileSync(join(upLwc, 'fandryButton/fandryButton.js'), 'utf8').includes('// my edit'), 'an edited bundle was not preserved on upgrade');

// --overwrite is for what you name, not for the dependencies of what you name.
runCli(cli, up, ['add', 'table', '--overwrite']);
check(readFileSync(join(upLwc, 'fandryButton/fandryButton.js'), 'utf8').includes('// my edit'), '--overwrite on table clobbered its edited dependency (button)');
r = runCli(cli, up, ['add', 'button', '--overwrite']);
check(/Replaced[^\n]*fandryButton/.test(r.out) && !readFileSync(join(upLwc, 'fandryButton/fandryButton.js'), 'utf8').includes('// my edit'), 'naming a component with --overwrite did not replace it');

// Salesforce CLI must see every installed bundle as metadata.
if (spawnSync('sf', ['--version']).status === 0) {
  const manifest = join(work, 'package.xml');
  const sfr = spawnSync('sf', ['project', 'generate', 'manifest', '--source-dir', 'fandryui', '--name', manifest], { cwd: sf, encoding: 'utf8' });
  const members = existsSync(manifest) ? [...readFileSync(manifest, 'utf8').matchAll(/<members>/g)].length : -1;
  check(sfr.status === 0 && members === withBlock.size, `sf CLI saw ${members} bundles, expected ${withBlock.size}`);
} else {
  console.log('  (sf CLI not found: skipped manifest check)');
}

// ---- LWR project (4-space indent)
const lwr = join(work, 'lwr');
mkdirSync(lwr);
writeFileSync(join(lwr, 'lwr.config.json'), `${JSON.stringify({ lwc: { modules: [{ dir: '$rootDir/src/modules' }] }, routes: [] }, null, 4)}\n`);
r = fandry(lwr, 'init');
check(r.code === 0, `init (lwr) exited ${r.code}: ${r.out}`);
check(readJson(join(lwr, 'lwr.config.json')).lwc.modules.some((m) => m.npm === 'fandryui'), 'init did not add the npm module record');
fandry(lwr, 'init');
check(readJson(join(lwr, 'lwr.config.json')).lwc.modules.filter((m) => m.npm === 'fandryui').length === 1, 'a second init duplicated the npm record');
r = fandry(lwr, 'add', 'button');
check(r.code === 0 && /nothing to add/i.test(r.out), 'add on an LWR project should explain there is nothing to add');
check(!existsSync(join(lwr, 'fandryui')), 'add on an LWR project copied files');

// ---- the published tarball must actually carry the CLI and both flavors
const packed = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json'], { cwd: DIST, encoding: 'utf8' }))[0].files.map((f) => f.path);
for (const p of ['bin/fandry.mjs', 'registry.json', 'lwc.config.json', 'sfdx/lwc/fandryTableCore/fandryTableCore.js', 'modules/fandry/button/button.js']) {
  check(packed.includes(p), `tarball is missing ${p}`);
}

rmSync(work, { recursive: true, force: true });

if (failures.length) {
  console.error(`\nCLI verification FAILED:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log(`\nCLI verification passed: init/add on Salesforce DX (${installed.size} bundles, self-contained) and LWR, edits preserved, sf CLI recognises the result, tarball complete.`);
