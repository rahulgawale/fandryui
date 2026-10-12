import { api, track, LightningElement } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import type { FdProduct, FdProductSwatch } from 'fandry/productCardState';
import { discountPercent } from 'fandry/productCardState';

/**
 * Everything the shopper has narrowed the catalog down to. The built-in
 * filters are below; a key of your own (`brand`, `inStock`, ...) is kept,
 * reported and cleared like them, and `matchProduct` decides what it means.
 */
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
  /** A `value` from `sorts`, or '' for the first of them. */
  sort: string;
  [key: string]: unknown;
}

/** The sorts the catalog has built in. A sort with one of these values needs no `label` or `compare`. */
export type FdProductBuiltInSort = 'featured' | 'price-asc' | 'price-desc' | 'discount' | 'name';

/**
 * One entry in the Sort by list. `compare` orders two products like
 * Array.prototype.sort's; ties keep the order of `products`, and a sort
 * without one ("Featured") keeps that order outright.
 */
export interface FdProductSort {
  value: string;
  label?: string;
  compare?: (a: FdProduct, b: FdProduct) => number;
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
  part: string;
}

export interface FdProductCatalogItem {
  key: string;
  /** Spread onto the card: `cardProps`, then this item's `product` and `swatch`. */
  props: Record<string, unknown>;
}

/** Everything the catalog says; see `messages`. A card's own words go through `cardProps.messages`. */
export interface FdProductCatalogMessages {
  /** Names the filter panel. */
  filters: string;
  search: string;
  searchPlaceholder: string;
  category: string;
  allCategories: string;
  color: string;
  price: string;
  minPrice: string;
  maxPrice: string;
  /** Names the price inputs, which share the one visible "Price". */
  minPriceLabel: string;
  maxPriceLabel: string;
  onSale: string;
  clearFilters: string;
  sortBy: string;
  /** Labels for the built-in sorts. */
  sortLabels: Record<FdProductBuiltInSort, string>;
  /** Names the results. */
  products: string;
  results: (count: number) => string;
  noResults: string;
}

export const DEFAULT_PRODUCT_CATALOG_MESSAGES: FdProductCatalogMessages = {
  filters: 'Filters',
  search: 'Search',
  searchPlaceholder: 'Search products',
  category: 'Category',
  allCategories: 'All categories',
  color: 'Color',
  price: 'Price',
  minPrice: 'Min',
  maxPrice: 'Max',
  minPriceLabel: 'Minimum price',
  maxPriceLabel: 'Maximum price',
  onSale: 'On sale',
  clearFilters: 'Clear filters',
  sortBy: 'Sort by',
  sortLabels: {
    featured: 'Featured',
    'price-asc': 'Price: low to high',
    'price-desc': 'Price: high to low',
    discount: 'Biggest discount',
    name: 'Name'
  },
  products: 'Products',
  results: (count) => `${count} ${count === 1 ? 'product' : 'products'}`,
  noResults: 'No products match these filters.'
};

export const DEFAULT_FILTERS: FdProductFilters = {
  query: '',
  category: '',
  colors: [],
  minPrice: null,
  maxPrice: null,
  onSale: false,
  sort: ''
};

const BUILT_IN_COMPARE: Record<FdProductBuiltInSort, FdProductSort['compare']> = {
  featured: undefined,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  discount: (a, b) => discountPercent(b) - discountPercent(a),
  name: (a, b) => a.name.localeCompare(b.name)
};

/** The Sort by list the catalog starts with. Pass `sorts` to add, drop, reorder or relabel. */
export const DEFAULT_PRODUCT_SORTS: FdProductSort[] = [
  { value: 'featured' },
  { value: 'price-asc' },
  { value: 'price-desc' },
  { value: 'discount' },
  { value: 'name' }
];

/* What each built-in filter keeps, given its value. A filter is only
   applied while its value is set (see isUnset). */
const BUILT_IN_FILTERS: Record<string, (product: FdProduct, value: never) => boolean> = {
  query: (product, query: string) =>
    [product.name, product.subtitle, product.category]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  category: (product, category: string) => product.category === category,
  colors: (product, colors: string[]) => !!matchingSwatch(product, colors),
  minPrice: (product, minPrice: number) => product.price >= minPrice,
  maxPrice: (product, maxPrice: number) => product.price <= maxPrice,
  onSale: (product) => discountPercent(product) > 0
};

/** Whether a filter's value means "no filter": empty, blank, none chosen, off. */
function isUnset(value: unknown): boolean {
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'string') return value.trim() === '';
  return value === null || value === undefined || value === false;
}

function matchingSwatch(product: FdProduct, colors: string[]): FdProductSwatch | undefined {
  return product.swatches?.find((swatch) => colors.includes(swatch.name));
}

