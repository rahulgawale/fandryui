import { createElement } from 'lwc';
import FdToastViewport from '../toastViewport';

describe('fd-toast-viewport', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "bottom-right" placement class', () => {
    const element = createElement('fd-toast-viewport', { is: FdToastViewport });
    document.body.appendChild(element);

    const viewport = element.shadowRoot!.querySelector('div')!;
    expect(viewport.className).toBe('viewport viewport--bottom-right');
  });

  it.each(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const)(
    'applies the requested placement class for %s',
    (placement) => {
      const element = createElement('fd-toast-viewport', { is: FdToastViewport });
      element.placement = placement;
      document.body.appendChild(element);

      const viewport = element.shadowRoot!.querySelector('div')!;
      expect(viewport.className).toBe(`viewport viewport--${placement}`);
    }
  );

  it('applies no landmark role when no label is given', () => {
    const element = createElement('fd-toast-viewport', { is: FdToastViewport });
    document.body.appendChild(element);

    const viewport = element.shadowRoot!.querySelector('div')!;
    expect(viewport.hasAttribute('role')).toBe(false);
    expect(viewport.hasAttribute('aria-label')).toBe(false);
  });

  it('exposes a role="region" landmark when a label is given', () => {
    const element = createElement('fd-toast-viewport', { is: FdToastViewport });
    element.label = 'Notifications';
    document.body.appendChild(element);

    const viewport = element.shadowRoot!.querySelector('div')!;
    expect(viewport.getAttribute('role')).toBe('region');
    expect(viewport.getAttribute('aria-label')).toBe('Notifications');
  });

  it('exposes a default slot for toasts', () => {
    const element = createElement('fd-toast-viewport', { is: FdToastViewport });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });

  it('is not contained by default', () => {
    const element = createElement('fd-toast-viewport', { is: FdToastViewport });
    document.body.appendChild(element);

    const viewport = element.shadowRoot!.querySelector('div')!;
    expect(viewport.className).not.toContain('viewport--contained');
  });

  it('adds the "contained" class when scoped to a positioned ancestor', () => {
    const element = createElement('fd-toast-viewport', { is: FdToastViewport });
    element.contained = true;
    document.body.appendChild(element);

    const viewport = element.shadowRoot!.querySelector('div')!;
    expect(viewport.className).toBe('viewport viewport--bottom-right viewport--contained');
  });
});
