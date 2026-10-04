#!/usr/bin/env node
/*
  Builds the Aryabh Outfitters store's data from data/products.json, through
  the Salesforce CLI (sf, already logged in to the org). Safe to run again:
  everything is found by SKU or name first, and only what's missing is added.

    node scripts/setup-store.mjs --target-org fandry-demo-site

  1. Uploads each product image (src/assets/products) to the store's CMS
     space and publishes it.
  2. Runs anonymous Apex (scripts/setup-store.apex, filled in with the data)
     that creates the products -- a variation parent with one variation per
     colour, or a simple product for one colour -- their prices, categories,
     entitlements and media.
  3. Rebuilds the store's search index, which the storefront's search and
     category pages read.

  It never deletes anything, and it touches only products whose SKU starts
  with AO-.
*/
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const PROJECT = resolve(HERE, '..');
const IMAGES = resolve(PROJECT, '../../src/assets/products');
const API = 'v67.0';
const STORE = 'Aryabh Outfitters';

const orgFlag = process.argv.indexOf('--target-org');
const targetOrg = orgFlag > -1 ? process.argv[orgFlag + 1] : undefined;
if (!targetOrg) {
  console.error('usage: node scripts/setup-store.mjs --target-org <alias>');
  process.exit(1);
}

const scratch = mkdtempSync(join(tmpdir(), 'aryabh-'));

function sf(args) {
  try {
    const out = execFileSync('sf', [...args, '--target-org', targetOrg, '--json'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      maxBuffer: 64 * 1024 * 1024,
      env: { ...process.env, SF_DISABLE_AUTOUPDATE: 'true' }
    });
    return JSON.parse(out);
  } catch (error) {
    // --json still prints the result on a failure; an Apex error is in it.
    const failed = error.stdout ? JSON.parse(error.stdout) : undefined;
    if (failed?.data) return { result: failed.data };
    throw new Error(failed?.message ?? error.message);
  }
}

function query(soql) {
  return sf(['data', 'query', '--query', soql]).result.records;
}

/* sf api request rest prints the response body (not JSON-wrapped); the
   request goes in a file, the only way it takes a multipart body. A raw
   body is given as an object: the CLI serializes it. */
function rest(request) {
  const file = join(scratch, 'request.json');
  writeFileSync(file, JSON.stringify({ header: [], body: { mode: 'raw', raw: {} }, ...request }));
  let out;
  try {
    out = execFileSync('sf', ['api', 'request', 'rest', '--file', file, '--target-org', targetOrg], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
      env: { ...process.env, SF_DISABLE_AUTOUPDATE: 'true' }
    });
  } catch (error) {
    // An error response exits non-zero; its body says why.
    out = error.stdout ?? '';
  }
  const body = out.trim() ? JSON.parse(out) : {};
  if (Array.isArray(body) && body[0]?.errorCode) {
    throw new Error(`${request.method} ${request.url}: ${body.map((e) => e.message).join('; ')}`);
  }
  return body;
}

const { products } = JSON.parse(readFileSync(join(PROJECT, 'data/products.json'), 'utf8'));

// ---- 1. images

const space = query(
  `SELECT Id FROM ManagedContentSpace WHERE Name LIKE '${STORE} Managed Content Space%' LIMIT 1`
)[0];
if (!space) throw new Error(`no CMS space for ${STORE}`);

const urlName = (file) => `ao-${file.replace(/\.svg$/, '')}`;
const files = [...new Set(products.flatMap((p) => p.colors.flatMap((c) => [c.image, c.hoverImage])))];

const existing = new Map(
  query(
    `SELECT ManagedContentId, UrlName, IsPublished FROM ManagedContentVariant WHERE UrlName IN (${files.map((f) => `'${urlName(f)}'`).join(',')})`
  ).map((record) => [record.UrlName, record])
);

const media = {};
const unpublished = [];
for (const file of files) {
  const name = urlName(file);
  if (existing.has(name)) {
    const { ManagedContentId, IsPublished } = existing.get(name);
    media[file] = ManagedContentId;
    if (!IsPublished) unpublished.push(ManagedContentId);
    continue;
  }
  const created = rest({
    url: `/services/data/${API}/connect/cms/contents`,
    method: 'POST',
    body: {
      mode: 'formdata',
      formdata: [
        {
          key: 'ManagedContentInputParam',
          type: 'text',
          contentType: 'application/json',
          value: JSON.stringify({
            contentSpaceOrFolderId: space.Id,
            contentType: 'sfdc_cms__image',
            title: name.replace(/^ao-/, '').replace(/-/g, ' '),
            urlName: name,
            contentBody: { 'sfdc_cms:media': { source: { type: 'file' } } }
          })
        },
        { key: 'contentData', type: 'file', src: join(IMAGES, file) }
      ]
    }
  });
  media[file] = created.managedContentId;
  unpublished.push(created.managedContentId);
  console.log(`uploaded ${file}`);
}

if (unpublished.length) {
  rest({
    url: `/services/data/${API}/connect/cms/contents/publish`,
    method: 'POST',
    header: [{ key: 'Content-Type', value: 'application/json' }],
    body: { mode: 'raw', raw: { contentIds: unpublished, description: 'Product images' } }
  });
}
console.log(`${files.length} images (${unpublished.length} newly published)`);

// ---- 2. products, prices, categories, entitlements, media

// The data goes in as an Apex string literal: JSON, with quotes escaped.
const literal = JSON.stringify({ store: STORE, products, media }).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
const apex = readFileSync(join(HERE, 'setup-store.apex'), 'utf8').replace("'__DATA__'", () => `'${literal}'`);
const apexFile = join(scratch, 'setup-store.apex');
writeFileSync(apexFile, apex);
const run = sf(['apex', 'run', '--file', apexFile]).result;
if (!run.success) {
  console.error(run.compileProblem || run.exceptionMessage, run.exceptionStackTrace || '');
  process.exit(1);
}
for (const line of run.logs.split('\n')) {
  const match = line.match(/USER_DEBUG\|\[\d+\]\|DEBUG\|(.*)$/);
  if (match) console.log(match[1]);
}

// ---- 3. search index

const store = query(`SELECT Id FROM WebStore WHERE Name = '${STORE}'`)[0];
try {
  rest({
    url: `/services/data/${API}/commerce/management/webstores/${store.Id}/search/indexes`,
    method: 'POST',
    header: [{ key: 'Content-Type', value: 'application/json' }],
    body: { mode: 'raw', raw: {} }
  });
  console.log('search index rebuild started; it takes a few minutes');
} catch (error) {
  // A full rebuild is allowed once every 5 minutes; the last one still stands.
  if (!/too soon/.test(error.message)) throw error;
  console.log('search index was rebuilt less than 5 minutes ago; run again later to pick up changes');
}
