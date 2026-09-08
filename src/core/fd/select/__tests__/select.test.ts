import { createElement } from 'lwc';
import FdSelect from '../select';
import TestIconOption from './testIconOption';

const OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Pro', value: 'pro' },
  { label: 'Enterprise', value: 'enterprise', disabled: true }
];

const flush = () => Promise.resolve();

const openListbox = async (element: Element) => {
  const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
  trigger.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  await flush();
  return trigger;
};

describe('fd-select', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders a combobox trigger instead of a native select', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('select')).toBeNull();

    const trigger = element.shadowRoot!.querySelector('.trigger')!;
    expect(trigger).not.toBeNull();
    expect(trigger.getAttribute('role')).toBe('combobox');
    expect(trigger.getAttribute('aria-haspopup')).toBe('listbox');
  });

  it('does not render the listbox until the trigger is opened', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.listbox')).toBeNull();
  });

  it('opens the listbox when the trigger is clicked, rendering an option per entry', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const trigger = await openListbox(element);

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    const options = element.shadowRoot!.querySelectorAll('.listbox [role="option"]');
    expect(options.length).toBe(OPTIONS.length);
    expect(options[1].textContent?.trim()).toBe('Pro');
  });

  it('marks a disabled option entry as aria-disabled', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    await openListbox(element);

    const options = element.shadowRoot!.querySelectorAll('.listbox [role="option"]');
    expect(options[2].getAttribute('aria-disabled')).toBe('true');
  });

  it('renders a disabled placeholder option when provided', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.placeholder = 'Choose a plan';
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.trigger .value')?.textContent).toBe('Choose a plan');

    await openListbox(element);

    const firstOption = element.shadowRoot!.querySelector('.listbox [role="option"]')!;
    expect(firstOption.getAttribute('aria-disabled')).toBe('true');
    expect(firstOption.textContent).toBe('Choose a plan');
  });

  it('shows the first option label when no placeholder or value is set', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.trigger .value')?.textContent).toBe('');
  });

  it('associates the label with the trigger via for/id rather than wrapping it', () => {
    // The label must reference the trigger by id, not wrap it -- wrapping
    // interactive descendants in a <label> makes the browser synthesize a
    // second "click" on the labeled control (the trigger) whenever an
    // unrelated descendant (e.g. a listbox option) is clicked, which
    // reopened the dropdown immediately after a selection closed it.
    const element = createElement('fd-select', { is: FdSelect });
    element.label = 'Plan';
    element.options = OPTIONS;
    document.body.appendChild(element);

    const label = element.shadowRoot!.querySelector('label.label')!;
    const trigger = element.shadowRoot!.querySelector('.trigger')!;
    expect(label).not.toBeNull();
    expect(label.textContent).toContain('Plan');
    expect(label.getAttribute('for')).toBe(trigger.id);
    expect(label.contains(trigger)).toBe(false);
  });

  it('renders a required asterisk and aria-required when required', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.label = 'Plan';
    element.required = true;
    element.options = OPTIONS;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.required')).not.toBeNull();
    expect(element.shadowRoot!.querySelector('.trigger')!.getAttribute('aria-required')).toBe('true');
  });

  it('omits the label element entirely when no label is provided', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.label')).toBeNull();
  });

  it('renders grouped options under a role="group" container', async () => {
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

    await openListbox(element);

    const group = element.shadowRoot!.querySelector('[role="group"]')!;
    expect(group.getAttribute('aria-label')).toBe('Paid plans');

    const groupOptions = group.querySelectorAll('[role="option"]');
    expect(groupOptions.length).toBe(2);
    expect(groupOptions[0].textContent?.trim()).toBe('Pro');
    expect(groupOptions[1].getAttribute('aria-disabled')).toBe('true');

    const topLevelOption = element.shadowRoot!.querySelector('.listbox > [role="option"]')!;
    expect(topLevelOption.textContent?.trim()).toBe('Free');
  });

  it('selects an option on click, dispatches change, and closes the listbox', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    const trigger = await openListbox(element);
    const options = element.shadowRoot!.querySelectorAll('.listbox [role="option"]');
    options[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe('pro');
    expect((element as any).value).toBe('pro');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
    expect(element.shadowRoot!.querySelector('.trigger .value')?.textContent).toBe('Pro');
  });

  it('does not select a disabled option on click', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    await openListbox(element);
    const options = element.shadowRoot!.querySelectorAll('.listbox [role="option"]');
    options[2].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    expect(handler).not.toHaveBeenCalled();
    expect((element as any).value).toBe('');
  });

  it('does not dispatch change when re-selecting the already-selected value', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.value = 'pro';
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    await openListbox(element);
    const options = element.shadowRoot!.querySelectorAll('.listbox [role="option"]');
    options[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    expect(handler).not.toHaveBeenCalled();
  });

  it('reflects disabled onto the trigger button', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.disabled = true;
    document.body.appendChild(element);

    const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
    expect(trigger.disabled).toBe(true);
  });

  it('defaults tabIndex to 0 on the trigger (Safari tab-order fix)', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
    expect(trigger.tabIndex).toBe(0);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
    expect(trigger.tabIndex).toBe(-1);
  });

  it('does not let elementProps clobber a library-controlled prop or the combobox wiring, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.disabled = false;
    element.elementProps = { disabled: true, id: 'hijacked', role: 'button', tabIndex: -1 };
    document.body.appendChild(element);

    const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
    expect(trigger.disabled).toBe(false);
    // LWC auto-scopes the literal "trigger" id per instance (e.g.
    // "trigger-32"); asserting it still starts with "trigger" (not
    // "hijacked") is what actually proves elementProps didn't win.
    expect(trigger.id.startsWith('trigger')).toBe(true);
    expect(trigger.getAttribute('role')).toBe('combobox');
    expect(trigger.tabIndex).toBe(-1);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });

  it('opens via ArrowDown and highlights the currently selected option', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    element.value = 'pro';
    document.body.appendChild(element);

    const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await flush();

    expect(trigger.getAttribute('aria-expanded')).toBe('true');
    const activeOption = element.shadowRoot!.querySelector('.option--active')!;
    expect(activeOption.textContent?.trim()).toBe('Pro');
    // aria-activedescendant must resolve to the option's real `id` -- LWC
    // auto-scopes both, so this also guards against the two drifting apart.
    expect(trigger.getAttribute('aria-activedescendant')).toBe(activeOption.id);
  });

  it('commits the highlighted option on Enter and closes the listbox', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = OPTIONS;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('change', handler);

    const trigger = element.shadowRoot!.querySelector('.trigger') as HTMLButtonElement;
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await flush();
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await flush();
    trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    await flush();

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe('pro');
    expect(trigger.getAttribute('aria-expanded')).toBe('false');
  });

  it('renders a custom component for an option via lwc:is, passing componentProps through', async () => {
    const element = createElement('fd-select', { is: FdSelect });
    element.options = [
      { label: 'Free', value: 'free' },
      { label: 'Pro', value: 'pro', component: TestIconOption, componentProps: { icon: '💎', label: 'Pro' } }
    ];
    document.body.appendChild(element);

    const trigger = await openListbox(element);

    // The custom component renders inside its own shadow root -- a plain
    // descendant query from select's shadow tree can't cross that boundary.
    const proRow = Array.from(element.shadowRoot!.querySelectorAll('[role="option"]')).find(
      (o) => o.getAttribute('data-value') === 'pro'
    )!;
    const proHost = proRow.firstElementChild as Element & { shadowRoot: ShadowRoot };
    const custom = proHost.shadowRoot.querySelector('.icon-option')!;
    expect(custom).not.toBeNull();
    expect(custom.getAttribute('data-icon')).toBe('💎');
    expect(custom.textContent?.trim()).toBe('💎 Pro');

    // The plain option (no `component`) still falls back to its label text.
    const freeRow = Array.from(element.shadowRoot!.querySelectorAll('[role="option"]')).find(
      (o) => o.getAttribute('data-value') === 'free'
    )!;
    expect(freeRow.textContent?.trim()).toBe('Free');

    // Selecting the custom-rendered option mirrors its component into the
    // trigger too (not just the listbox row).
    proHost.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await flush();

    const triggerHost = trigger.querySelector('.value')!.firstElementChild as Element & { shadowRoot: ShadowRoot };
    const triggerCustom = triggerHost.shadowRoot.querySelector('.icon-option')!;
    expect(triggerCustom).not.toBeNull();
    expect(triggerCustom.getAttribute('data-icon')).toBe('💎');
  });
});
