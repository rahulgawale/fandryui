import { api, track } from 'lwc';
import Base from 'fandry/base';
import type { FdProduct, FdProductSwatch } from 'fandry/productCardState';
import { discountPercent } from 'fandry/productCardState';

export type FdProductSort = 'featured' | 'price-asc' | 'price-desc' | 'discount' | 'name';

/** Everything the shopper has narrowed the catalog down to. */
export interface FdProductFilters {
  /** Matched against name, subtitle and category. */
  query: string;
  /** One `category`, or '' for all of them. */
  category: string;
  /** Swatch names. A product matches when it comes in any of them. */
  colors: string[];
  minPrice: number | null;
  maxPrice: number | null;
  /** Only products whose `compareAtPrice` is above their `price`. */
  onSale: boolean;
  sort: FdProductSort;
}

export interface FdProductCatalogOption {
  label: string;
  value: string;
}

export interface FdProductColorOption {
  name: string;
  style: string;
  selected: boolean;
  ariaPressed: 'true' | 'false';
  classes: string;
}

export interface FdProductCatalogItem {
  key: string;
  product: FdProduct;
  /** The swatch the card should show: the first one that matches the color filter, else ''. */
  swatch: string;
}

export const DEFAULT_FILTERS: FdProductFilters = {
  query: '',
  category: '',
  colors: [],
  minPrice: null,
  maxPrice: null,
  onSale: false,
  sort: 'featured'
};

const SORT_OPTIONS: FdProductCatalogOption[] = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: low to high', value: 'price-asc' },
  { label: 'Price: high to low', value: 'price-desc' },
  { label: 'Biggest discount', value: 'discount' },
  { label: 'Name', value: 'name' }
];

const MIN_PRICE_PROPS = { ariaLabel: 'Minimum price', min: 0, inputMode: 'decimal' };
const MAX_PRICE_PROPS = { ariaLabel: 'Maximum price', min: 0, inputMode: 'decimal' };

