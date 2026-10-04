import { createElement } from 'lwc';
import ProductCard from '../productCard';
import RoundedPriceCard from './roundedPriceCard';
import { discountFlair, discountPercent, formatPrice } from 'fandry/productCardState';

const RUNNER = {
  id: 'runner',
  name: 'Stride Runner',
  subtitle: 'Running shoes',
  price: 120,
  compareAtPrice: 160,
  href: '/runner',
  flairs: [{ label: 'Sale', variant: 'danger' }, { label: 'New' }],
  swatches: [
    { name: 'Coral', color: '#e76f51', image: '/coral.svg', hoverImage: '/coral-alt.svg' },
    { name: 'Navy', color: '#27415e', image: '/navy.svg', hoverImage: '/navy-alt.svg' },
    { name: 'Chalk', color: '#fff' }
  ]
};

const TOTE = { id: 'tote', name: 'Canvas Tote', price: 36, image: '/tote.svg', hoverImage: '/tote-alt.svg' };

const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

function mount(props: Record<string, unknown>) {
  const element = createElement('fandry-product-card', { is: ProductCard });
  Object.assign(element, props);
  document.body.appendChild(element);
  return element as HTMLElement & Record<string, any>;
}

const $ = (el: HTMLElement, selector: string) => el.shadowRoot!.querySelector(selector) as HTMLElement | null;
const $$ = (el: HTMLElement, selector: string) => Array.from(el.shadowRoot!.querySelectorAll(selector)) as HTMLElement[];

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
});

describe('product card helpers', () => {
  it('computes a whole discount percentage, and none without a higher compare-at price', () => {
    expect(discountPercent({ price: 120, compareAtPrice: 160 })).toBe(25);
    expect(discountPercent({ price: 29, compareAtPrice: 40 })).toBe(28);
    expect(discountPercent({ price: 120 })).toBe(0);
    expect(discountPercent({ price: 120, compareAtPrice: 100 })).toBe(0);
  });

  it('makes a discount flair only for a discounted product', () => {
    expect(discountFlair({ price: 120, compareAtPrice: 160 })).toEqual({ label: '-25%', variant: 'danger' });
    expect(discountFlair({ price: 120, compareAtPrice: 160 }, 'primary')).toEqual({ label: '-25%', variant: 'primary' });
    expect(discountFlair({ price: 120 })).toBeUndefined();
  });

  it('formats a price as currency', () => {
    expect(formatPrice(120, 'USD')).toContain('120');
    expect(formatPrice(120, 'EUR')).toContain('€');
  });
});

