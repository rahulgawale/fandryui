import { createElement } from 'lwc';
import FdMediaKeys from '../mediaKeys';
import TranslatedKeysHarness from './translatedKeysHarness';

const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
});

const slot = (keys: Element, name: string) => keys.shadowRoot!.querySelector(`slot[name="${name}"]`) as HTMLSlotElement;
// What a slot shows: what is assigned to it, or its English fallback.
const shown = (keys: Element, name: string) => {
  const s = slot(keys, name);
  const assigned = s.assignedNodes();
  return (assigned.length ? assigned : Array.from(s.childNodes)).map((node) => node.textContent).join('').trim();
};

const SLOTS = ['title', 'previous-next', 'first-last', 'zoom', 'reset-zoom', 'pan', 'page', 'toggle', 'close',
  'key-home', 'key-end', 'key-page-up', 'key-page-down', 'key-escape'];

describe('fandry-media-keys', () => {
  it('has a slot for every text, each with English as its fallback', async () => {
    const keys = createElement('fandry-media-keys', { is: FdMediaKeys });
    document.body.appendChild(keys);
    await settle();
    for (const name of SLOTS) expect(shown(keys, name)).not.toBe('');
    expect(shown(keys, 'title')).toBe('Keyboard shortcuts');
    expect(shown(keys, 'key-escape')).toBe('Esc');
  });

  it('shows slotted text in place of the English, and English for the slots left empty', async () => {
    const harness = createElement('translated-keys-harness', { is: TranslatedKeysHarness });
    document.body.appendChild(harness);
    await settle();
    const keys = harness.shadowRoot!.querySelector('fandry-media-keys')!;
    expect(shown(keys, 'title')).toBe('Tastenkürzel');
    expect(shown(keys, 'close')).toBe('Schließen');
    expect(shown(keys, 'key-home')).toBe('Pos1');
    expect(shown(keys, 'zoom')).toBe('Zoom in or out');
  });
});
