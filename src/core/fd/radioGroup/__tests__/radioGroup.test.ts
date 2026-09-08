import { createElement } from 'lwc';
import FdRadioGroup from '../radioGroup';

describe('fd-radio-group', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('exposes role="radiogroup" so assistive tech announces the radios as a related set', () => {
    const element = createElement('fd-radio-group', { is: FdRadioGroup });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('[role="radiogroup"]')).not.toBeNull();
  });

  it('gives the group an accessible name via a visible label + aria-labelledby', () => {
    const element = createElement('fd-radio-group', { is: FdRadioGroup });
    element.label = 'Choose a plan';
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('.label')!;
    expect(label.textContent).toBe('Choose a plan');

    // LWC auto-scopes the literal "radio-group-label" id per instance
    // (e.g. "radio-group-label-3"), consistently for both the id and the
    // aria-labelledby that references it -- assert they match each other
    // rather than the unscoped literal.
    const group = element.shadowRoot!.querySelector('[role="radiogroup"]')!;
    expect(group.getAttribute('aria-labelledby')).toBe(label.id);
  });

  it('omits the visible label and aria-labelledby when no label is provided', () => {
    const element = createElement('fd-radio-group', { is: FdRadioGroup });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.label')).toBeNull();
    const group = element.shadowRoot!.querySelector('[role="radiogroup"]')!;
    expect(group.hasAttribute('aria-labelledby')).toBe(false);
  });

  it('supports ariaLabel for a non-visual accessible name', () => {
    const element = createElement('fd-radio-group', { is: FdRadioGroup });
    element.ariaLabel = 'Plan selection';
    document.body.appendChild(element);

    const group = element.shadowRoot!.querySelector('[role="radiogroup"]')!;
    expect(group.getAttribute('aria-label')).toBe('Plan selection');
  });
});
