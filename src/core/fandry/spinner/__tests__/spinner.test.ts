import { createElement } from 'lwc';
import FdSpinner from '../spinner';
import SlotHarness from './slotHarness';

describe('fandry-spinner', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "md" size class', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('span')!;
    expect(spinner.className).toBe('spinner spinner--md');
  });

  it('applies the requested size class', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    element.size = 'lg';
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('span')!;
    expect(spinner.className).toBe('spinner spinner--lg');
  });

  it('exposes role="status" with a default accessible label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('[role="status"]')!;
    expect(spinner.getAttribute('aria-label')).toBe('Loading');
  });

  it('reflects a custom accessible label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    element.label = 'Saving changes';
    document.body.appendChild(element);

    const spinner = element.shadowRoot!.querySelector('[role="status"]')!;
    expect(spinner.getAttribute('aria-label')).toBe('Saving changes');
  });

  it('takes its default label from messages', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    element.messages = { label: 'Chargement' };
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('span')!.getAttribute('aria-label')).toBe('Chargement');

    element.label = 'Enregistrement';
    return Promise.resolve().then(() => {
      expect(element.shadowRoot!.querySelector('span')!.getAttribute('aria-label')).toBe('Enregistrement');
    });
  });

  it('takes aria-label, which wins over label', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    Object.assign(element, { label: 'From label', ariaLabel: 'From aria-label' });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('span')!.getAttribute('aria-label')).toBe('From aria-label');
  });

  it('hides the label and keeps the aria-label while there is no text', () => {
    const element = createElement('fandry-spinner', { is: FdSpinner });
    document.body.appendChild(element);

    const root = element.shadowRoot!;
    expect(root.querySelector('[part="label"]')!.hasAttribute('hidden')).toBe(true);
    expect(root.querySelector('[role="status"]')!.hasAttribute('aria-labelledby')).toBe(false);
  });

  describe('with text in the default slot', () => {
    const settle = async () => {
      for (let i = 0; i < 4; i++) await Promise.resolve();
    };
    const rootOf = async (name: string) => {
      const harness = createElement('slot-harness', { is: SlotHarness });
      document.body.appendChild(harness);
      await settle();
      return harness.shadowRoot!.querySelector(`.${name}`)!.shadowRoot!;
    };

    it('shows the text and names the status from it, not from label', async () => {
      const root = await rootOf('text');
      const label = root.querySelector('[part="label"]')!;
      const status = root.querySelector('[role="status"]')!;

      expect(label.hasAttribute('hidden')).toBe(false);
      expect(status.getAttribute('aria-labelledby')).toBe(label.id);
      expect(status.hasAttribute('aria-label')).toBe(false);
    });

    it('still lets aria-label name it', async () => {
      const status = (await rootOf('named')).querySelector('[role="status"]')!;

      expect(status.getAttribute('aria-label')).toBe('Saving');
      expect(status.hasAttribute('aria-labelledby')).toBe(false);
    });
  });
});
