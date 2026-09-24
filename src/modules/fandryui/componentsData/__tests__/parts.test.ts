import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { createElement } from 'lwc';
import FdInput from '../../../../core/fandry/input/input';
import FdCheckbox from '../../../../core/fandry/checkbox/checkbox';
import FdButton from '../../../../core/fandry/button/button';
import FdSelect from '../../../../core/fandry/select/select';
import { COMPONENTS, PART_DESCRIPTIONS, STATE_DESCRIPTIONS } from '../componentsData';

const ROOT = resolve(__dirname, '../../../../..');
const SOURCE_DIRS = ['src/core/fandry', 'src/salesforce/fandry'];

// fandry-radio-group -> radioGroup
const folderOf = (tag: string) =>
  tag
    .replace(/^fandry-/, '')
    .replace(/-([a-z])/g, (_match, letter: string) => letter.toUpperCase());

const STATE_CLASS_DIRS = ['src/core/fandry', 'src/blocks/fandry'];

/* The TS behind a component: its own files, plus the state class it
   extends (fandry/searchState builds combobox's options, fandry/tableState
   the table's rows), where some parts are built. */
function sources(folder: string): string[] {
  const own = readdirSync(folder)
    .filter((name) => name.endsWith('.ts'))
    .map((name) => readFileSync(join(folder, name), 'utf8'));
  const inherited = own.flatMap((ts) =>
    [...ts.matchAll(/from 'fandry\/(\w+State)'/g)].map(([, name]) => {
      const dir = STATE_CLASS_DIRS.map((root) => join(ROOT, root, name)).find((d) => existsSync(d))!;
      return readFileSync(join(dir, `${name}.ts`), 'utf8');
    })
  );
  return [...own, ...inherited];
}

/* What a component exposes. Parts: its templates' static `part`s, the names
   it re-exports with `exportparts`, and the names given to partList() in its
   TS. States: partList()'s state keys, where `[this.variant]` stands for
   every value of the `variant` prop. A component can have more than one
   template (pagination has two). */
function exposed(tag: string): { parts: string[]; states: string[] } {
  const folder = SOURCE_DIRS.map((dir) => join(ROOT, dir, folderOf(tag))).find((dir) => existsSync(dir));
  if (!folder) throw new Error(`no source folder for ${tag}`);
  const parts = new Set<string>();
  const states = new Set<string>();
  for (const file of readdirSync(folder).filter((name) => name.endsWith('.html'))) {
    const html = readFileSync(join(folder, file), 'utf8');
    for (const [, value] of html.matchAll(/\bpart="([^"]+)"/g)) {
      value.split(/\s+/).forEach((name) => parts.add(name));
    }
    for (const [, value] of html.matchAll(/\bexportparts="([^"]+)"/g)) {
      value.split(',').forEach((item) => parts.add(item.split(':').pop()!.trim()));
    }
  }
  for (const ts of sources(folder)) {
    for (const [, names, body] of ts.matchAll(/partList\('([^']+)',\s*\{([^}]*)\}/g)) {
      names.split(/\s+/).forEach((name) => parts.add(name));
      // `{ checked: this.checked, selected }` -- keys, shorthand ones included.
      for (const entry of body.split(',')) {
        const key = entry.trim().match(/^(\w+)/);
        if (key) states.add(key[1]);
      }
      if (body.includes('[this.variant]')) {
        const union = ts.match(/@api variant:([^=]+)=/);
        for (const [, value] of union![1].matchAll(/'([\w-]+)'/g)) states.add(value);
      }
    }
  }
  return { parts: [...parts].sort(), states: [...states].sort() };
}

describe('component parts', () => {
  it.each(COMPONENTS.map((entry) => [entry.tag, entry]))('%s documents exactly the parts and states it has', (_tag, entry) => {
    const { parts, states } = exposed(entry.tag);
    expect([...(entry.parts ?? [])].sort()).toEqual(parts);
    expect([...(entry.states ?? [])].sort()).toEqual(states);
  });

  it('describes every part name that is used, and nothing else', () => {
    const used = new Set(COMPONENTS.flatMap((entry) => entry.parts ?? []));
    expect([...used].filter((name) => !PART_DESCRIPTIONS[name])).toEqual([]);
    expect(Object.keys(PART_DESCRIPTIONS).filter((name) => !used.has(name))).toEqual([]);
  });

  it('describes every state that is used, and nothing else', () => {
    const used = new Set(COMPONENTS.flatMap((entry) => entry.states ?? []));
    expect([...used].filter((name) => !STATE_DESCRIPTIONS[name])).toEqual([]);
    expect(Object.keys(STATE_DESCRIPTIONS).filter((name) => !used.has(name))).toEqual([]);
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

/* The "Custom colors and parts" example on each page shows the demo's own
   template and theming CSS, so what a reader copies is what runs. */
describe('customize examples', () => {
  const DEMOS = join(ROOT, 'src/modules/fandryuidemos');
  // 'radio-theme' -> demoRadioTheme
  const componentOf = (demo: string) => 'demo' + demo.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join('');

  it.each(COMPONENTS.map((entry) => [entry.tag, entry]))('%s has one, and shows its real template and CSS', (_tag, entry) => {
    expect(entry.customize).toBeDefined();
    const { demo, code } = entry.customize!;
    const name = componentOf(demo);
    const [markup, css] = code.replace('<!-- template -->\n', '').split('\n\n/* css */\n');

    const html = readFileSync(join(DEMOS, name, `${name}.html`), 'utf8');
    const body = html
      .replace(/^<template>\n/, '')
      .replace(/\n<\/template>\n$/, '')
      .split('\n')
      .map((line) => line.replace(/^ {2}/, ''))
      .join('\n');
    expect(body).toBe(markup);
    expect(readFileSync(join(DEMOS, name, `${name}.css`), 'utf8')).toContain(css);
  });
});

/* States follow the component: the part attribute changes as the state does. */
describe('part states at runtime', () => {
  const flush = () => Promise.resolve();

  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('adds and removes checked on a checkbox control', async () => {
    const element = createElement('fandry-checkbox', { is: FdCheckbox }) as HTMLElement & { checked: boolean; disabled: boolean };
    document.body.appendChild(element);
    const control = () => element.shadowRoot!.querySelector('.box')!.getAttribute('part');

    expect(control()).toBe('control');
    element.checked = true;
    element.disabled = true;
    await flush();
    expect(control()).toBe('control checked disabled');
  });

  it("names a button's variant on its base", async () => {
    const element = createElement('fandry-button', { is: FdButton }) as HTMLElement & { variant: string };
    element.variant = 'secondary';
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('button')!.getAttribute('part')).toBe('base secondary');
  });

  it('marks the selected option of a select', async () => {
    const element = createElement('fandry-select', { is: FdSelect }) as unknown as HTMLElement;
    Object.assign(element, { options: [{ label: 'A', value: 'a' }, { label: 'B', value: 'b', disabled: true }], value: 'a' });
    document.body.appendChild(element);
    // The options render while the list is open.
    (element.shadowRoot!.querySelector('button.trigger') as HTMLElement).click();
    await flush();
    await flush();

    // Opening highlights the chosen option, so it is also `active`.
    const parts = Array.from(element.shadowRoot!.querySelectorAll('[role="option"]')).map((option) => option.getAttribute('part'));
    expect(parts).toEqual(['option selected active', 'option disabled']);
  });
});
