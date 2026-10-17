// node --test scripts/check-release-type.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkReleaseType, releaseType } from './check-release-type.mjs';

test('reads the release type from the title', () => {
  assert.equal(releaseType('feat(badge): soft tints'), 'minor');
  assert.equal(releaseType('fix: a bug'), 'patch');
  assert.equal(releaseType('perf(table): faster'), 'patch');
  assert.equal(releaseType('feat!: drop a prop'), 'major');
  assert.equal(releaseType('refactor(core)!: rename a part'), 'major');
  assert.equal(releaseType('docs(site): a page'), 'none');
  assert.equal(releaseType('Update README'), 'none');
});

test('fails a release title with no shipped change', () => {
  const result = checkReleaseType('feat(site): why page', ['src/modules/fandryui/whyFandry/whyFandry.html', 'lwr.config.json']);
  assert.equal(result.ok, false);
});

test('tests alone are not shipped', () => {
  assert.equal(checkReleaseType('fix: flaky test', ['src/core/fandry/link/__tests__/link.test.ts']).ok, false);
});

test('passes a release title that changes a primitive or a block', () => {
  assert.deepEqual(checkReleaseType('fix(badge): contrast', ['src/core/fandry/badge/badge.css']), { ok: true, message: '' });
  assert.deepEqual(checkReleaseType('feat(form): reset', ['src/blocks/fandry/form/form.ts']), { ok: true, message: '' });
  assert.deepEqual(checkReleaseType('fix(cli): add', ['packages/ui/bin/fandry.mjs']), { ok: true, message: '' });
});

test('warns, but passes, a no-release title that changes shipped files', () => {
  const result = checkReleaseType('refactor(link): tidy', ['src/core/fandry/link/link.ts']);
  assert.equal(result.ok, true);
  assert.match(result.message, /no release/);
});

test('passes a no-release title on site-only changes quietly', () => {
  assert.deepEqual(checkReleaseType('docs(site): copy', ['src/modules/fandryui/home/home.html']), { ok: true, message: '' });
});
