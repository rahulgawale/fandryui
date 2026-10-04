import { createElement } from 'lwc';
import ProductCatalog from '../productCatalog';

const PRODUCTS = [
  {
    id: 'runner',
    name: 'Stride Runner',
    subtitle: 'Running shoes',
    category: 'Shoes',
    price: 120,
    compareAtPrice: 160,
    swatches: [
      { name: 'Coral', color: '#e76f51' },
      { name: 'Navy', color: '#27415e' }
    ]
  },
  {
    id: 'mug',
    name: 'Everyday Mug',
    category: 'Home',
    price: 18,
    swatches: [{ name: 'Cream', color: '#efe6d5' }]
  },
  {
    id: 'tee',
    name: 'Essential Tee',
    subtitle: 'Organic cotton',
    category: 'Apparel',
    price: 28,
    swatches: [
      { name: 'White', color: '#f7f7f5' },
      { name: 'Navy', color: '#27415e' }
    ]
  },
  { id: 'bottle', name: 'Hydro Bottle', category: 'Outdoor', price: 29, compareAtPrice: 40 },
  { id: 'tote', name: 'Canvas Tote', category: 'Home', price: 36 }
];

const settle = async () => {
  for (let i = 0; i < 4; i++) await Promise.resolve();
};

function mount(props: Record<string, unknown> = {}) {
  const element = createElement('fandry-product-catalog', { is: ProductCatalog });
  Object.assign(element, { products: PRODUCTS, ...props });
  document.body.appendChild(element);
  return element as HTMLElement & Record<string, any>;
}

const $ = (el: HTMLElement, selector: string) => el.shadowRoot!.querySelector(selector) as any;
const $$ = (el: HTMLElement, selector: string) => Array.from(el.shadowRoot!.querySelectorAll(selector)) as any[];
const ids = (el: HTMLElement) => $$(el, 'fandry-product-card').map((card) => card.product.id);

function emit(target: HTMLElement, type: string, detail: unknown) {
  target.dispatchEvent(new CustomEvent(type, { detail, bubbles: true }));
}

afterEach(() => {
  while (document.body.firstChild) document.body.removeChild(document.body.firstChild);
});

