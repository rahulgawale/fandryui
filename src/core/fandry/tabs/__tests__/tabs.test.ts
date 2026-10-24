import { createElement } from 'lwc';
import TabsHarness from './tabsHarness';

const flush = async () => {
  await Promise.resolve();
  await Promise.resolve();
};

async function setup(props: Record<string, unknown> = {}) {
  const harness = createElement('tabs-harness', { is: TabsHarness });
  Object.assign(harness, props);
  document.body.appendChild(harness);
  await flush();
  const root = harness.shadowRoot!;
  const tabs = Array.from(root.querySelectorAll('fandry-tab')) as HTMLElement[];
  const panels = Array.from(root.querySelectorAll('fandry-tab-panel')) as HTMLElement[];
  const button = (i: number) => tabs[i].shadowRoot!.querySelector('.tab') as HTMLButtonElement;
  const panel = (i: number) => panels[i].shadowRoot!.querySelector('.panel') as HTMLElement;
  const keydown = (i: number, key: string) =>
    button(i).dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, composed: true, cancelable: true }));
  return { harness, tabs, panels, button, panel, keydown };
}

describe('fandry-tabs', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('renders a tablist named by aria-label', async () => {
    const { harness } = await setup();
    const tabs = harness.shadowRoot!.querySelector('fandry-tabs')!;
    const list = tabs.shadowRoot!.querySelector('[role="tablist"]')!;
    expect(list.getAttribute('aria-label')).toBe('Account');
  });

  it('selects the first enabled tab when value is unset', async () => {
    const { button, panel } = await setup();
    expect(button(0).getAttribute('aria-selected')).toBe('true');
    expect(button(1).getAttribute('aria-selected')).toBe('false');
    expect(panel(0).hidden).toBe(false);
    expect(panel(1).hidden).toBe(true);
    expect(panel(2).hidden).toBe(true);
  });

  it('selects the tab that matches value', async () => {
    const { button, panel } = await setup({ value: 'c' });
    expect(button(2).getAttribute('aria-selected')).toBe('true');
    expect(panel(2).hidden).toBe(false);
    expect(panel(0).hidden).toBe(true);
  });

  it('keeps every panel in the DOM (hidden, not removed)', async () => {
    const { panels } = await setup();
    expect(panels).toHaveLength(3);
    expect(panels[1].textContent).toContain('Billing panel');
  });

  it('makes only the selected tab a Tab stop', async () => {
    const { button } = await setup({ value: 'c' });
    expect([0, 1, 2].map((i) => button(i).tabIndex)).toEqual([-1, -1, 0]);
  });

  it('selects a clicked tab and reports it with change', async () => {
    const { harness, button, panel } = await setup({ billingEnabled: true });
    button(1).click();
    await flush();
    expect(button(1).getAttribute('aria-selected')).toBe('true');
    expect(panel(1).hidden).toBe(false);
    expect(panel(0).hidden).toBe(true);
    expect((harness as any).changed).toEqual(['b']);
  });

  it('does not select a disabled tab', async () => {
    const { harness, button } = await setup();
    button(1).dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await flush();
    expect(button(0).getAttribute('aria-selected')).toBe('true');
    expect((harness as any).changed).toEqual([]);
  });

  it('does not report change when the selected tab is clicked again', async () => {
    const { harness, button } = await setup();
    button(0).click();
    await flush();
    expect((harness as any).changed).toEqual([]);
  });

  it('moves selection and focus with the arrow keys, skipping disabled tabs', async () => {
    const { harness, button, keydown } = await setup();
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    keydown(0, 'ArrowRight');
    await flush();
    expect(button(2).getAttribute('aria-selected')).toBe('true');
    expect(focusSpy.mock.instances).toContain(button(2));
    expect((harness as any).changed).toEqual(['c']);
    focusSpy.mockRestore();
  });

  it('wraps from the last tab to the first and from the first to the last', async () => {
    const { button, keydown } = await setup({ value: 'c' });
    keydown(2, 'ArrowRight');
    await flush();
    expect(button(0).getAttribute('aria-selected')).toBe('true');
    keydown(0, 'ArrowLeft');
    await flush();
    expect(button(2).getAttribute('aria-selected')).toBe('true');
  });

  it('jumps to the first and last enabled tab with Home and End', async () => {
    const { button, keydown } = await setup({ billingEnabled: true, value: 'b' });
    keydown(1, 'End');
    await flush();
    expect(button(2).getAttribute('aria-selected')).toBe('true');
    keydown(2, 'Home');
    await flush();
    expect(button(0).getAttribute('aria-selected')).toBe('true');
  });

  it('prevents the default of a key it handles and ignores other keys', async () => {
    const { button, keydown } = await setup();
    expect(keydown(0, 'ArrowRight')).toBe(false);
    await flush();
    expect(keydown(2, 'a')).toBe(true);
    expect(button(2).getAttribute('aria-selected')).toBe('true');
  });

  it('follows a tab that becomes disabled in place', async () => {
    const { harness, button, panel } = await setup({ billingEnabled: true, value: 'b' });
    expect(button(1).getAttribute('aria-selected')).toBe('true');
    (harness as any).billingEnabled = false;
    await flush();
    // Still the chosen value, so still shown; but it is no longer a keyboard target.
    expect(button(1).disabled).toBe(true);
    expect(panel(1).hidden).toBe(false);
  });

  it('gives a tab and its panel the selected state in their parts', async () => {
    const { tabs } = await setup();
    expect(tabs[0].shadowRoot!.querySelector('.tab')!.getAttribute('part')).toBe('base selected');
    expect(tabs[1].shadowRoot!.querySelector('.tab')!.getAttribute('part')).toBe('base disabled');
  });

  it('gives a panel the tabpanel role and an optional name', async () => {
    const { panel } = await setup();
    expect(panel(0).getAttribute('role')).toBe('tabpanel');
    expect(panel(0).hasAttribute('aria-label')).toBe(false);
  });

  it('fires a cancelable beforechange with the new and previous value, before change', async () => {
    const { harness, button } = await setup({ billingEnabled: true });
    button(1).click();
    await flush();
    expect((harness as any).beforeDetails).toEqual([{ value: 'b', previousValue: 'a' }]);
    expect((harness as any).changed).toEqual(['b']);
  });

  it('keeps the current tab, and fires no change, when beforechange is cancelled', async () => {
    const { harness, button, panel } = await setup({ billingEnabled: true, blockChange: true });
    button(1).click();
    await flush();
    expect(button(0).getAttribute('aria-selected')).toBe('true');
    expect(panel(0).hidden).toBe(false);
    expect((harness as any).changed).toEqual([]);
  });

  it('does not move focus on a cancelled arrow key', async () => {
    const { button, keydown } = await setup({ billingEnabled: true, blockChange: true });
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    keydown(0, 'ArrowRight');
    await flush();
    expect(focusSpy.mock.instances).not.toContain(button(1));
    expect(button(0).getAttribute('aria-selected')).toBe('true');
    focusSpy.mockRestore();
  });

  it('fires no beforechange for a disabled or already-selected tab', async () => {
    const { harness, button } = await setup();
    button(0).click();
    button(1).dispatchEvent(new MouseEvent('click', { bubbles: true, composed: true }));
    await flush();
    expect((harness as any).beforeDetails).toEqual([]);
  });
});
