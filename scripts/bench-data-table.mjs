/*
 * Benchmarks the data-table block in real Chromium against a running LWR
 * server, at several dataset sizes and page sizes.
 *
 *   npm run build && npx lwr start --port 3200          # a PRODUCTION build
 *   node scripts/bench-data-table.mjs --url http://localhost:3200
 *
 *   --rows       comma list of dataset sizes        (default 100,1000,10000)
 *   --page-size  comma list of rows per page        (default 8,50)
 *   --runs       repetitions of each interaction    (default 12)
 *   --warmup     unmeasured repetitions first       (default 2)
 *   --sorting-fn tanstack sortingFn to give every column, e.g. text or basic
 *                (default: none, i.e. the demo exactly as shipped, which lets
 *                tanstack pick -- and it picks the slow `alphanumeric`)
 *   --out        write the raw results as JSON
 *
 * Measure a production build: `lwr dev` runs LWC in a development mode that is
 * several times slower and says little about what a user gets. Numbers are
 * for native shadow DOM in Chromium; Salesforce's synthetic shadow DOM is
 * typically slower, so read them as a floor.
 *
 * Playwright is deliberately not a dependency of this repo. Install it
 * wherever you like (`npm i --no-save playwright && npx playwright install
 * chromium`), or point PLAYWRIGHT_FROM at a directory that has it in its
 * node_modules.
 *
 * What is timed: from the moment an interaction is dispatched (the same DOM
 * events a user produces) until the component has re-rendered and the browser
 * has recalculated style and layout for the result: JavaScript + style +
 * layout. Paint and compositing are not included (they run off the main
 * thread and are quantised to frames, which would put a 16-33 ms floor under
 * every number). The breakdown splits that time in the page itself: "js" is
 * the interaction's synchronous handler plus LWC's re-render (which runs in
 * microtasks, right after it); "layout+rest" is everything from there to the
 * forced style and layout. (Chromium's own ScriptDuration counter is not used:
 * it under-reported a 90 ms re-render as 1 ms.)
 * The demo page (`/blocks/data-table?rows=N&latency=0&pageSize=P`) serves the
 * data from memory with no latency, so the API is not part of any number.
 */

import { createRequire } from 'node:module';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function arg(name, fallback) {
  const at = process.argv.indexOf(`--${name}`);
  return at > -1 ? process.argv[at + 1] : fallback;
}
const list = (value) => String(value).split(',').map(Number);

const BASE = arg('url', 'http://localhost:3200').replace(/\/$/, '');
const ROWS = list(arg('rows', '100,1000,10000'));
const PAGE_SIZES = list(arg('page-size', '8,50'));
const RUNS = Number(arg('runs', 12));
/*
 * The first calls pay for JIT compilation and cold caches; a user's tenth click
 * does not. Run and discard a few before measuring.
 */
const WARMUP = Number(arg('warmup', 2));
const OUT = arg('out', '');
const SORTING_FN = arg('sorting-fn', '');
const LOAD_RUNS = 3;

let chromium;
try {
  const from = resolve(process.env.PLAYWRIGHT_FROM ?? process.cwd(), 'package.json');
  ({ chromium } = createRequire(from)('playwright'));
} catch {
  console.error('Playwright is not installed. Run:  npm i --no-save playwright && npx playwright install chromium');
  process.exit(1);
}

const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
};
const round = (n) => Math.round(n * 10) / 10;

/*
 * Helpers available inside the page. `timed` runs an interaction and resolves
 * once the frame that shows its result has been produced. `deepAll` finds
 * elements through open shadow roots.
 */
