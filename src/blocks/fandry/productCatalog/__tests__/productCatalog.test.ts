import { createElement } from 'lwc';
import ProductCatalog from '../productCatalog';
import CompactCard from './compactCard';
import CatalogSlotHarness from './catalogSlotHarness';

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
const ids = (el: HTMLElement) => $$(el, '.item > *').map((card) => card.product.id);

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
    expect($$(el, '.item > *').map((card) => card.swatch)).toEqual(['Navy', 'Navy']);
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
    expect(handler.mock.calls[0][0].detail.filters).toMatchObject({ category: 'Home', sort: '' });
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
    emit($(el, '.item > *'), 'addtocart', detail);

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

  describe('sorts', () => {
    const sortLabels = (el: HTMLElement) => $(el, 'fandry-select.sort').options.map((option: { label: string }) => option.label);

    it('takes a list of its own: built-ins by value, others with a label and compare', async () => {
      const el = mount({
        sorts: [
          { value: 'name' },
          { value: 'cheapest-first', label: 'Cheapest', compare: (a: { price: number }, b: { price: number }) => a.price - b.price }
        ]
      });
      await settle();

      expect(sortLabels(el)).toEqual(['Name', 'Cheapest']);
      // The first sort is the default.
      expect(ids(el)).toEqual(['tote', 'tee', 'mug', 'bottle', 'runner']);

      emit($(el, 'fandry-select.sort'), 'change', 'cheapest-first');
      await settle();
      expect(ids(el)).toEqual(['mug', 'tee', 'bottle', 'tote', 'runner']);
    });

    it('relabels the built-in sorts through messages', async () => {
      const el = mount({ messages: { sortLabels: { featured: 'En vedette' } } });
      await settle();

      expect(sortLabels(el)[0]).toBe('En vedette');
      expect(sortLabels(el)[1]).toBe('Price: low to high');
    });

    it('hides the sort for an empty list and keeps the products in order', async () => {
      const el = mount({ sorts: [] });
      await settle();

      expect($(el, 'fandry-select.sort')).toBeNull();
      expect(ids(el)).toEqual(['runner', 'mug', 'tee', 'bottle', 'tote']);
    });
  });

  describe('filters of your own', () => {
    const STOCKED = PRODUCTS.map((product) => ({ ...product, inStock: product.id !== 'mug' }));

    it('applies matchProduct after the built-in filters, with every filter key', async () => {
      const el = mount({
        products: STOCKED,
        matchProduct: (product: { inStock: boolean }, filters: { inStock?: boolean }) => !filters.inStock || product.inStock
      });
      await settle();

      el.setFilters({ inStock: true, category: 'Home' });
      await settle();
      expect(ids(el)).toEqual(['tote']);
      expect($(el, '.clear')).not.toBeNull();

      el.clearFilters();
      await settle();
      expect(el.filters.inStock).toBeUndefined();
      expect(ids(el)).toHaveLength(5);
      expect($(el, '.clear')).toBeNull();
    });

    it('adds a control in filters-end and replaces the empty state through slots', async () => {
      const harness = createElement('catalog-slot-harness', { is: CatalogSlotHarness }) as HTMLElement & Record<string, any>;
      harness.products = [PRODUCTS[1]];
      document.body.appendChild(harness);
      await settle();

      const catalog = harness.shadowRoot!.querySelector('fandry-product-catalog') as HTMLElement & Record<string, any>;
      const slot = (name: string) => catalog.shadowRoot!.querySelector(`slot[name="${name}"]`) as HTMLSlotElement;
      expect(slot('filters-end').assignedElements()[0].className).toBe('in-stock');

      (harness.shadowRoot!.querySelector('.in-stock') as HTMLElement).click();
      await settle();

      expect(catalog.filters.inStock).toBe(true);
      expect(slot('empty').assignedElements()[0].className).toBe('custom-empty');
    });
  });

  describe('cards', () => {
    it('renders cardComponent with cardProps, then each product and swatch', async () => {
      const el = mount({
        cardComponent: CompactCard,
        cardProps: { currency: 'EUR', messages: { addToCart: 'Ajouter' }, product: 'ignored' },
        filters: { colors: ['Navy'] }
      });
      await settle();

      const cards = $$(el, '.item > *');
      expect(cards.map((card) => card.shadowRoot.querySelector('.compact').textContent)).toEqual([
        expect.stringMatching(/^Stride Runner: €120\.00 \(Navy\) Ajouter$/),
        expect.stringMatching(/^Essential Tee: €28\.00 \(Navy\) Ajouter$/)
      ]);
    });
  });

  it('takes its words from messages', async () => {
    const el = mount({
      messages: { results: (count: number) => `${count} produits`, noResults: 'Rien', clearFilters: 'Effacer', category: 'Catégorie' }
    });
    await settle();

    expect($(el, '.count').textContent).toBe('5 produits');
    expect($(el, 'fandry-select.category').label).toBe('Catégorie');
    el.setFilters({ query: 'zzz' });
    await settle();
    expect($(el, '.empty-title').textContent).toBe('Rien');
    expect($(el, '.clear').textContent.trim()).toBe('Effacer');
  });

  it('exposes parts, with a selected color as option selected', async () => {
    const el = mount({ filters: { colors: ['Navy'] } });
    await settle();

    for (const part of ['base', 'filters', 'group', 'group-label', 'colors', 'swatch', 'price-range', 'results', 'toolbar', 'status', 'list', 'item']) {
      expect(el.shadowRoot!.querySelector(`[part~="${part}"]`)).not.toBeNull();
    }
    expect($(el, '.color[data-name="Navy"]').getAttribute('part')).toBe('option selected');
    expect($(el, '.color[data-name="Coral"]').getAttribute('part')).toBe('option');
    expect($(el, '.clear').getAttribute('exportparts')).toBe('base: clear-all');
  });
});
