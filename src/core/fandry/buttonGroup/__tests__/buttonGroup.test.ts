import { createElement } from 'lwc';
import ButtonGroupHarness from './buttonGroupHarness';

describe('fandry-button-group', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('renders a group named by aria-label around its buttons', async () => {
    const harness = createElement('button-group-harness', { is: ButtonGroupHarness });
    document.body.appendChild(harness);
    await Promise.resolve();
    const group = harness.shadowRoot!.querySelector('fandry-button-group')!;
    const base = group.shadowRoot!.querySelector('[role="group"]')!;
    expect(base.getAttribute('aria-label')).toBe('Actions');
    expect(base.getAttribute('part')).toBe('base');
    const slot = base.querySelector('slot') as HTMLSlotElement;
    expect(slot.assignedElements().map((el) => el.localName)).toEqual(['fandry-button', 'fandry-button']);
  });
});