const PAGE_HELPERS = () => {
  /*
   * A MessageChannel tick, not setTimeout(0): Chromium clamps nested timers to
   * 4 ms, which would put a floor under every number.
   */
  const macrotask = () =>
    new Promise((done) => {
      const channel = new MessageChannel();
      channel.port1.onmessage = () => {
        channel.port1.close();
        done();
      };
      channel.port2.postMessage(0);
    });
  /*
   * LWC re-renders in a microtask, so a macrotask later the DOM is up to date;
   * reading a layout property then forces style + layout to be computed.
   */
  const settled = async () => {
    await macrotask();
    document.documentElement.getBoundingClientRect();
  };
  const nextFrame = () => new Promise((done) => requestAnimationFrame(done));
  const deepAll = (selector, root = document) => {
    const found = [...root.querySelectorAll(selector)];
    for (const el of root.querySelectorAll('*')) {
      if (el.shadowRoot) found.push(...deepAll(selector, el.shadowRoot));
    }
    return found;
  };
  window.__bench = {
    deepAll,
    /*
     * Keyed by the returned total, so the caller can look a phase split up from
     * the timing it was handed back.
     */
    phases: new Map(),
    async timed(interaction) {
      const start = performance.now();
      interaction();
      /*
       * LWC re-renders in a microtask queued by the handler, so two turns of
       * the microtask queue later the DOM is up to date.
       */
      await Promise.resolve();
      await Promise.resolve();
      const rendered = performance.now();
      await settled();
      const end = performance.now();
      const total = end - start;
      window.__bench.phases.set(total, { js: rendered - start, rest: end - rendered });
      return total;
    },
    macrotask,
    async settled() {
      await settled();
    },
    async nextFrame() {
      await nextFrame();
    },
    countNodes() {
      let count = 0;
      const walk = (root) => {
        for (const el of root.querySelectorAll('*')) {
          count += 1;
          if (el.shadowRoot) walk(el.shadowRoot);
        }
      };
      walk(document);
      return count;
    }
  };
};

/*
 * Each interaction: where to find its element, and what to do to it, `runs`
 * times. `run` is serialised into the page, so it can only use its arguments
 * and `window.__bench`.
 */
