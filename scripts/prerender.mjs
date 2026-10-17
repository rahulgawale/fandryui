/*
  Writes a plain-HTML copy of every page into the built site, for crawlers
  that don't run JavaScript (search engines' first pass, AI crawlers, SEO
  scanners). The site renders client-side only (LWR SSR needs AMD), so a
  built page is an empty root element without this.

  Each URL in site/sitemap.xml is rendered in headless Chromium and its
  composed tree (through shadow roots and slots) flattened to headings, text,
  lists, links, tables and code. The copy goes before the root element in
  #main; the layout hides it from any browser that runs scripts, so a visitor
  never sees it. Live demos are left out: their code samples describe them,
  and a heading demo would add headings to the page's outline.

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
const MARKER = '<div id="main">';

const freePort = () =>
    new Promise((resolve) => {
        const server = createServer().listen(0, () => {
            const { port } = server.address();
            server.close(() => resolve(port));
        });
    });

async function waitForServer(url, server, timeoutMs = 30000) {
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        if (server.failure) throw server.failure;
        try {
            if ((await fetch(url)).ok) return;
        } catch {
            // Not listening yet.
        }
        await new Promise((resolve) => setTimeout(resolve, 250));
    }
    throw new Error(`Server at ${url} did not start:\n${server.output}`);
}

/* Runs in the page: the composed tree as plain semantic HTML. */
function snapshot() {
    const KEEP = new Set([
        'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'UL', 'OL', 'LI', 'A', 'STRONG', 'EM', 'CODE',
        'BLOCKQUOTE', 'DL', 'DT', 'DD', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD',
        'HEADER', 'NAV', 'MAIN', 'FOOTER', 'SECTION', 'ARTICLE'
    ]);
    // A <p> holds only phrasing content: a parser would close it at any of these.
    const BLOCK = /\u0000|<(?:p|ul|ol|dl|table|blockquote|h[1-6]|header|nav|main|footer|section|article)>/;
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
        if (SKIP.has(tag) || node.classList.contains('demo-frame')) return '';
        if (getComputedStyle(node).display !== 'contents' && !node.checkVisibility()) return '';

        if (tag === 'PRE') return `\u0000${pres.push(escape(composedText(node))) - 1}\u0000`;
        const inner = [...children(node)].map(render).join('');
        if (tag === 'A') {
            const href = node.getAttribute('href');
            if (!inner.trim() || !href || href.startsWith('#') || href.startsWith('javascript:')) return inner;
            return `<a href="${escape(href.replace(location.origin, ''))}">${inner.trim()}</a>`;
        }
        if (tag === 'P' && BLOCK.test(inner)) return `\n${inner}\n`;
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
// lwr's bin is a node script; running it with node also works where .bin holds a .cmd shim.
const server = spawn(process.execPath, [join('node_modules', 'lwr', 'bin', 'lwr.js'), 'start', '--port', String(port)]);
server.output = '';
server.stdout.on('data', (chunk) => (server.output += chunk));
server.stderr.on('data', (chunk) => (server.output += chunk));
server.on('error', (error) => (server.failure = error));
server.on('exit', (code) => (server.failure ??= new Error(`lwr start exited with ${code}:\n${server.output}`)));
let browser;
try {
    await waitForServer(base, server);
    browser = await chromium.launch();
    const page = await browser.newPage();
    // Every page is checked before any file is written, so a failing run leaves site/ as built.
    const pages = [];
    const failures = [];
    for (const path of paths) {
        await page.goto(base + path, { waitUntil: 'networkidle' });
        const html = await page.evaluate(snapshot);
        const h1s = (html.match(/<h1>/g) ?? []).length;
        if (h1s !== 1) failures.push(`${path}: ${h1s} h1 elements (every page needs exactly one)`);
        const file = join(SITE_DIR, path, 'index.html');
        const source = readFileSync(file, 'utf8').replace(new RegExp(`${START}[\\s\\S]*?${END}`), '');
        if (!source.includes(MARKER)) failures.push(`${file} has no ${MARKER}`);
        pages.push({ path, html, file, source });
    }
    if (failures.length) throw new Error(`Prerender failed; site/ is unchanged:\n${failures.join('\n')}`);

    for (const { path, html, file, source } of pages) {
        writeFileSync(file, source.replace(MARKER, () => `${MARKER}${START}<div class="prerender">\n${html}\n</div>${END}`));
        console.log(`prerendered ${ORIGIN}${path}`);
    }
} finally {
    await browser?.close();
    server.kill();
}
