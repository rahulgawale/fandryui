// Checks a PR title's release type against the files the PR changes.
//
// semantic-release (release.config.cjs) picks the version from the squash
// commit's type alone: feat -> minor, fix/perf -> patch, anything else -> no
// release. So a site-only PR titled `feat:` cuts an empty release, and a block
// fix titled `docs:` never reaches `fandry add`. This fails the first and
// warns on the second (a `refactor:` of a primitive is fine).
//
// Usage: PR_TITLE="feat: ..." node scripts/check-release-type.mjs < changed-files.txt

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// What ends up in the `fandryui` package: the sources build-dist.mjs reads
// (tests aside), the package's own files, and what it vendors or stamps in.
const SHIPPED = [
  /^src\/(core|salesforce|blocks)\/fandry\//,
  /^packages\/ui\//,
  /^scripts\/build-dist\.mjs$/,
  /^package(-lock)?\.json$/,
  /^LICENSE$/
];

export function releaseType(title) {
  const match = /^(\w+)(\([^)]*\))?(!)?:/.exec(title.trim());
  if (!match) {
    return 'none';
  }
  if (match[3] || match[1] === 'feat') {
    return match[3] ? 'major' : 'minor';
  }
  return match[1] === 'fix' || match[1] === 'perf' ? 'patch' : 'none';
}

export function isShipped(file) {
  return !file.includes('/__tests__/') && SHIPPED.some((pattern) => pattern.test(file));
}

// { ok, message }: not ok fails the check; ok with a message is a warning.
export function checkReleaseType(title, files) {
  const type = releaseType(title);
  const shipped = files.filter(isShipped);
  if (type !== 'none' && shipped.length === 0) {
    return {
      ok: false,
      message: `"${title}" would cut a ${type} release, but nothing in the npm package changed. Use docs: or chore: for site, demo and test changes.`
    };
  }
  if (type === 'none' && shipped.length > 0) {
    return {
      ok: true,
      message: `"${title}" makes no release, but it changes shipped files (${shipped.slice(0, 3).join(', ')}${shipped.length > 3 ? ', ...' : ''}). Use fix: or feat: if users should get this.`
    };
  }
  return { ok: true, message: '' };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const files = readFileSync(0, 'utf8').split('\n').filter(Boolean);
  const { ok, message } = checkReleaseType(process.env.PR_TITLE ?? '', files);
  if (!ok) {
    console.log(`::error::${message}`);
    process.exit(1);
  }
  console.log(message ? `::warning::${message}` : 'Release type matches the changed files.');
}