describe('fandry-product-card', () => {
  it('renders nothing without a product', async () => {
    const el = mount({});
    await settle();

    expect($(el, '.card')).toBeNull();
  });

  it('shows the name as a link, the subtitle and both prices', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    const link = $(el, '.name fandry-link') as any;
    expect(link.href).toBe('/runner');
    expect(link.textContent).toBe('Stride Runner');
    expect($(el, '.subtitle')!.textContent).toBe('Running shoes');
    expect($(el, '.current')!.textContent).toContain('120');
    expect($(el, '.compare')!.textContent).toContain('160');
  });

  it('shows the name as text without an href, and no compare-at price without a discount', async () => {
    const el = mount({ product: TOTE });
    await settle();

    expect($(el, '.name fandry-link')).toBeNull();
    expect($(el, '.name')!.textContent).toBe('Canvas Tote');
    expect($(el, '.compare')).toBeNull();
    expect($(el, '.swatches')).toBeNull();
  });

  it('renders each flair as a badge, defaulting its variant', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    const badges = $$(el, '.flairs fandry-badge') as any[];
    expect(badges.map((badge) => badge.textContent)).toEqual(['Sale', 'New']);
    expect(badges.map((badge) => badge.variant)).toEqual(['danger', 'default']);
  });

  it('starts on the first swatch and shows its images', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    expect($(el, '.image:not(.image--hover)')!.getAttribute('src')).toBe('/coral.svg');
    expect($(el, '.image--hover')!.getAttribute('src')).toBe('/coral-alt.svg');
    expect($(el, '.image:not(.image--hover)')!.getAttribute('alt')).toBe('Stride Runner, Coral');
    expect($$(el, '.swatch').map((swatch) => swatch.getAttribute('aria-pressed'))).toEqual(['true', 'false', 'false']);
    expect($(el, '.swatch-label')!.textContent).toBe('Coral');
  });

  it('starts on the swatch it is given', async () => {
    const el = mount({ product: RUNNER, swatch: 'Navy' });
    await settle();

    expect($(el, '.image:not(.image--hover)')!.getAttribute('src')).toBe('/navy.svg');
    expect(el.swatch).toBe('Navy');
  });

  it('switches images on a swatch click and reports it through change', async () => {
    const el = mount({ product: RUNNER });
    const handler = jest.fn();
    el.addEventListener('change', handler);
    await settle();

    $(el, '.swatch[data-name="Navy"]')!.click();
    await settle();

    expect($(el, '.image:not(.image--hover)')!.getAttribute('src')).toBe('/navy.svg');
    expect($(el, '.swatch[data-name="Navy"]')!.getAttribute('aria-pressed')).toBe('true');
    expect(el.swatch).toBe('Navy');
    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual({ product: RUNNER, swatch: RUNNER.swatches[1] });
  });

  it('does not report a click on the swatch that is already selected', async () => {
    const el = mount({ product: RUNNER });
    const handler = jest.fn();
    el.addEventListener('change', handler);
    await settle();

    $(el, '.swatch[data-name="Coral"]')!.click();
    await settle();

    expect(handler).not.toHaveBeenCalled();
  });

  it("keeps the product's images for a swatch that has none", async () => {
    const el = mount({ product: { ...RUNNER, image: '/product.svg', hoverImage: '/product-alt.svg' }, swatch: 'Chalk' });
    await settle();

    expect($(el, '.image:not(.image--hover)')!.getAttribute('src')).toBe('/product.svg');
    expect($(el, '.image--hover')!.getAttribute('src')).toBe('/product-alt.svg');
  });

  it('paints each swatch with its color', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    expect($(el, '.swatch[data-name="Navy"]')!.getAttribute('style')).toContain('#27415e');
  });

  it('shows no hover image when there is none', async () => {
    const el = mount({ product: { ...TOTE, hoverImage: undefined } });
    await settle();

    expect($(el, '.image--hover')).toBeNull();
    expect($(el, '.image')!.getAttribute('src')).toBe('/tote.svg');
  });

  it('fires addtocart with the selected swatch from the default button and from addToCart()', async () => {
    const el = mount({ product: RUNNER, swatch: 'Navy' });
    const handler = jest.fn();
    el.addEventListener('addtocart', handler);
    await settle();

    ($(el, 'fandry-button.add') as HTMLElement).click();
    el.addToCart();

    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler.mock.calls[0][0].detail).toEqual({ product: RUNNER, swatch: RUNNER.swatches[1] });
  });

  it('selects a swatch through selectSwatch() and ignores an unknown name', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    el.selectSwatch('Nope');
    el.selectSwatch('Navy');
    await settle();

    expect(el.swatch).toBe('Navy');
    expect($(el, '.image:not(.image--hover)')!.getAttribute('src')).toBe('/navy.svg');
  });

  it('has an actions slot whose fallback is the Add to cart button', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    expect($(el, 'slot[name="actions"] fandry-button.add')!.textContent).toBe('Add to cart');
  });

  it('reads a discounted price as one phrase and hides the two visible prices', async () => {
    const el = mount({ product: RUNNER });
    await settle();

    expect($(el, '.assistive')!.textContent).toMatch(/^\$120\.00, was \$160\.00$/);
    expect($(el, '.current')!.getAttribute('aria-hidden')).toBe('true');
    expect($(el, '.compare')!.getAttribute('aria-hidden')).toBe('true');

    el.product = TOTE;
    await settle();
    expect($(el, '.assistive')).toBeNull();
    expect($(el, '.current')!.hasAttribute('aria-hidden')).toBe(false);
  });

  it('takes its words from messages', async () => {
    const el = mount({
      product: RUNNER,
      messages: { addToCart: 'Ajouter', swatches: 'Couleurs', discountedPrice: (price: string, was: string) => `${price} au lieu de ${was}` }
    });
    await settle();

    expect($(el, 'fandry-button.add')!.textContent).toBe('Ajouter');
    expect($(el, '.swatches')!.getAttribute('aria-label')).toBe('Couleurs');
    expect($(el, '.assistive')!.textContent).toMatch(/au lieu de/);
  });

  it('formats both prices through formatPrice(), which a subclass can override', async () => {
    const el = createElement('rounded-price-card', { is: RoundedPriceCard }) as HTMLElement & Record<string, any>;
    Object.assign(el, { product: { ...RUNNER, price: 119.6 }, currency: 'EUR' });
    document.body.appendChild(el);
    await settle();

    expect($(el, '.current')!.textContent).toBe('120 EUR');
    expect($(el, '.compare')!.textContent).toBe('160 EUR');
  });

  it('exposes parts, with the selected swatch as option selected', async () => {
    const el = mount({ product: RUNNER, swatch: 'Navy' });
    await settle();

    for (const part of ['base', 'media', 'image', 'hover-image', 'flairs', 'actions', 'body', 'subtitle', 'title', 'price', 'current-price', 'compare-at-price', 'swatches', 'selection-label']) {
      expect(el.shadowRoot!.querySelector(`[part~="${part}"]`)).not.toBeNull();
    }
    expect($$(el, '.swatch').map((swatch) => swatch.getAttribute('part'))).toEqual(['option', 'option selected', 'option']);
    expect($(el, 'fandry-badge')!.getAttribute('exportparts')).toContain('base: flair');
    expect($(el, 'fandry-button.add')!.getAttribute('exportparts')).toBe('base: button');
  });
});
