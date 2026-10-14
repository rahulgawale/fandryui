import * as lwc from 'lwc';
import { COMPONENTS } from 'fandryui/componentsData';

// In the ssr project `lwc` is LWC's server engine, which its browser typings don't describe.
const { renderComponent } = lwc as unknown as {
  renderComponent(tag: string, Ctor: unknown, props: Record<string, unknown>): Promise<string> | string;
};

/* Every component renders on a server, with no document or window, as under
   LWR SSR: anything that needs the browser waits for it. Overlays render
   open, since opening is where most of them reach for the page. */

const columns = [{ accessorKey: 'name', header: 'Name' }];
const rows = [{ id: '1', name: 'Row one' }];
const options = [{ label: 'A', value: 'a' }];

const PROPS: Record<string, Record<string, unknown>> = {
  'fandry-popover': { open: true },
  'fandry-dialog': { open: true, title: 'Dialog' },
  'fandry-command': { open: true, items: [{ label: 'Go', value: 'go' }] },
  'fandry-loading-overlay': { open: true },
  'fandry-toast': { title: 'Saved', duration: 5000 },
  'fandry-tooltip': { content: 'Tip' },
  'fandry-select': { options, value: 'a' },
  'fandry-combobox': { options },
  'fandry-table': { columns, data: rows },
  'fandry-data-table': { columns, data: rows },
  'fandry-form': { fields: [{ name: 'email', label: 'Email', type: 'email' }], values: { email: 'a@b.co' } },
  'fandry-link': { href: '/docs/', elementProps: { ariaCurrent: 'page' } },
  'fandry-form-field': { field: { name: 'email', label: 'Email', type: 'email' } }
};

// fandry-sidebar-item -> fandry/sidebarItem
const moduleOf = (tag: string) => `fandry/${tag.slice('fandry-'.length).replace(/-(\w)/g, (_, c: string) => c.toUpperCase())}`;

// Blocks aren't in COMPONENTS; they render primitives, so they're checked too.
const TAGS = [...COMPONENTS.map((component) => component.tag), 'fandry-data-table', 'fandry-form', 'fandry-form-field'];

it.each(TAGS.map((tag) => [tag]))('%s renders on a server', async (tag) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Ctor = require(moduleOf(tag)).default;
  const html = await renderComponent(tag, Ctor, PROPS[tag] ?? {});
  expect(html).toMatch(new RegExp(`^<${tag}[ >]`));
});