function toPrice(value: unknown): number | null {
  if (value === null || value === undefined || String(value).trim() === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

/**
 * FdProductCatalogState is the behavior behind the product catalog, with no
 * template of its own: the filters, which products pass them and in what
 * order. fandry-product-catalog is this class plus a filter panel and a grid
 * of fandry-product-card; a consumer who wants other markup extends this class
 * and renders `items` and the filter options their own way.
 *
 * The filter options come from the products themselves -- categories from
 * `category`, colors from the swatch names -- so there is no second
 * configuration to keep in step with the data. `products` is never changed:
 * filtering and sorting only decide what is shown.
 */
export default class FdProductCatalogState extends Base {
  @api products: FdProduct[] = [];

  /** An ISO 4217 code, passed on to every card. */
  @api currency = 'USD';

  /**
   * Set it to choose the filters the catalog starts with (or to change them
   * from outside); anything left out keeps its default. The catalog keeps it
   * current as the shopper filters and reports each change through
   * `filterchange`.
   */
  @api
  get filters(): FdProductFilters {
    return this.state;
  }
  set filters(value: Partial<FdProductFilters> | null) {
    this.state = { ...DEFAULT_FILTERS, ...value };
  }

  @track protected state: FdProductFilters = { ...DEFAULT_FILTERS };

  // ---- filter options, derived from the products

  get categoryOptions(): FdProductCatalogOption[] {
    const categories = [...new Set(this.products.map((product) => product.category).filter(Boolean))] as string[];
    return [
      { label: 'All categories', value: '' },
      ...categories.map((category) => ({ label: category, value: category }))
    ];
  }

  get colorOptions(): FdProductColorOption[] {
    const colors = new Map<string, string>();
    for (const product of this.products) {
      for (const swatch of product.swatches ?? []) {
        if (!colors.has(swatch.name)) colors.set(swatch.name, swatch.color);
      }
    }
    return [...colors].map(([name, color]) => {
      const selected = this.state.colors.includes(name);
      return {
        name,
        style: `--_fd-swatch-color: ${color}`,
        selected,
        ariaPressed: selected ? 'true' : 'false',
        classes: selected ? 'color color--selected' : 'color'
      };
    });
  }

  get hasColorOptions(): boolean {
    return this.colorOptions.length > 0;
  }

  get sortOptions(): FdProductCatalogOption[] {
    return SORT_OPTIONS;
  }

  // Strings, for the inputs and selects that show them.
  get query(): string {
    return this.state.query;
  }

  get category(): string {
    return this.state.category;
  }

  get minPrice(): string {
    return this.state.minPrice === null ? '' : String(this.state.minPrice);
  }

  get maxPrice(): string {
    return this.state.maxPrice === null ? '' : String(this.state.maxPrice);
  }

  /* The two price inputs share one visible "Price" label, so each carries its
     own name for a screen reader. */
  minPriceProps = MIN_PRICE_PROPS;
  maxPriceProps = MAX_PRICE_PROPS;

  get onSale(): boolean {
    return this.state.onSale;
  }

  get sort(): string {
    return this.state.sort;
  }

  // ---- results

  get items(): FdProductCatalogItem[] {
    const { colors } = this.state;
    return this.sortProducts(this.products.filter((product) => this.passesFilters(product))).map((product) => ({
      key: product.id,
      product,
      swatch: colors.length ? this.matchingSwatch(product)?.name ?? '' : ''
    }));
  }

  get resultCount(): number {
    return this.items.length;
  }

  get resultLabel(): string {
    const count = this.resultCount;
    return `${count} ${count === 1 ? 'product' : 'products'}`;
  }

  get hasResults(): boolean {
    return this.resultCount > 0;
  }

  get hasActiveFilters(): boolean {
    const { query, category, colors, minPrice, maxPrice, onSale } = this.state;
    return !!query.trim() || !!category || colors.length > 0 || minPrice !== null || maxPrice !== null || onSale;
  }

  /** Whether a product passes every filter. Override to add your own. */
  protected passesFilters(product: FdProduct): boolean {
    const { query, category, colors, minPrice, maxPrice, onSale } = this.state;
    const term = query.trim().toLowerCase();
    if (term) {
      const text = [product.name, product.subtitle, product.category].filter(Boolean).join(' ').toLowerCase();
      if (!text.includes(term)) return false;
    }
    if (category && product.category !== category) return false;
    if (colors.length && !this.matchingSwatch(product)) return false;
    if (minPrice !== null && product.price < minPrice) return false;
    if (maxPrice !== null && product.price > maxPrice) return false;
    if (onSale && discountPercent(product) === 0) return false;
    return true;
  }

  /* The order the products came in is "featured": the consumer already
     decided it. Every other sort keeps it as the tie-breaker. */
  protected sortProducts(products: FdProduct[]): FdProduct[] {
    const order = new Map(this.products.map((product, index) => [product, index]));
    const byOrder = (a: FdProduct, b: FdProduct) => order.get(a)! - order.get(b)!;
    const compare: Record<FdProductSort, (a: FdProduct, b: FdProduct) => number> = {
      featured: byOrder,
      'price-asc': (a, b) => a.price - b.price || byOrder(a, b),
      'price-desc': (a, b) => b.price - a.price || byOrder(a, b),
      discount: (a, b) => discountPercent(b) - discountPercent(a) || byOrder(a, b),
      name: (a, b) => a.name.localeCompare(b.name) || byOrder(a, b)
    };
    return [...products].sort(compare[this.state.sort] ?? byOrder);
  }

  private matchingSwatch(product: FdProduct): FdProductSwatch | undefined {
    return product.swatches?.find((swatch) => this.state.colors.includes(swatch.name));
  }

  // ---- changing the filters

  /** Merges `changes` into the filters and reports the result. */
  @api
  setFilters(changes: Partial<FdProductFilters>) {
    this.state = { ...this.state, ...changes };
    this.dispatchEvent(new CustomEvent('filterchange', { detail: { filters: this.state }, bubbles: true }));
  }

  /** Back to every product; the sort order stays. */
  @api
  clearFilters() {
    this.setFilters({ ...DEFAULT_FILTERS, sort: this.state.sort });
  }

  handleQueryInput(event: CustomEvent<string>) {
    event.stopPropagation();
    this.setFilters({ query: event.detail ?? '' });
  }

  handleCategoryChange(event: CustomEvent<string>) {
    event.stopPropagation();
    this.setFilters({ category: event.detail ?? '' });
  }

  handleColorClick(event: Event) {
    const name = (event.currentTarget as HTMLElement).dataset.name ?? '';
    const { colors } = this.state;
    this.setFilters({ colors: colors.includes(name) ? colors.filter((color) => color !== name) : [...colors, name] });
  }

  handleMinPriceInput(event: CustomEvent<string>) {
    event.stopPropagation();
    this.setFilters({ minPrice: toPrice(event.detail) });
  }

  handleMaxPriceInput(event: CustomEvent<string>) {
    event.stopPropagation();
    this.setFilters({ maxPrice: toPrice(event.detail) });
  }

  handleOnSaleChange(event: CustomEvent<boolean>) {
    event.stopPropagation();
    this.setFilters({ onSale: !!event.detail });
  }

  handleSortChange(event: CustomEvent<string>) {
    event.stopPropagation();
    this.setFilters({ sort: (event.detail as FdProductSort) || 'featured' });
  }

  handleClearFilters() {
    this.clearFilters();
  }

  /* A card's `addtocart` bubbles only as far as this component's shadow root,
     so it is sent on from here for the consumer, who never sees the cards. */
  handleAddToCart(event: CustomEvent) {
    event.stopPropagation();
    this.dispatchEvent(new CustomEvent('addtocart', { detail: event.detail, bubbles: true }));
  }
}
