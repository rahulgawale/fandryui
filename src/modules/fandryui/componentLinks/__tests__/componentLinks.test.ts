import { readFileSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { COMPONENTS } from 'fandryui/componentsData';
import { COMPONENT_SLUGS, componentHref, componentHrefForTag } from 'fandryui/componentLinks';

const ROOT = resolve(__dirname, '../../../../..');

describe('componentLinks', () => {
  it('lists exactly the components that have a page', () => {
    expect([...COMPONENT_SLUGS].sort()).toEqual(COMPONENTS.map((component) => component.slug).sort());
  });

  it("links to a page by the canonical URL, the one in the page's <link rel=canonical> and the sitemap", () => {
    const sitemap = readFileSync(join(ROOT, 'src/assets/sitemap.xml'), 'utf8');
    for (const slug of COMPONENT_SLUGS) {
      expect(sitemap).toContain(`https://fandryui.forcetrails.com${componentHref(slug)}<`);
    }
  });

  it('finds the page of a fandry-* tag, and none for a block or an unknown name', () => {
    expect(componentHrefForTag('fandry-radio-group')).toBe('/components/radio-group/');
    expect(componentHrefForTag('fandry-data-table')).toBe('');
    expect(componentHrefForTag('button')).toBe('');
  });

  /* A block page's "Built from" names are component slugs, each a link. */
  it("names only components that have a page in each block page's Built from", () => {
    const dir = join(ROOT, 'src/modules/fandryui');
    const pages = readdirSync(dir).filter((name) => name.startsWith('block') && name !== 'blocksIndex');
    for (const page of pages) {
      const ts = readFileSync(join(dir, page, `${page}.ts`), 'utf8');
      const list = ts.match(/const BUILT_FROM = \[([^\]]*)\]/);
      expect(list).not.toBeNull();
      for (const [, name] of list![1].matchAll(/'([a-z-]+)'/g)) {
        expect(COMPONENT_SLUGS).toContain(name);
      }
    }
  });
});