describe('fandry-product-catalog', () => {
  it('shows every product, in order, with a count', async () => {
    const el = mount();
    await settle();

    expect(ids(el)).toEqual(['runner', 'mug', 'tee', 'bottle', 'tote']);
    expect($(el, '.count').textContent).toBe('5 products');
  });

  it('derives the category and color options from the products', async () => {
    const el = mount();
    await settle();

    expect($(el, 'fandry-select').options.map((option: { value: string }) => option.value)).toEqual([
      '',
      'Shoes',
      'Home',
      'Apparel',
      'Outdoor'
    ]);
    expect($$(el, '.color').map((button) => button.dataset.name)).toEqual(['Coral', 'Navy', 'Cream', 'White']);
  });

  it('searches name, subtitle and category', async () => {
    const el = mount();
    await settle();

    emit($(el, 'fandry-input'), 'input', 'cotton');
    await settle();
    expect(ids(el)).toEqual(['tee']);

    emit($(el, 'fandry-input'), 'input', 'HOME');
    await settle();
    expect(ids(el)).toEqual(['mug', 'tote']);
  });

  it('filters by category', async () => {
    const el = mount();
    await settle();

    emit($(el, 'fandry-select'), 'change', 'Home');
    await settle();

    expect(ids(el)).toEqual(['mug', 'tote']);
  });

  it('filters by color and switches each card to the matching swatch', async () => {
    const el = mount();
    await settle();

    $(el, '.color[data-name="Navy"]').click();
    await settle();

    expect(ids(el)).toEqual(['runner', 'tee']);
    expect($$(el, 'fandry-product-card').map((card) => card.swatch)).toEqual(['Navy', 'Navy']);
    expect($(el, '.color[data-name="Navy"]').getAttribute('aria-pressed')).toBe('true');

    $(el, '.color[data-name="Cream"]').click();
    await settle();
    expect(ids(el)).toEqual(['runner', 'mug', 'tee']);

    $(el, '.color[data-name="Navy"]').click();
    await settle();
    expect(ids(el)).toEqual(['mug']);
  });

  it('filters by a price range, inclusive, ignoring an empty bound', async () => {
    const el = mount();
    await settle();
    const [min, max] = $$(el, '.price-range fandry-input');

    emit(min, 'input', '28');
    emit(max, 'input', '36');
    await settle();
    expect(ids(el)).toEqual(['tee', 'bottle', 'tote']);

    emit(min, 'input', '');
    await settle();
    expect(ids(el)).toEqual(['mug', 'tee', 'bottle', 'tote']);
  });

  it('filters to products on sale', async () => {
    const el = mount();
    await settle();

    emit($(el, 'fandry-switch'), 'change', true);
    await settle();

    expect(ids(el)).toEqual(['runner', 'bottle']);
  });

  it.each([
    ['price-asc', ['mug', 'tee', 'bottle', 'tote', 'runner']],
    ['price-desc', ['runner', 'tote', 'bottle', 'tee', 'mug']],
    ['discount', ['bottle', 'runner', 'mug', 'tee', 'tote']],
    ['name', ['tote', 'tee', 'mug', 'bottle', 'runner']],
    ['featured', ['runner', 'mug', 'tee', 'bottle', 'tote']]
  ])('sorts by %s', async (sort, expected) => {
    const el = mount();
    await settle();

    emit($(el, 'fandry-select.sort'), 'change', sort);
    await settle();

    expect(ids(el)).toEqual(expected);
  });

  it('reports every change through filterchange', async () => {
    const el = mount();
    const handler = jest.fn();
    el.addEventListener('filterchange', handler);
    await settle();

    emit($(el, 'fandry-select'), 'change', 'Home');

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail.filters).toMatchObject({ category: 'Home', sort: 'featured' });
    expect(el.filters.category).toBe('Home');
  });

  it('starts from the filters it is given, defaulting the rest', async () => {
    const el = mount({ filters: { onSale: true, sort: 'discount' } });
    await settle();

    expect(ids(el)).toEqual(['bottle', 'runner']);
    expect(el.filters).toMatchObject({ query: '', colors: [], onSale: true, sort: 'discount' });
  });

  it('shows an empty state, and clears the filters but keeps the sort', async () => {
    const el = mount({ filters: { sort: 'name' } });
    await settle();

    expect($(el, '.clear')).toBeNull();
    emit($(el, 'fandry-input'), 'input', 'zzz');
    await settle();

    expect(ids(el)).toEqual([]);
    expect($(el, '.count').textContent).toBe('0 products');
    expect($(el, '.empty')).not.toBeNull();
    expect($(el, '.clear')).not.toBeNull();

    $(el, '.empty fandry-button').click();
    await settle();

    expect(ids(el)).toEqual(['tote', 'tee', 'mug', 'bottle', 'runner']);
    expect(el.filters.query).toBe('');
    expect(el.filters.sort).toBe('name');
  });

  it('changes the filters through setFilters()', async () => {
    const el = mount();
    await settle();

    el.setFilters({ category: 'Shoes' });
    await settle();

    expect(ids(el)).toEqual(['runner']);
    expect($(el, '.count').textContent).toBe('1 product');
  });

  it("sends on a card's addtocart", async () => {
    const el = mount();
    const handler = jest.fn();
    el.addEventListener('addtocart', handler);
    await settle();

    const detail = { product: PRODUCTS[0], swatch: PRODUCTS[0].swatches![0] };
    emit($(el, 'fandry-product-card'), 'addtocart', detail);

    expect(handler).toHaveBeenCalledTimes(1);
    expect(handler.mock.calls[0][0].detail).toEqual(detail);
  });

  it('never changes the products it is given', async () => {
    const before = JSON.stringify(PRODUCTS);
    const el = mount();
    await settle();

    emit($(el, 'fandry-select.sort'), 'change', 'price-desc');
    $(el, '.color[data-name="Navy"]').click();
    await settle();

    expect(JSON.stringify(PRODUCTS)).toBe(before);
  });
});
