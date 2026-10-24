import { createElement } from 'lwc';
import TabsNestedHarness from './tabsNestedHarness';

const flush = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

async function setup() {
  const harness = createElement('tabs-nested-harness', { is: TabsNestedHarness });
  document.body.appendChild(harness);
  await flush();
  const root = harness.shadowRoot!;
  const q = (selector: string) => root.querySelector(selector) as HTMLElement;
  return { harness, q };
}

const tabButton = (tab: Element) => tab.shadowRoot!.querySelector('.tab') as HTMLButtonElement;
const panelEl = (panel: Element) => panel.shadowRoot!.querySelector('.panel') as HTMLElement;

describe('fandry-tabs (more)', () => {
  beforeEach(() => jest.spyOn(console, 'warn').mockImplementation(() => undefined));

  afterEach(() => {
    jest.restoreAllMocks();
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  describe('nested tabs', () => {
    it('keeps each fandry-tabs to its own tabs and panels', async () => {
      const { q } = await setup();
      const innerTabs = Array.from(q('.inner').querySelectorAll('fandry-tab'));
      tabButton(innerTabs[1]).click();
      await flush();

      expect(tabButton(innerTabs[1]).getAttribute('aria-selected')).toBe('true');
      const outerTabs = Array.from(q('.outer').children).filter((el) => el.localName === 'fandry-tab');
      expect(outerTabs.map((tab) => tabButton(tab).getAttribute('aria-selected'))).toEqual(['true', 'false']);
    });

    it('ignores arrow keys from an inner tab', async () => {
      const { q } = await setup();
      const inner = q('.inner').querySelector('fandry-tab')!;
      tabButton(inner).dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true, composed: true }));
      await flush();
      const outerTabs = Array.from(q('.outer').children).filter((el) => el.localName === 'fandry-tab');
      expect(outerTabs.map((tab) => tabButton(tab).getAttribute('aria-selected'))).toEqual(['true', 'false']);
    });
  });

  describe('panel tab stop', () => {
    it('is a Tab stop when it has nothing focusable', async () => {
      const { q } = await setup();
      const innerPanel = q('.inner').querySelector('fandry-tab-panel')!;
      expect(panelEl(innerPanel).getAttribute('tabindex')).toBe('0');
    });

    it('is not a Tab stop when it holds a native control', async () => {
      const { q } = await setup();
      expect(panelEl(q('.panel-b')).hasAttribute('tabindex')).toBe(false);
    });

    it('is not a Tab stop when it holds a component with its own focus()', async () => {
      const { q } = await setup();
      expect(panelEl(q('.panel-p')).hasAttribute('tabindex')).toBe(false);
    });

    it('is not a Tab stop when focusable content is nested inside the page markup', async () => {
      const { q } = await setup();
      // The outer panel A holds a fandry-tabs, whose tabs define focus().
      expect(panelEl(q('.panel-a')).hasAttribute('tabindex')).toBe(false);
    });
  });

  describe('elementProps', () => {
    it('ignores keys a tab controls and warns', async () => {
      const { q } = await setup();
      const tab = q('.plain').querySelector('fandry-tab') as HTMLElement & { elementProps: Record<string, unknown> };
      tab.elementProps = { role: 'link', tabIndex: -1, 'data-x': '1' };
      await flush();
      const button = tabButton(tab);
      expect(button.getAttribute('role')).toBe('tab');
      expect(button.tabIndex).toBe(-1);
      expect(console.warn).toHaveBeenCalledWith(expect.stringContaining('fandry-tab: elementProps included "role"'));
    });
  });

  describe('focus()', () => {
    it('focuses the selected tab', async () => {
      const { q } = await setup();
      const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
      (q('.plain') as HTMLElement & { focus(): void }).focus();
      expect(focusSpy.mock.instances).toContain(tabButton(q('.plain').querySelector('fandry-tab')!));
    });
  });

  describe('a tab or panel without a value', () => {
    it('warns once that value is required', async () => {
      await setup();
      const warnings = (console.warn as jest.Mock).mock.calls.filter(([message]) => String(message).includes('needs a `value`'));
      expect(warnings).toHaveLength(1);
    });
  });
});
