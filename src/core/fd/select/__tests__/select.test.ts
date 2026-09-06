import { createElement } from 'lwc';
import FdSelect from '../select';

const OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise', disabled: true }
];

describe('fd-select', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a native option for each entry in options', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const options = element.shadowRoot!.querySelectorAll('option');
    expect(options.length).toBe(OPTIONS.length);
    expect(options[1].value).toBe('pro');
    expect(options[1].textContent?.trim()).toBe('Pro');
  });

  it('reflects the disabled flag from an option entry', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const options = element.shadowRoot!.querySelectorAll('option');
    expect(options[2].disabled).toBe(true);
  });

  it('renders a disabled placeholder option when provided', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.placeholder = 'Choose a plan';
    document.body.appendChild(element);

    const firstOption = element.shadowRoot!.querySelector('option')!;
    expect(firstOption.value).toBe('');
    expect(firstOption.disabled).toBe(true);
    expect(firstOption.textContent).toBe('Choose a plan');
  });

  it('omits the placeholder option when none is provided', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const firstOption = element.shadowRoot!.querySelector('option')!;
    expect(firstOption.value).toBe('free');
  });

  it('renders the label text natively wrapping the select', () => {
    // The label must be a real <label> in the SAME shadow root as the
    // <select> -- a separate fd-label custom element can't associate
    // via for/id across a shadow boundary (see PR #23 review comment).
    const element = createElement('fd-select', { is: FdSelect });
    element.label = 'Plan';
    element.options = OPTIONS;
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('label.form-control')!;
    expect(label).not.toBeNull();
    expect(label.textContent).toContain('Plan');
    expect(label.querySelector('select')).not.toBeNull();
  });

  it('renders a required asterisk inside the label when required', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.label = 'Plan';
    element.required = true;
    element.options = OPTIONS;
    document.body.appendChild(element);

    const required = element.shadowRoot!.querySelector('.required');
    expect(required).not.toBeNull();
  });

  it('omits the label element entirely when no label is provided', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('.label');
    expect(label).toBeNull();
  });

  it('renders grouped options as native <optgroup> elements', () => {
    // A <slot> cannot be used here -- <select> can only ever contain
    // <option>/<optgroup> per the HTML content model (verified: a <slot>
    // child renders as literal escaped text, not an element). Grouping is
    // the compositional extension point that actually fits that constraint.
    const element = createElement('fd-select', { is: FdSelect });
    element.options = [{ label: 'Free', value: 'free' }];
    element.groups = [
      {
        label: 'Paid plans',
        options: [
          { label: 'Pro', value: 'pro' },
          { label: 'Enterprise', value: 'enterprise', disabled: true }
        ]
      }
    ];
    document.body.appendChild(element);

    const select = element.shadowRoot!.querySelector('select')!;
    const group = select.querySelector('optgroup')!;
    expect(group.label).toBe('Paid plans');

    const groupOptions = group.querySelectorAll('option');
    expect(groupOptions.length).toBe(2);
    expect(groupOptions[0].value).toBe('pro');
    expect(groupOptions[1].disabled).toBe(true);

    // Flat `options` still render as top-level <option> siblings, outside the group.
    const topLevelOption = select.querySelector(':scope > option') as HTMLOptionElement;
    expect(topLevelOption.value).toBe('free');
  });

  it('dispatches a semantic "change" event carrying the new value', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    const nativeSelect = element.shadowRoot!.querySelector('select')!;
    nativeSelect.value = 'pro';
    nativeSelect.dispatchEvent(new Event('change'));

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe('pro');
  });

  it('reflects disabled and required onto the native select', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.disabled = true;
    element.required = true;
    document.body.appendChild(element);

    const nativeSelect = element.shadowRoot!.querySelector('select')!;
    expect(nativeSelect.disabled).toBe(true);
    expect(nativeSelect.required).toBe(true);
  });

  it('pre-selects the native select to match the initial value', () => {
    // <select value={value}> is not a valid template binding (LWC1057) --
    // the initial selection has to be synced imperatively in renderedCallback.
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.value = 'pro';
    document.body.appendChild(element);

    const nativeSelect = element.shadowRoot!.querySelector('select')!;
    expect(nativeSelect.value).toBe('pro');
  });
});
