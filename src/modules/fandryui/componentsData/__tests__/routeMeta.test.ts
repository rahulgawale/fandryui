import { readFileSync } from 'fs';
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
  properties?: { title?: string; description?: string; path?: string };
}

const config = JSON.parse(readFileSync(resolve(ROOT, 'lwr.config.json'), 'utf8')) as { routes: Route[] };
const routes = config.routes;
const plain = (text: string) => text.replace(/`/g, '');

describe('route metadata', () => {
  it.each(routes.map((route) => [route.path, route]))('%s has a title, description and canonical path', (_, route) => {
    const { title, description, path } = (route as Route).properties ?? {};
    expect(title).toBeTruthy();
    expect(title!.length).toBeLessThanOrEqual(60);
    expect(description).toBeTruthy();
    expect(description).not.toMatch(/`/);
    // The live site redirects /x to /x/, so the canonical URL ends in a slash.
    expect(path).toBe((route as Route).path === '/' ? '/' : `${(route as Route).path}/`);
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
      expect(route?.properties).toEqual({
        title: `${component.name} component for LWC | Fandry UI`,
        description: `${plain(component.description)} A Fandry UI component for Salesforce LWC, with a live example, props, parts and code.`,
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
