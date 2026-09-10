import { createElement } from 'lwc';
import FdButton from '../button';

describe('fd-button', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with default variant and size classes', () => {
    const element = createElement('fd-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--default button--md');
  });

  it('reflects the disabled attribute onto the native button', () => {
    const element = createElement('fd-button', { is: FdButton });
    element.disabled = true;
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.disabled).toBe(true);
  });

  it('applies the requested variant and size classes', () => {
    const element = createElement('fd-button', { is: FdButton });
    element.variant = 'secondary';
    element.size = 'sm';
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--secondary button--sm');
  });

  it('applies the "lg" size class', () => {
    const element = createElement('fd-button', { is: FdButton });
    element.size = 'lg';
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--default button--lg');
  });

  it('defaults to a native button type of "button"', () => {
    const element = createElement('fd-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.type).toBe('button');
  });

  it('defaults tabIndex to 0 on the native button (Safari tab-order fix)', () => {
    const element = createElement('fd-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.tabIndex).toBe(0);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fd-button', { is: FdButton });
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.tabIndex).toBe(-1);
  });

  it('exposes an @api focus() that focuses the internal native button', () => {
    const element = createElement('fd-button', { is: FdButton });
    document.body.appendChild(element);

    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    (element as unknown as { focus(): void }).focus();

    const button = element.shadowRoot!.querySelector('button') as HTMLElement;
    expect(focusSpy.mock.instances).toContain(button);
    focusSpy.mockRestore();
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-button', { is: FdButton });
    element.disabled = false;
    element.elementProps = { disabled: true, type: 'submit', tabIndex: -1 };
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.disabled).toBe(false);
    expect(button.type).toBe('button');
    expect(button.tabIndex).toBe(-1);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
