import { createElement } from 'lwc';
import FdButton from '../button';

describe('fandry-button', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with default variant and size classes', () => {
    const element = createElement('fandry-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--default button--md');
  });

  it('reflects the disabled attribute onto the native button', () => {
    const element = createElement('fandry-button', { is: FdButton });
    element.disabled = true;
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.disabled).toBe(true);
  });

  it('applies the requested variant and size classes', () => {
    const element = createElement('fandry-button', { is: FdButton });
    element.variant = 'secondary';
    element.size = 'sm';
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--secondary button--sm');
  });

  it('applies the "lg" size class', () => {
    const element = createElement('fandry-button', { is: FdButton });
    element.size = 'lg';
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.className).toBe('button button--default button--lg');
  });

  it('defaults to a native button type of "button"', () => {
    const element = createElement('fandry-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.type).toBe('button');
  });

  it('defaults tabIndex to 0 on the native button (Safari tab-order fix)', () => {
    const element = createElement('fandry-button', { is: FdButton });
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.tabIndex).toBe(0);
  });

  it('lets a consumer override elementProps (e.g. tabIndex) via lwc:spread', () => {
    const element = createElement('fandry-button', { is: FdButton });
    element.elementProps = { tabIndex: -1 };
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.tabIndex).toBe(-1);
  });

  it('exposes an @api focus() that focuses the internal native button', () => {
    const element = createElement('fandry-button', { is: FdButton });
    document.body.appendChild(element);

    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    (element as unknown as { focus(): void }).focus();

    const button = element.shadowRoot!.querySelector('button') as HTMLElement;
    expect(focusSpy.mock.instances).toContain(button);
    focusSpy.mockRestore();
  });

  it('parts an aria-disabled button as disabled, and keeps it enabled', async () => {
    const element = createElement('fandry-button', { is: FdButton });
    element.elementProps = { tabIndex: 0, ariaDisabled: 'true' };
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    expect(button.disabled).toBe(false);
    expect(button.getAttribute('part')).toBe('base default disabled');

    element.elementProps = { tabIndex: 0, ariaDisabled: null };
    await Promise.resolve();
    expect(button.getAttribute('part')).toBe('base default');
  });

  it('stops the click of an aria-disabled button', () => {
    const element = createElement('fandry-button', { is: FdButton });
    element.elementProps = { tabIndex: 0, ariaDisabled: 'true' };
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('click', handler);
    element.shadowRoot!.querySelector('button')!.click();
    expect(handler).not.toHaveBeenCalled();

    element.elementProps = { tabIndex: 0 };
    element.shadowRoot!.querySelector('button')!.click();
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('stops an onclick passed through elementProps too while aria-disabled', async () => {
    const onclick = jest.fn();
    const element = createElement('fandry-button', { is: FdButton });
    element.elementProps = { tabIndex: 0, onclick };
    document.body.appendChild(element);

    const button = element.shadowRoot!.querySelector('button')!;
    button.click();
    expect(onclick).toHaveBeenCalledTimes(1);

    element.elementProps = { tabIndex: 0, onclick, ariaDisabled: 'true' };
    await Promise.resolve();
    button.click();
    expect(onclick).toHaveBeenCalledTimes(1);
  });

  describe('in a form', () => {
    // The form is acted on a task after the click, once every listener has seen it.
    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    const mountIn = (type: 'button' | 'submit' | 'reset', elementProps?: Record<string, unknown>) => {
      const form = document.createElement('form');
      const element = createElement('fandry-button', { is: FdButton });
      element.type = type;
      if (elementProps) {
        element.elementProps = elementProps;
      }
      form.appendChild(element);
      document.body.appendChild(form);

      // jsdom doesn't implement requestSubmit.
      form.requestSubmit = jest.fn();
      form.reset = jest.fn();
      return { form, button: element.shadowRoot!.querySelector('button')!, element };
    };

    it('submits the form it sits in when type="submit"', () => {
      const { form, button } = mountIn('submit');
      button.click();
      jest.runAllTimers();
      expect(form.requestSubmit).toHaveBeenCalledTimes(1);
      expect(form.reset).not.toHaveBeenCalled();
    });

    it('resets the form it sits in when type="reset"', () => {
      const { form, button } = mountIn('reset');
      button.click();
      jest.runAllTimers();
      expect(form.reset).toHaveBeenCalledTimes(1);
      expect(form.requestSubmit).not.toHaveBeenCalled();
    });

    it('leaves the form alone when type="button"', () => {
      const { form, button } = mountIn('button');
      button.click();
      jest.runAllTimers();
      expect(form.requestSubmit).not.toHaveBeenCalled();
      expect(form.reset).not.toHaveBeenCalled();
    });

    it('does not submit while aria-disabled', () => {
      const { form, button } = mountIn('submit', { tabIndex: 0, ariaDisabled: 'true' });
      button.click();
      jest.runAllTimers();
      expect(form.requestSubmit).not.toHaveBeenCalled();
    });

    it("does not submit when the page's own click handler cancels the click", () => {
      const { form, button, element } = mountIn('submit');
      element.addEventListener('click', (event: Event) => event.preventDefault());
      button.click();
      jest.runAllTimers();
      expect(form.requestSubmit).not.toHaveBeenCalled();
    });

    it('still submits when a handler stops the click from going further', () => {
      const { form, button, element } = mountIn('submit');
      element.addEventListener('click', (event: Event) => event.stopPropagation());
      button.click();
      jest.runAllTimers();
      expect(form.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it('does not submit a form the click handler took the button out of', () => {
      const { form, button, element } = mountIn('submit');
      element.addEventListener('click', () => document.body.appendChild(element));
      button.click();
      jest.runAllTimers();
      expect(form.requestSubmit).not.toHaveBeenCalled();
    });
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fandry-button', { is: FdButton });
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
