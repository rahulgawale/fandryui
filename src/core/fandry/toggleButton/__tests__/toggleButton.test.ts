import { createElement } from 'lwc';
import FdToggleButton from '../toggleButton';

const flush = () => Promise.resolve();

function setup(props: Record<string, unknown> = {}) {
  const element = createElement('fandry-toggle-button', { is: FdToggleButton }) as HTMLElement & Record<string, any>;
  Object.assign(element, props);
  document.body.appendChild(element);
  const button = () => element.shadowRoot!.querySelector('.toggle') as HTMLButtonElement;
  return { element, button };
}

describe('fandry-toggle-button', () => {
  afterEach(() => {
    while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
  });

  it('renders a native button with aria-pressed', async () => {
    const { button } = setup();
    await flush();
    expect(button().type).toBe('button');
    expect(button().getAttribute('aria-pressed')).toBe('false');
  });

  it('starts pressed when pressed is set', async () => {
    const { button } = setup({ pressed: true });
    await flush();
    expect(button().getAttribute('aria-pressed')).toBe('true');
  });

  it('flips pressed on click and reports it with change', async () => {
    const { element, button } = setup({ value: 'bold' });
    const onChange = jest.fn();
    element.addEventListener('change', onChange);
    await flush();
    button().click();
    await flush();
    expect(element.pressed).toBe(true);
    expect(button().getAttribute('aria-pressed')).toBe('true');
    expect(onChange.mock.calls[0][0].detail).toEqual({ pressed: true });
    button().click();
    await flush();
    expect(element.pressed).toBe(false);
    expect(onChange.mock.calls[1][0].detail).toEqual({ pressed: false });
  });

  it('does nothing when disabled', async () => {
    const { element, button } = setup({ disabled: true });
    const onChange = jest.fn();
    element.addEventListener('change', onChange);
    await flush();
    button().click();
    expect(onChange).not.toHaveBeenCalled();
    expect(element.pressed).toBe(false);
  });

  it('adds pressed and disabled to the base part', async () => {
    const { element, button } = setup({ pressed: true, disabled: true });
    await flush();
    expect(button().getAttribute('part')).toBe('base default pressed disabled');
    element.pressed = false;
    await flush();
    expect(button().getAttribute('part')).toBe('base default disabled');
  });

  it('defaults to the default variant and names the variant as a state', async () => {
    const { element, button } = setup();
    await flush();
    expect(button().classList.contains('toggle--default')).toBe(true);
    expect(button().getAttribute('part')).toBe('base default');
    element.variant = 'ghost';
    element.pressed = true;
    await flush();
    expect(button().classList.contains('toggle--ghost')).toBe(true);
    expect(button().getAttribute('part')).toBe('base ghost pressed');
  });

  it('focus() focuses the native button', async () => {
    const { element, button } = setup();
    await flush();
    element.focus();
    expect(element.shadowRoot!.activeElement).toBe(button());
  });

  it('applies elementProps but not reserved ones, and warns once', async () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { button } = setup({ elementProps: { tabIndex: -1, disabled: true } });
    await flush();
    expect(button().tabIndex).toBe(-1);
    expect(button().disabled).toBe(false);
    expect(warn).toHaveBeenCalledTimes(1);
    warn.mockRestore();
  });
});
