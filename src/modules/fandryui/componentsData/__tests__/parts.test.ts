import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { createElement } from 'lwc';
import FdInput from '../../../../core/fandry/input/input';
import { COMPONENTS, PART_DESCRIPTIONS } from '../componentsData';

const ROOT = resolve(__dirname, '../../../../..');
const SOURCE_DIRS = ['src/core/fandry', 'src/salesforce/fandry'];

// fandry-radio-group -> radioGroup
const folderOf = (tag: string) =>
  tag
    .replace(/^fandry-/, '')
    .replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());

/* The names a component's templates expose: its own `part`s plus the names
   it re-exports from a child with `exportparts`. A component can have more
   than one template (pagination has two). */
function templateParts(tag: string): string[] {
  const folder = SOURCE_DIRS.map((dir) => join(ROOT, dir, folderOf(tag))).find((dir) => existsSync(dir));
  if (!folder) throw new Error(`no source folder for ${tag}`);
  const names = new Set<string>();
  for (const file of readdirSync(folder).filter((name) => name.endsWith('.html'))) {
    const html = readFileSync(join(folder, file), 'utf8');
    for (const [, value] of html.matchAll(/\bpart="([^"]+)"/g)) {
      value.split(/\s+/).forEach((name) => names.add(name));
    }
    for (const [, value] of html.matchAll(/\bexportparts="([^"]+)"/g)) {
      value.split(',').forEach((item) => names.add(item.split(':').pop()!.trim()));
    }
  }
  return [...names].sort();
}

describe('component parts', () => {
  it.each(COMPONENTS.map((entry) => [entry.tag, entry]))('%s documents exactly the parts its templates have', (_tag, entry) => {
    expect([...(entry.parts ?? [])].sort()).toEqual(templateParts(entry.tag));
  });

  it('describes every part name that is used, and nothing else', () => {
    const used = new Set(COMPONENTS.flatMap((entry) => entry.parts ?? []));
    expect([...used].filter((name) => !PART_DESCRIPTIONS[name])).toEqual([]);
    expect(Object.keys(PART_DESCRIPTIONS).filter((name) => !used.has(name))).toEqual([]);
  });

  it('renders part and exportparts on the real elements', async () => {
    const element = createElement('fandry-input', { is: FdInput });
    Object.assign(element, { label: 'Email', required: true, helpText: 'Work address' });
    document.body.appendChild(element);
    await Promise.resolve();

    const root = element.shadowRoot!;
    expect(root.querySelector('[part~="input"]')!.tagName).toBe('INPUT');
    expect(root.querySelector('[part~="control"]')).not.toBeNull();
    expect(root.querySelector('[part~="help-text"]')!.textContent).toBe('Work address');
    /* `part` on a child component is taken as a property and never reaches
       the DOM, so a child's element is exposed through exportparts instead. */
    expect(root.querySelector('fandry-label')!.getAttribute('exportparts')).toBe('base: label, required');
    document.body.removeChild(element);
  });
});
