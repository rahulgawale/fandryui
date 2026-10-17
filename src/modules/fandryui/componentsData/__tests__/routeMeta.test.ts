import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { COMPONENTS } from 'fandryui/componentsData';
import { GETTING_STARTED_PAGES } from 'fandryui/gettingStartedData';

/* Every page's <title>, description, canonical and Open Graph tags come from
   its route's "properties" in lwr.config.json, filled into the shared layout
   by LWR. These checks keep them complete and in step with the docs data. */

const ROOT = resolve(__dirname, '../../../../..');
const SITE = 'https://fandryui.forcetrails.com';

interface Route {
  path: string;
  properties?: { title?: string; description?: string; path?: string; image?: string; imageAlt?: string };
}

const config = JSON.parse(readFileSync(resolve(ROOT, 'lwr.config.json'), 'utf8')) as { routes: Route[] };
const routes = config.routes;
const plain = (text: string) => text.replace(/`/g, '');
// A component's first sentence: its page has the rest.
const firstSentence = (text: string) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;

describe('route metadata', () => {
  it.each(routes.map((route) => [route.path, route]))('%s has a title, description and canonical path', (_, route) => {
    const { title, description, path } = (route as Route).properties ?? {};
    expect(title).toBeTruthy();
    expect(title!.length).toBeLessThanOrEqual(60);
    expect(description).toBeTruthy();
    expect(description).not.toMatch(/`/);
    // Past ~160 characters a search result cuts the description off.
    expect(description!.length).toBeLessThanOrEqual(160);
    // The live site redirects /x to /x/, so the canonical URL ends in a slash.
    expect(path).toBe((route as Route).path === '/' ? '/' : `${(route as Route).path}/`);
  });

  // The og:image: a file under src/assets (served at /assets), 1200 x 630.
  it.each(routes.map((route) => [route.path, route]))('%s has a share image that exists, with alt text', (_, route) => {
    const { image, imageAlt } = (route as Route).properties ?? {};
    expect(image).toMatch(/^\/assets\/.+\.(jpg|png)$/);
    expect(existsSync(resolve(ROOT, 'src', image!.slice(1)))).toBe(true);
    expect(imageAlt).toBeTruthy();
  });

  // The share picture carries the logo; the blocks index shows <slug>.jpg, without it.
  it('shows each block page its own screenshot', () => {
    for (const route of routes.filter((r) => /^\/blocks\/./.test(r.path))) {
      expect(route.properties?.image).toBe(`/assets/blocks/${route.path.split('/').pop()}-og.jpg`);
    }
  });

  it('gives every page its own title and description', () => {
    const titles = routes.map((route) => route.properties?.title);
    const descriptions = routes.map((route) => route.properties?.description);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it('describes each component page from componentsData', () => {
    for (const component of COMPONENTS) {
      const route = routes.find((r) => r.path === `/components/${component.slug}`);
      expect(route?.properties).toMatchObject({
        title: `${component.name} component for LWC | Fandry UI`,
        description: `${firstSentence(plain(component.description))} A Fandry UI component for Salesforce LWC.`,
        path: `/components/${component.slug}/`
      });
    }
  });

  it('describes each getting-started page from gettingStartedData', () => {
    for (const page of GETTING_STARTED_PAGES) {
      const path = page.slug ? `/getting-started/${page.slug}` : '/getting-started';
      expect(routes.find((r) => r.path === path)?.properties?.description).toBe(plain(page.description));
    }
  });
});

describe('sitemap.xml', () => {
  it('lists exactly the canonical URL of every route', () => {
    const sitemap = readFileSync(resolve(ROOT, 'src/assets/sitemap.xml'), 'utf8');
    const listed = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
    expect(listed).toEqual(routes.map((route) => `${SITE}${route.properties?.path}`));
  });
});

describe('llms.txt', () => {
  /* The plain-text index AI crawlers read, since they don't run the
     site's JavaScript. Every page, with its own description. */
  it('lists every route with its canonical URL and description', () => {
    const llms = readFileSync(resolve(ROOT, 'src/assets/llms.txt'), 'utf8');
    for (const route of routes) {
      expect(llms).toContain(`](${SITE}${route.properties?.path}): ${route.properties?.description}\n`);
    }
  });
});

describe('structured data', () => {
  it('is valid JSON-LD in the layout', () => {
    const layout = readFileSync(resolve(ROOT, 'src/layouts/index.html'), 'utf8');
    const [, json] = layout.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)!;
    const data = JSON.parse(json);
    expect(data['@graph'].map((node: { '@type': string }) => node['@type'])).toEqual(['WebSite', 'SoftwareSourceCode', 'Person']);
  });
});