function toPrice(value: unknown): number | null {
  if (value === null || value === undefined || String(value).trim() === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

/**
 * FdProductCatalogState is the behavior behind the product catalog, with no
 * template of its own: the filters, which products pass them and in what
 * order. fandry-product-catalog is this class plus a filter panel and a grid
 * of cards; a consumer who wants other markup extends this class and renders
 * `items` and the filter options their own way.
 *
 * The filter options come from the products themselves -- categories from
 * `category`, colors from the swatch names -- so there is no second
 * configuration to keep in step with the data. `products` is never changed:
 * filtering and sorting only decide what is shown.
 */
export default class FdProductCatalogState extends Base {
  @api products: FdProduct[] = [];

  /**
   * The component each product is rendered with: fandry-product-card, or a
   * class of your own that extends fandry/productCardState with its own
   * template. It gets `cardProps`, then `product` and `swatch`.
   */
  @api cardComponent?: typeof LightningElement;

  /** Set on every card, e.g. `{ currency: 'EUR', messages: { addToCart: 'Ajouter' } }`. */
  @api cardProps: Record<string, unknown> = {};

  /** The Sort by list, first one the default. An empty list hides it. */
  @api sorts: FdProductSort[] = DEFAULT_PRODUCT_SORTS;

  /**
   * Your own filter rule, applied after the built-in ones: return false to
   * hide a product. It gets every filter, so a key you set with setFilters()
   * from a control of your own (`{ brand: 'Acme' }`) is read here.
   */
  @api matchProduct?: (product: FdProduct, filters: FdProductFilters) => boolean;

  /** Replaces any of DEFAULT_PRODUCT_CATALOG_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdProductCatalogMessages> = {};

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

  /** The card when `cardComponent` isn't set; fandry-product-catalog sets it to fandry-product-card. */
  protected defaultCardComponent?: typeof LightningElement;

  protected get text(): FdProductCatalogMessages {
    const messages = this.messages ?? {};
    return {
      ...DEFAULT_PRODUCT_CATALOG_MESSAGES,
      ...messages,
      sortLabels: { ...DEFAULT_PRODUCT_CATALOG_MESSAGES.sortLabels, ...messages.sortLabels }
    };
  }

  // ---- filter options, derived from the products

  get categoryOptions(): FdProductCatalogOption[] {
    const categories = [...new Set(this.products.map((product) => product.category).filter(Boolean))] as string[];
    return [
      { label: this.text.allCategories, value: '' },
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
        classes: selected ? 'color color--selected' : 'color',
        part: partList('option', { selected })
      };
    });
  }

  get hasColorOptions(): boolean {
    return this.colorOptions.length > 0;
  }

  get sortOptions(): FdProductCatalogOption[] {
    const labels = this.text.sortLabels as Record<string, string | undefined>;
    return this.sorts.map((sort) => ({ value: sort.value, label: sort.label ?? labels[sort.value] ?? sort.value }));
  }

  get hasSorts(): boolean {
    return this.sorts.length > 0;
  }

  /** The sort in use: the one `filters.sort` names, else the first. */
  get activeSort(): FdProductSort | undefined {
    return this.sorts.find((sort) => sort.value === this.state.sort) ?? this.sorts[0];
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

  get minPriceProps(): Record<string, unknown> {
    return { ariaLabel: this.text.minPriceLabel, min: 0, inputMode: 'decimal' };
  }

  get maxPriceProps(): Record<string, unknown> {
    return { ariaLabel: this.text.maxPriceLabel, min: 0, inputMode: 'decimal' };
  }

  get onSale(): boolean {
    return this.state.onSale;
  }

  get sort(): string {
    return this.activeSort?.value ?? '';
  }

  // ---- results

  get items(): FdProductCatalogItem[] {
    const { colors } = this.state;
    return this.sortProducts(this.products.filter((product) => this.passesFilters(product))).map((product) => ({
      key: product.id,
      props: {
        ...this.cardProps,
        product,
        swatch: colors.length ? matchingSwatch(product, colors)?.name ?? '' : ''
      }
    }));
  }

  get card(): typeof LightningElement | undefined {
    return this.cardComponent ?? this.defaultCardComponent;
  }

  get resultCount(): number {
    return this.items.length;
  }

  get resultLabel(): string {
    return this.text.results(this.resultCount);
  }

  get hasResults(): boolean {
    return this.resultCount > 0;
  }

  /** Whether any filter is set, your own keys included; the sort isn't a filter. */
  get hasActiveFilters(): boolean {
    return Object.entries(this.state).some(([key, value]) => key !== 'sort' && !isUnset(value));
  }

  /** Whether a product passes every filter that is set, then `matchProduct`. */
  protected passesFilters(product: FdProduct): boolean {
    for (const [key, value] of Object.entries(this.state)) {
      const keeps = BUILT_IN_FILTERS[key];
      if (keeps && !isUnset(value) && !keeps(product, value as never)) return false;
    }
    return this.matchProduct ? this.matchProduct(product, this.state) : true;
  }

  /* The order the products came in is "featured": the consumer already
     decided it. Every other sort keeps it as the tie-breaker. */
  protected sortProducts(products: FdProduct[]): FdProduct[] {
    const sort = this.activeSort;
    const compare = sort?.compare ?? BUILT_IN_COMPARE[sort?.value as FdProductBuiltInSort];
    if (!compare) return products;
    const order = new Map(this.products.map((product, index) => [product, index]));
    return [...products].sort((a, b) => compare(a, b) || order.get(a)! - order.get(b)!);
  }

  // ---- changing the filters

  /** Merges `changes` into the filters and reports the result. */
  @api
  setFilters(changes: Partial<FdProductFilters>) {
    this.state = { ...this.state, ...changes };
    this.reportFilters();
  }

  /** Back to every product, your own filter keys included; the sort order stays. */
  @api
  clearFilters() {
    this.state = { ...DEFAULT_FILTERS, sort: this.state.sort };
    this.reportFilters();
  }

  private reportFilters() {
    this.dispatchEvent(new CustomEvent('filterchange', { detail: { filters: this.state }, bubbles: true }));
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
    this.setFilters({ sort: event.detail ?? '' });
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
