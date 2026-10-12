import { readdirSync, readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { createElement } from 'lwc';
import FdLabel from '../label';
import LabelHarness from './labelHarness';

describe('fandry-label', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  /* A <label> in here could not reach a control outside this shadow root,
     and nested in a field's own <label> it stopped that label's click. */
  it('renders the text of a label, not a <label> element', () => {
    const element = createElement('fandry-label', { is: FdLabel });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('label')).toBeNull();
    expect(element.shadowRoot!.querySelector('[part="base"]')!.tagName).toBe('SPAN');
  });

  it('shows a required asterisk that a screen reader skips', async () => {
    const element = createElement('fandry-label', { is: FdLabel });
    document.body.appendChild(element);
    expect(element.shadowRoot!.querySelector('.required')).toBeNull();

    element.required = true;
    await Promise.resolve();
    const asterisk = element.shadowRoot!.querySelector('[part="required"]')!;
    expect(asterisk.textContent).toBe('*');
    expect(asterisk.getAttribute('aria-hidden')).toBe('true');
  });

  it("labels a control through the page's own <label>", () => {
    const harness = createElement('label-harness', { is: LabelHarness });
    document.body.appendChild(harness);

    const root = harness.shadowRoot!;
    const label = root.querySelector('label')!;
    const input = root.querySelector('input')!;
    expect(input.labels).toContain(label);
    expect(label.textContent).toBe('Quantity');
  });

  // The field's own <label> does the labelling; this is only what it shows.
  it("is the text of a field's label when slotted into it", async () => {
    const harness = createElement('label-harness', { is: LabelHarness });
    document.body.appendChild(harness);
    for (let i = 0; i < 4; i++) await Promise.resolve();

    const field = harness.shadowRoot!.querySelector('.field')!.shadowRoot!;
    const label = field.querySelector('label')!;
    expect(label.hasAttribute('hidden')).toBe(false);
    expect(field.querySelector('input')!.labels).toContain(label);
    // No <label> inside the field's <label>: a nested one takes its click.
    expect(harness.shadowRoot!.querySelector('fandry-label')!.shadowRoot!.querySelector('label')).toBeNull();
  });

  it('spreads arbitrary IDL properties (e.g. title) via elementProps', () => {
    const element = createElement('fandry-label', { is: FdLabel });
    element.elementProps = { title: 'Required field' };
    document.body.appendChild(element);

    const base = element.shadowRoot!.querySelector('[part="base"]') as HTMLElement;
    expect(base.title).toBe('Required field');
  });

  /* input and textarea once rendered fandry-label for their own label: its
     <label> was in another shadow root than their control and named
     nothing. A field renders a native <label> beside its control. */
  it('is not used by a component to label its own control', () => {
    const offenders: string[] = [];
    for (const layer of ['core', 'salesforce', 'blocks']) {
      const root = resolve(__dirname, '../../../..', layer, 'fandry');
      for (const name of existsSync(root) ? readdirSync(root) : []) {
        const template = join(root, name, `${name}.html`);
        if (existsSync(template) && readFileSync(template, 'utf8').includes('<fandry-label')) {
          offenders.push(`${layer}/${name}`);
        }
      }
    }

    expect(offenders).toEqual([]);
  });

  it('warns that html-for does nothing, once', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    for (const id of ['first', 'second']) {
      const element = createElement('fandry-label', { is: FdLabel });
      element.htmlFor = id;
      document.body.appendChild(element);
    }

    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain('<label for=');
    warnSpy.mockRestore();
  });
});