const INTERACTIONS = [
  {
    /*
     * The block waits `globalFilterDebounceMs` (250 by default) after the last
     * keystroke before it filters. The debounce is switched off for these two
     * so that what is measured is the filtering and re-render, not the wait;
     * a user's latency is that plus the debounce.
     */
    name: 'search: one keystroke',
    target: 'fandry-data-table .search fandry-input input',
    run: async (input, runs) => {
      const [table] = window.__bench.deepAll('fandry-data-table');
      const debounce = table.globalFilterDebounceMs;
      table.globalFilterDebounceMs = 0;
      const timings = [];
      // Five keystrokes a round, enough rounds to reach `runs` samples.
      for (let round = 0; round < Math.ceil(runs / 5); round++) {
        let value = '';
        for (const ch of 'grace') {
          value += ch;
          timings.push(
            await window.__bench.timed(() => {
              input.value = value;
              input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
            })
          );
        }
        // Back to empty before the next round.
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        await window.__bench.nextFrame();
      }
      table.globalFilterDebounceMs = debounce;
      return timings;
    }
  },
  {
    name: 'search: clear',
    target: 'fandry-data-table .search fandry-input input',
    run: async (input, runs) => {
      const [table] = window.__bench.deepAll('fandry-data-table');
      const debounce = table.globalFilterDebounceMs;
      table.globalFilterDebounceMs = 0;
      const timings = [];
      for (let i = 0; i < runs; i++) {
        input.value = 'a';
        input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
        await window.__bench.nextFrame();
        timings.push(
          await window.__bench.timed(() => {
            input.value = '';
            input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
          })
        );
      }
      table.globalFilterDebounceMs = debounce;
      return timings;
    }
  },
  {
    name: 'sort by a column',
    target: 'fandry-data-table .sort-button',
    run: async (button, runs) => {
      const timings = [];
      for (let i = 0; i < runs; i++) timings.push(await window.__bench.timed(() => button.click()));
      /*
       * The header cycles ascending -> descending -> none. Leave it on none:
       * a table left sorted makes every later interaction pay for a sort of the
       * whole dataset, which is not what they are measuring.
       */
      const header = button.closest('th');
      for (let i = 0; i < 3 && header.getAttribute('aria-sort') !== 'none'; i++) {
        await window.__bench.timed(() => button.click());
      }
      return timings;
    }
  },
  {
    name: 'filter by a column',
    target: 'fandry-data-table .filter fandry-select',
    run: async (select, runs) => {
      const timings = [];
      const pick = (detail) => select.dispatchEvent(new CustomEvent('change', { detail, bubbles: true }));
      for (let i = 0; i < runs; i++) {
        timings.push(await window.__bench.timed(() => pick('Admin')));
        await window.__bench.timed(() => pick(''));
      }
      return timings;
    }
  },
  {
    name: 'go to the next page',
    target: 'fandry-data-table fandry-pagination fandry-button',
    text: /next/i,
    run: async (button, runs) => {
      // Forward then back, so a short dataset never runs out of pages.
      const previous = [...button.getRootNode().querySelectorAll('fandry-button')].find((b) => /prev/i.test(b.textContent));
      const timings = [];
      for (let i = 0; i < runs; i++) {
        timings.push(await window.__bench.timed(() => button.click()));
        await window.__bench.timed(() => previous.click());
      }
      return timings;
    }
  },
  {
    name: 'select one row',
    target: 'fandry-data-table tbody fandry-checkbox input',
    run: async (checkbox, runs) => {
      const timings = [];
      for (let i = 0; i < runs; i++) timings.push(await window.__bench.timed(() => checkbox.click()));
      /*
       * An odd number of toggles leaves it selected, which would show a footer
       * action and change what the next interactions render.
       */
      if (checkbox.checked) await window.__bench.timed(() => checkbox.click());
      return timings;
    }
  },
  {
    name: 'select all on the page',
    target: 'fandry-data-table thead fandry-checkbox input',
    run: async (checkbox, runs) => {
      const timings = [];
      for (let i = 0; i < runs; i++) timings.push(await window.__bench.timed(() => checkbox.click()));
      if (checkbox.checked) await window.__bench.timed(() => checkbox.click());
      return timings;
    }
  },
  {
    name: 'open the row menu',
    target: 'fandry-data-table tbody fandry-popover fandry-button button',
    run: async (button, runs) => {
      const timings = [];
      for (let i = 0; i < runs; i++) {
        timings.push(await window.__bench.timed(() => button.click()));
        await window.__bench.timed(() => button.click());
      }
      return timings;
    }
  },
  {
    /*
     * Cell -> edit mode, a keystroke in the editor, then Cancel. The three
     * are one interaction each, reported separately below.
     */
    name: 'edit a row',
    target: 'fandry-data-table tbody td[data-row-id]',
    run: async (cell, runs) => {
      const enter = [];
      const keystroke = [];
      const cancel = [];
      for (let i = 0; i < runs; i++) {
        enter.push(await window.__bench.timed(() => cell.dispatchEvent(new MouseEvent('dblclick', { bubbles: true }))));
        const [editor] = window.__bench.deepAll('.editor');
        const input = editor.shadowRoot.querySelector('input');
        keystroke.push(
          await window.__bench.timed(() => {
            input.value = `${input.value}x`;
            input.dispatchEvent(new Event('input', { bubbles: true, composed: true }));
          })
        );
        const [, cancelButton] = window.__bench.deepAll('.edit-actions fandry-button');
        cancel.push(await window.__bench.timed(() => cancelButton.click()));
      }
      return { 'edit a row: enter edit mode': enter, 'edit a row: one keystroke in a cell': keystroke, 'edit a row: cancel': cancel };
    }
  },
  {
    name: 'replace all data (Refresh)',
    target: 'fandry-data-table fandry-button[slot="toolbar"]',
    text: /refresh/i,
    run: async (button, runs) => {
      const timings = [];
      for (let i = 0; i < runs; i++) {
        const start = performance.now();
        button.click();
        await window.__bench.settled();
        // With no latency the data may already be back; otherwise wait out the skeleton.
        const deadline = start + 60000;
        while (window.__bench.deepAll('tr.loading-row').length && performance.now() < deadline) {
          await window.__bench.macrotask();
        }
        await window.__bench.settled();
        timings.push(performance.now() - start);
      }
      return timings;
    }
  }
];

async function newPage(browser, query) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 1000 } });
  await page.addInitScript(PAGE_HELPERS);
  const start = Date.now();
  await page.goto(`${BASE}/blocks/data-table?${query}`);
  await page.waitForSelector('fandry-data-table tbody tr:not(.loading-row)', { timeout: 120000 });
  const loadMs = Date.now() - start;
  await page.evaluate(() => window.__bench.nextFrame());
  return { page, loadMs };
}

