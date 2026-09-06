import { createElement } from 'lwc';
import FdSkeleton from '../skeleton';

describe('fd-skeleton', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "text" variant class', () => {
    const element = createElement('fd-skeleton', { is: FdSkeleton });
    document.body.appendChild(element);

    const skeleton = element.shadowRoot!.querySelector('span')!;
    expect(skeleton.className).toBe('skeleton skeleton--text');
  });

  it('applies the requested variant class', () => {
    const element = createElement('fd-skeleton', { is: FdSkeleton });
    element.variant = 'circle';
    document.body.appendChild(element);

    const skeleton = element.shadowRoot!.querySelector('span')!;
    expect(skeleton.className).toBe('skeleton skeleton--circle');
  });

  it('is hidden from assistive technology', () => {
    // Purely decorative -- the loading state itself should be announced
    // elsewhere (e.g. an aria-busy container or fd-spinner), not here.
    const element = createElement('fd-skeleton', { is: FdSkeleton });
    document.body.appendChild(element);

    const skeleton = element.shadowRoot!.querySelector('span')!;
    expect(skeleton.getAttribute('aria-hidden')).toBe('true');
  });
});
