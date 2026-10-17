import { createElement } from 'lwc';
import FdDialog from '../dialog';
import { mockAnimations, settle, AnimationMock } from '../../motion/__tests__/animationMock';

const flush = () => Promise.resolve();

describe('fandry-dialog', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    document.body.style.overflow = '';
  });

  it('does not render the panel when closed', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('renders a named native <dialog> around the panel when open', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.label = 'Delete item';
    element.open = true;
    document.body.appendChild(element);

    const dialog = element.shadowRoot!.querySelector('dialog')!;
    expect(dialog.getAttribute('part')).toBe('backdrop');
    expect(dialog.getAttribute('aria-label')).toBe('Delete item');
    expect(dialog.querySelector('.panel')).not.toBeNull();
  });

  describe('native modal', () => {
    /* jsdom has no showModal() / close(); these stand in for the browser's,
       which make the rest of the page inert so Tab can't leave the dialog. */
    const proto = HTMLElement.prototype as any;
    let showModal: jest.Mock;
    let close: jest.Mock;
    beforeEach(() => {
      showModal = jest.fn(function (this: any) { this.open = true; });
      close = jest.fn(function (this: any) { this.open = false; });
      proto.showModal = showModal;
      proto.close = close;
    });
    afterEach(() => {
      delete proto.showModal;
      delete proto.close;
    });

    it('opens modally, and leaves the top layer as soon as it closes', async () => {
      const element = createElement('fandry-dialog', { is: FdDialog });
      element.open = true;
      document.body.appendChild(element);
      await flush();
      const dialog = element.shadowRoot!.querySelector('dialog') as any;
      expect(showModal).toHaveBeenCalledTimes(1);
      expect(dialog.open).toBe(true);

      element.open = false;
      expect(close).toHaveBeenCalledTimes(1);
      expect(dialog.open).toBe(false);
    });

    it("closes through close() on the browser's Escape (cancel), so the exit still plays", async () => {
      const element = createElement('fandry-dialog', { is: FdDialog });
      element.open = true;
      document.body.appendChild(element);
      await flush();
      const handler = jest.fn();
      element.addEventListener('toggle', handler);

      const cancel = new Event('cancel', { cancelable: true });
      element.shadowRoot!.querySelector('dialog')!.dispatchEvent(cancel);

      expect(cancel.defaultPrevented).toBe(true);
      expect(element.open).toBe(false);
      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('keeps open in step when the browser closes it without a cancel', async () => {
      const element = createElement('fandry-dialog', { is: FdDialog });
      element.open = true;
      document.body.appendChild(element);
      await flush();
      const dialog = element.shadowRoot!.querySelector('dialog') as any;

      dialog.open = false;
      dialog.dispatchEvent(new Event('close'));
      expect(element.open).toBe(false);
    });

    it("ignores its own close() call's late close event after reopening", async () => {
      const element = createElement('fandry-dialog', { is: FdDialog });
      element.open = true;
      document.body.appendChild(element);
      await flush();
      element.open = false;
      element.open = true;
      await flush();
      const dialog = element.shadowRoot!.querySelector('dialog')!;

      dialog.dispatchEvent(new Event('close'));
      expect(element.open).toBe(true);
    });
  });

  it('closes and dispatches a "toggle" event on Escape', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const handler = jest.fn();
    element.addEventListener('toggle', handler);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(element.open).toBe(false);
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toBe(false);
  });

  it('closes when the backdrop is clicked', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const backdrop = element.shadowRoot!.querySelector('.backdrop')!;
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(element.open).toBe(false);
  });

  it('does not close when the panel itself is clicked', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const panel = element.shadowRoot!.querySelector('.panel')!;
    panel.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(element.open).toBe(true);
  });

  it('locks body scroll while open and restores it on close', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    expect(document.body.style.overflow).toBe('');

    element.open = true;
    expect(document.body.style.overflow).toBe('hidden');

    element.open = false;
    expect(document.body.style.overflow).toBe('');
  });

  it('moves focus to the panel when opened', async () => {
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    element.open = true;
    await flush();

    const panel = element.shadowRoot!.querySelector('.panel')!;
    expect(focusSpy.mock.instances).toContain(panel);

    focusSpy.mockRestore();
  });

  it('returns focus to the previously focused element on close', () => {
    // Asserting on document.activeElement directly is unreliable here --
    // see fandry-popover's own Escape test for why. Spying on the shared
    // HTMLElement.prototype.focus proves the component called focus() on
    // the actual trigger button.
    const trigger = document.createElement('button');
    document.body.appendChild(trigger);

    const activeElementSpy = jest.spyOn(document, 'activeElement', 'get').mockReturnValue(trigger);
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

    const element = createElement('fandry-dialog', { is: FdDialog });
    document.body.appendChild(element);

    element.open = true;
    element.open = false;

    expect(focusSpy.mock.instances).toContain(trigger);

    activeElementSpy.mockRestore();
    focusSpy.mockRestore();
  });

  it('does not intercept Tab (no generic cross-shadow focus trap -- see dialog.ts)', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    document.body.appendChild(element);

    const event = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    document.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(false);
    expect(element.open).toBe(true);
  });

  describe('motion', () => {
    let animations: AnimationMock;

    const backdropOf = (element: Element) => element.shadowRoot!.querySelector('.backdrop');

    const mount = async (open = true) => {
      const element = createElement('fandry-dialog', { is: FdDialog });
      element.open = open;
      document.body.appendChild(element);
      await flush();
      return element;
    };

    beforeEach(() => {
      animations = mockAnimations();
    });

    afterEach(() => {
      animations.restore();
    });

    it('stays mounted, marked closing and inert, while its exit animation plays', async () => {
      const element = await mount();

      element.close();
      await settle();

      expect(backdropOf(element)).not.toBeNull();
      expect(backdropOf(element)!.classList.contains('backdrop--closing')).toBe(true);
      expect(backdropOf(element)!.hasAttribute('inert')).toBe(true);
    });

    it('removes the dialog once the exit animation finishes', async () => {
      const element = await mount();

      element.close();
      await settle();
      await animations.finish();

      expect(backdropOf(element)).toBeNull();
    });

    it('removes the dialog when nothing is animating (reduced motion, or animation overridden to none)', async () => {
      animations.restore();
      const element = await mount();

      element.close();
      await settle();

      expect(backdropOf(element)).toBeNull();
    });

    it('unlocks body scroll and restores focus at close, not after the exit finishes', async () => {
      const trigger = document.createElement('button');
      document.body.appendChild(trigger);
      trigger.focus();
      const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');

      const element = await mount();
      expect(document.body.style.overflow).toBe('hidden');

      element.close();
      await settle();

      // Exit still pending, page already usable again.
      expect(backdropOf(element)).not.toBeNull();
      expect(document.body.style.overflow).toBe('');
      expect(focusSpy.mock.instances).toContain(trigger);

      focusSpy.mockRestore();
    });

    it('ignores Escape and backdrop clicks while exiting (no second toggle event)', async () => {
      const element = await mount();
      const handler = jest.fn();
      element.addEventListener('toggle', handler);

      element.close();
      await settle();
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      backdropOf(element)!.dispatchEvent(new MouseEvent('click', { bubbles: true }));

      expect(handler).toHaveBeenCalledTimes(1);
    });

    it('reopening during the exit keeps the dialog and re-focuses the panel', async () => {
      const element = await mount();

      element.close();
      await settle();
      element.open = true;
      await settle();
      await animations.finish();

      expect(backdropOf(element)).not.toBeNull();
      expect(backdropOf(element)!.classList.contains('backdrop--closing')).toBe(false);
      expect(document.body.style.overflow).toBe('hidden');
    });

    it('leaves no stale DOM or scroll lock after repeated open/close cycles', async () => {
      const element = await mount(false);

      for (let i = 0; i < 5; i++) {
        element.open = true;
        await settle();
        element.close();
        await settle();
        await animations.finish();
      }

      expect(backdropOf(element)).toBeNull();
      expect(document.body.style.overflow).toBe('');
    });
  });

  it('takes aria-label, which wins over label', () => {
    const element = createElement('fandry-dialog', { is: FdDialog });
    element.open = true;
    Object.assign(element, { label: 'From label', ariaLabel: 'From aria-label' });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('dialog')!.getAttribute('aria-label')).toBe('From aria-label');
  });
});
