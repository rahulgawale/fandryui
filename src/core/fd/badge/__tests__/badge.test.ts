import { createElement } from 'lwc';
import FdBadge from '../badge';

describe('fd-badge', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default variant class', () => {
    const element = createElement('fd-badge', { is: FdBadge });
    document.body.appendChild(element);

    const badge = element.shadowRoot!.querySelector('span')!;
    expect(badge.className).toBe('badge badge--default');
  });

  it('applies the requested variant class', () => {
    const element = createElement('fd-badge', { is: FdBadge });
    element.variant = 'danger';
    document.body.appendChild(element);

    const badge = element.shadowRoot!.querySelector('span')!;
    expect(badge.className).toBe('badge badge--danger');
  });

  it('exposes a default slot for content', () => {
    const element = createElement('fd-badge', { is: FdBadge });
    document.body.appendChild(element);

    const slot = element.shadowRoot!.querySelector('slot');
    expect(slot).not.toBeNull();
  });
});
