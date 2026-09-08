import { createElement } from 'lwc';
import FdRadio from '../radio';

describe('fd-radio', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('defaults tabIndex to 0 on the native input (Safari tab-order fix)', () => {
    const element = createElement('fd-radio', { is: FdRadio });
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.tabIndex).toBe(0);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fd-radio', { is: FdRadio });
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.tabIndex).toBe(-1);
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-radio', { is: FdRadio });
    element.checked = true;
    element.elementProps = { checked: false, disabled: true, tabIndex: -1 };
    document.body.appendChild(element);

    const input = element.shadowRoot!.querySelector('input')! as HTMLInputElement;
    expect(input.checked).toBe(true);
    expect(input.disabled).toBe(false);
    expect(input.tabIndex).toBe(-1);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
