import { createElement } from 'lwc';
import FdAvatar from '../avatar';

describe('fd-avatar', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('renders with the default "md" size class', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    document.body.appendChild(element);

    const avatar = element.shadowRoot!.querySelector('span.avatar')!;
    expect(avatar.className).toBe('avatar avatar--md');
  });

  it('applies the requested size class', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    element.size = 'lg';
    document.body.appendChild(element);

    const avatar = element.shadowRoot!.querySelector('span.avatar')!;
    expect(avatar.className).toBe('avatar avatar--lg');
  });

  it('renders an image with alt text when src is provided', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    element.src = 'https://example.com/photo.jpg';
    element.alt = 'Jane Doe';
    document.body.appendChild(element);

    const image = element.shadowRoot!.querySelector('img')!;
    expect(image.src).toBe('https://example.com/photo.jpg');
    expect(image.alt).toBe('Jane Doe');
  });

  it('renders initials instead of an image when no src is provided', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    element.initials = 'JD';
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('img')).toBeNull();
    const initials = element.shadowRoot!.querySelector('.initials')!;
    expect(initials.textContent).toBe('JD');
  });

  it('falls back to initials when the image fails to load', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    element.src = 'https://example.com/broken.jpg';
    element.initials = 'JD';
    document.body.appendChild(element);

    const image = element.shadowRoot!.querySelector('img')!;
    image.dispatchEvent(new Event('error'));

    return Promise.resolve().then(() => {
      expect(element.shadowRoot!.querySelector('img')).toBeNull();
      expect(element.shadowRoot!.querySelector('.initials')!.textContent).toBe('JD');
    });
  });

  it('renders neither image nor initials when nothing is provided', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    document.body.appendChild(element);

    expect(element.shadowRoot!.querySelector('img')).toBeNull();
    expect(element.shadowRoot!.querySelector('.initials')).toBeNull();
  });

  it('retries the image after a failure once src changes', () => {
    const element = createElement('fd-avatar', { is: FdAvatar }) as FdAvatar & HTMLElement;
    element.src = 'https://example.com/broken.jpg';
    element.initials = 'JD';
    document.body.appendChild(element);

    const image = element.shadowRoot!.querySelector('img')!;
    image.dispatchEvent(new Event('error'));

    return Promise.resolve().then(() => {
      expect(element.shadowRoot!.querySelector('img')).toBeNull();

      element.src = 'https://example.com/new-photo.jpg';

      return Promise.resolve().then(() => {
        expect(element.shadowRoot!.querySelector('img')).not.toBeNull();
      });
    });
  });

  it('spreads arbitrary IDL properties (e.g. loading) via elementProps', () => {
    const element = createElement('fd-avatar', { is: FdAvatar });
    element.src = 'https://example.com/photo.jpg';
    element.elementProps = { loading: 'lazy' };
    document.body.appendChild(element);

    const image = element.shadowRoot!.querySelector('img')! as HTMLImageElement;
    expect(image.loading).toBe('lazy');
  });

  it('does not let elementProps clobber a library-controlled prop, and warns once about it', () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const element = createElement('fd-avatar', { is: FdAvatar });
    element.src = 'https://example.com/photo.jpg';
    element.alt = 'Jane Doe';
    element.elementProps = { src: 'https://example.com/hijacked.jpg', alt: 'hijacked' };
    document.body.appendChild(element);

    const image = element.shadowRoot!.querySelector('img')! as HTMLImageElement;
    expect(image.src).toBe('https://example.com/photo.jpg');
    expect(image.alt).toBe('Jane Doe');
    expect(warnSpy).toHaveBeenCalledTimes(1);
    warnSpy.mockRestore();
  });
});