async function benchmark(browser, rows, pageSize) {
  const query = `rows=${rows}&latency=0&pageSize=${pageSize}`;
  const loads = [];
  for (let i = 0; i < LOAD_RUNS - 1; i++) {
    const { page, loadMs } = await newPage(browser, query);
    loads.push(loadMs);
    await page.close();
  }
  const { page, loadMs } = await newPage(browser, query);
  loads.push(loadMs);

  const result = {
    rows,
    pageSize,
    'first load, to visible rows': { median: median(loads), max: Math.max(...loads) },
    'DOM nodes (through shadow roots)': { median: await page.evaluate(() => window.__bench.countNodes()) }
  };
  const heap = await page.evaluate(() => performance.memory?.usedJSHeapSize ?? 0);
  if (heap) result['JS heap after load (MB)'] = { median: heap / 1048576 };

  if (SORTING_FN) {
    // Same lever a consumer has: a `sortingFn` on the column definition.
    await page.evaluate((sortingFn) => {
      const [table] = window.__bench.deepAll('fandry-data-table');
      table.columns = table.columns.map((column) => ({ ...column, sortingFn }));
    }, SORTING_FN);
    await page.evaluate(() => window.__bench.nextFrame());
  }

  for (const interaction of INTERACTIONS) {
    let locator = page.locator(interaction.target);
    if (interaction.text) locator = locator.filter({ hasText: interaction.text });
    const handle = locator.first();
    if (!(await handle.count())) {
      result[interaction.name] = { median: NaN };
      continue;
    }

    let timings;
    try {
      if (WARMUP > 0) await handle.evaluate(interaction.run, WARMUP);
      await page.evaluate(() => window.__bench.phases.clear());
      timings = await handle.evaluate(interaction.run, RUNS);
    } catch (error) {
      console.error(`  ! ${interaction.name}: ${error.message.split('\n')[0]}`);
      result[interaction.name] = { median: NaN };
      continue;
    }
    const phases = new Map(await page.evaluate(() => [...window.__bench.phases]));

    const groups = Array.isArray(timings) ? { [interaction.name]: timings } : timings;
    for (const [name, values] of Object.entries(groups)) {
      const split = values.map((total) => phases.get(total)).filter(Boolean);
      result[name] = { median: median(values), max: Math.max(...values) };
      // Not every interaction goes through `timed` (Refresh waits out a skeleton).
      if (split.length === values.length) {
        result[name].js = median(split.map((p) => p.js));
        result[name].rest = median(split.map((p) => p.rest));
      }
    }
  }
  await page.close();
  return result;
}

function printTable(results) {
  const columns = results.map((r) => `${r.rows} rows, ${r.pageSize}/page`);
  const names = [...new Set(results.flatMap((r) => Object.keys(r).filter((k) => !['rows', 'pageSize'].includes(k))))];
  const width = Math.max(...names.map((n) => n.length)) + 2;
  console.log(`\n${'median ms (unless noted)'.padEnd(width)}${columns.map((c) => c.padStart(20)).join('')}`);
  for (const name of names) {
    const cells = results.map((r) => {
      const value = r[name]?.median;
      return (Number.isFinite(value) ? String(round(value)) : 'n/a').padStart(20);
    });
    console.log(`${name.padEnd(width)}${cells.join('')}`);
  }
  console.log('\nWorst single run, and where the median went (js = handler + re-render | layout+rest), per interaction:');
  for (const r of results) {
    console.log(`\n  ${r.rows} rows, ${r.pageSize}/page`);
    for (const name of names) {
      const m = r[name];
      if (!m || m.js === undefined) continue;
      console.log(`    ${name.padEnd(width)} max ${String(round(m.max)).padStart(7)}   js ${String(round(m.js)).padStart(7)}   layout+rest ${String(round(m.rest)).padStart(6)}`);
    }
  }
}

const browser = await chromium.launch();
const results = [];
for (const pageSize of PAGE_SIZES) {
  for (const rows of ROWS) {
    console.error(`running ${rows} rows, ${pageSize}/page ...`);
    results.push(await benchmark(browser, rows, pageSize));
  }
}
await browser.close();

printTable(results);
if (OUT) writeFileSync(OUT, JSON.stringify(results, null, 2));
