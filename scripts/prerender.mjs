/*
  Writes a plain-HTML copy of every page into the built site, for crawlers
  that don't run JavaScript (search engines' first pass, AI crawlers, SEO
  scanners). The site renders client-side only (LWR SSR needs AMD), so a
  built page is an empty root element without this.

  Each URL in site/sitemap.xml is rendered in headless Chromium and its
  composed tree (through shadow roots and slots) flattened to headings, text,
  lists, links, tables and code. The copy goes before the root element in
  #main; the layout hides it with `@media (scripting: enabled)`, so a browser
  that runs the app never shows it.

  Run after `npm run build`: npm run prerender
*/
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { join } from 'node:path';
import { chromium } from 'playwright';

const SITE_DIR = 'site';
const ORIGIN = 'https://fandryui.forcetrails.com';
const START = '<!-- prerender -->';
const END = '<!-- /prerender -->';

const freePort = () =>
    new Promise((resolve) => {
        const server = createServer().listen(0, () => {
            const { port } = server.address();
            server.close(() => resolve(port));
        });
    });

async function waitForServer(url, timeoutMs = 30000) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        try {
            if ((await fetch(url)).ok) return;
        } catch {
            // Not listening yet.
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
    }
    throw new Error(`Server at ${url} did not start`);
}

/* Runs in the page: the composed tree as plain semantic HTML. */
function snapshot() {
    const KEEP = new Set([
        'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'UL', 'OL', 'LI', 'A', 'STRONG', 'EM', 'CODE',
        'BLOCKQUOTE', 'DL', 'DT', 'DD', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD',
        'HEADER', 'NAV', 'MAIN', 'FOOTER', 'SECTION', 'ARTICLE'
    ]);
    const SKIP = new Set(['SCRIPT', 'STYLE', 'TEMPLATE', 'SVG', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'DIALOG', 'IMG', 'VIDEO']);
    const escape = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

    const children = (node) => {
        if (node.shadowRoot) return node.shadowRoot.childNodes;
        if (node.tagName === 'SLOT') {
            const assigned = node.assignedNodes({ flatten: true });
            return assigned.length ? assigned : node.childNodes;
        }
        return node.childNodes;
    };
    const composedText = (node) => (node.nodeType === Node.TEXT_NODE ? node.textContent : [...children(node)].map(composedText).join(''));

    const render = (node) => {
        if (node.nodeType === Node.TEXT_NODE) return escape(node.textContent.replace(/\s+/g, ' '));
        if (node.nodeType !== Node.ELEMENT_NODE) return '';
        const tag = node.tagName.toUpperCase();
        if (SKIP.has(tag)) return '';
        if (getComputedStyle(node).display !== 'contents' && !node.checkVisibility()) return '';

        if (tag === 'PRE') return `\u0000${pres.push(escape(composedText(node))) - 1}\u0000`;
        const inner = [...children(node)].map(render).join('');
        if (tag === 'A') {
            const href = node.getAttribute('href');
            if (!inner.trim() || !href || href.startsWith('#') || href.startsWith('javascript:')) return inner;
            return `<a href="${escape(href.replace(location.origin, ''))}">${inner.trim()}</a>`;
        }
        if (KEEP.has(tag)) return inner.trim() ? `<${tag.toLowerCase()}>${inner.trim()}</${tag.toLowerCase()}>` : '';
        // Unwrapped: keep words from running together across block boxes.
        return getComputedStyle(node).display.startsWith('inline') ? inner : `\n${inner}\n`;
    };

    // Code keeps its whitespace; the rest is collapsed around it.
    const pres = [];
    return [...document.querySelector('#main').childNodes]
        .map(render)
        .join('')
        .replace(/[ \t]+/g, ' ')
        .replace(/\s*\n\s*/g, '\n')
        .trim()
        .replace(/\u0000(\d+)\u0000/g, (_, index) => `<pre>${pres[index]}</pre>`);
}

const sitemap = readFileSync(join(SITE_DIR, 'sitemap.xml'), 'utf8');
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);

const port = await freePort();
const base = `http://localhost:${port}`;
const server = spawn(join('node_modules', '.bin', 'lwr'), ['start', '--port', String(port)], { stdio: 'ignore' });
let browser;
try {
    await waitForServer(base);
    browser = await chromium.launch();
    const page = await browser.newPage();
    // No page views in the site's analytics from the build.
    await page.route(/googletagmanager\.com|google-analytics\.com/, (route) => route.abort());
    const failures = [];
    for (const path of paths) {
        await page.goto(base + path, { waitUntil: 'networkidle' });
        const html = await page.evaluate(snapshot);
        const h1s = (html.match(/<h1>/g) ?? []).length;
        if (h1s !== 1) failures.push(`${path}: ${h1s} h1 elements`);

        const file = join(SITE_DIR, path, 'index.html');
        const source = readFileSync(file, 'utf8').replace(new RegExp(`${START}[\\s\\S]*?${END}`), '');
        const marker = '<div id="main">';
        if (!source.includes(marker)) throw new Error(`${file} has no ${marker}`);
        writeFileSync(file, source.replace(marker, () => `${marker}${START}<div class="prerender">\n${html}\n</div>${END}`));
        console.log(`prerendered ${ORIGIN}${path}`);
    }
    if (failures.length) throw new Error(`Every page needs exactly one h1:\n${failures.join('\n')}`);
} finally {
    await browser?.close();
    server.kill();
}
