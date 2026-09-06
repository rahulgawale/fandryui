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

  it('renders a child fd-label when a label is provided', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.label = 'Plan';
    element.options = OPTIONS;
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('fd-label');
    expect(label).not.toBeNull();
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
