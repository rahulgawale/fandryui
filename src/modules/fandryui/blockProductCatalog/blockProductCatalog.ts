import { LightningElement } from 'lwc';
import { PRODUCTS } from 'fandryui/productsData';
import type { FdProduct, FdProductSwatch } from 'fandry/productCardState';
import type { FdProductFilters } from 'fandry/productCatalogState';

const USAGE = `<fandry-product-catalog
  products={products}
  card-props={cardProps}
  onfilterchange={handleFilterChange}
  onaddtocart={handleAddToCart}
></fandry-product-catalog>

// Set on every card: its currency, its words.
cardProps = { currency: 'EUR', messages: { addToCart: 'Ajouter au panier' } };`;

const FILTERS_CODE = `// Start on a filtered view -- anything left out keeps its default.
<fandry-product-catalog products={products} filters={initialFilters}></fandry-product-catalog>

initialFilters = { onSale: true, sort: 'discount' };

// Or change them later, from your own controls.
this.template.querySelector('fandry-product-catalog').setFilters({ category: 'Bags' });`;

const COMPOSE_CODE = `<!-- A filter of your own beside the built-in ones, and your own empty state -->
<fandry-product-catalog products={products} sorts={sorts} match-product={matchProduct}>
  <fandry-switch slot="filters-end" label="In stock" onchange={handleInStock}></fandry-switch>
  <p slot="empty">Nothing yet. <a href="/new">See what's new</a></p>
</fandry-product-catalog>

import { DEFAULT_PRODUCT_SORTS } from 'fandry/productCatalogState';

// Built-in sorts by value; your own with a label and compare.
sorts = [
  ...DEFAULT_PRODUCT_SORTS,
  { value: 'newest', label: 'Newest', compare: (a, b) => b.added - a.added }
];

// Runs after the built-in filters, with every filter key -- yours included.
matchProduct = (product, filters) => !filters.inStock || product.inStock;

handleInStock(event) {
  this.template.querySelector('fandry-product-catalog').setFilters({ inStock: event.detail });
}`;

const EXTEND_CODE = `// Your own card in the grid: the card's state, your template.
import FdProductCardState from 'fandry/productCardState';
export default class MyCard extends FdProductCardState {}

// in the page
import MyCard from 'c/myCard';
cardComponent = MyCard;

<fandry-product-catalog products={products} card-component={cardComponent}></fandry-product-catalog>

// Or your own catalog: the filtering and sorting, your template.
import FdProductCatalogState from 'fandry/productCatalogState';
export default class MyCatalog extends FdProductCatalogState {}`;

const PROPS = [
  { name: 'products', type: 'product[]', default: '[]', description: 'The products, in the order "Featured" shows them. Same shape as fandry-product-card\'s `product`. Never changed.' },
  { name: 'card-props', type: 'object', default: '{}', description: 'Set on every card: `currency`, `messages`, or any prop of your own card.' },
  { name: 'card-component', type: 'component', default: 'fandry-product-card', description: 'The card each product is rendered with: a class of yours that extends fandry/productCardState. It gets `card-props`, then `product` and `swatch`. Rendered with lwc:is, so on Salesforce the bundle needs the lightning__dynamicComponent capability, which `fandry add` writes.' },
  { name: 'sorts', type: '{ value, label?, compare? }[]', default: 'DEFAULT_PRODUCT_SORTS', description: 'The Sort by list, the first one the default. Built-in values (featured, price-asc, price-desc, discount, name) need no label or compare. Ties keep the order of `products`. An empty list hides it.' },
  { name: 'match-product', type: '(product, filters) => boolean', default: '—', description: 'Your own filter rule, applied after the built-in ones. It gets every filter key, so one you set with setFilters() is read here.' },
  { name: 'filters', type: 'filters', default: 'none set', description: 'Set it to choose where the catalog starts; anything left out keeps its default. The catalog keeps it current as the shopper filters.' },
  { name: 'messages', type: 'object', default: '{}', description: 'Everything the catalog says, e.g. to translate it: any key of DEFAULT_PRODUCT_CATALOG_MESSAGES, `results(count)` and `sortLabels` included. The cards\' words go in `card-props`.' },
  { name: 'setFilters(changes) · clearFilters()', type: 'methods', default: '—', description: 'Change the filters from your own controls. `clearFilters()` resets every key, yours too, and keeps the sort order.' }
];

const FILTER_KEYS = [
  { name: 'query', type: 'string', description: 'Matched against name, subtitle and category.' },
  { name: 'category', type: 'string', description: 'One `category`, or empty for all. The options are the categories in `products`.' },
  { name: 'colors', type: 'string[]', description: 'Swatch names. A product matches when it comes in any of them, and its card switches to that swatch.' },
  { name: 'minPrice · maxPrice', type: 'number | null', description: 'Bounds on `price`, inclusive.' },
  { name: 'onSale', type: 'boolean', description: 'Only products whose `compareAtPrice` is above their `price`.' },
  { name: 'sort', type: 'string', description: 'A `value` from `sorts`, or empty for the first.' },
  { name: 'anything else', type: 'any', description: 'Your own keys (`inStock`, `brand`): kept, reported and cleared like the rest, and read by `match-product`.' }
];

const SLOTS = [
  { name: 'filters', description: 'Replaces the built-in filters. Your controls call setFilters().' },
  { name: 'filters-end', description: 'Adds to whichever filters are showing, built-in or yours.' },
  { name: 'empty', description: 'Replaces the "No products match" message and its Clear filters button.' }
];

const PARTS = [
  { name: 'base', description: 'The outermost element.' },
  { name: 'filters', description: 'The filter panel.' },
  { name: 'group · group-label', description: 'The Color and Price groups and their headings.' },
  { name: 'colors', description: 'The color buttons\' wrapper.' },
  { name: 'option', description: 'One color button; `option selected` when it is on.' },
  { name: 'swatch', description: 'A color button\'s dot.' },
  { name: 'price-range', description: 'The two price inputs.' },
  { name: 'clear-all', description: 'The Clear filters button (a fandry-button\'s `base`).' },
  { name: 'results · toolbar · status', description: 'The results, the bar above them, and the product count.' },
  { name: 'list · item', description: 'The grid, and the cell around each card.' },
  { name: 'empty', description: 'What shows when nothing matches.' }
];

const EVENTS = [
  { name: 'filterchange', detail: '{ filters }', description: 'The shopper changed a filter or the sort. Keep it (in the URL, say) to bring them back to the same view.' },
  { name: 'addtocart', detail: '{ product, swatch }', description: 'A card\'s Add to cart was used, sent on from the card.' }
];

const STYLE_HOOKS = [
  { name: '--fd-catalog-card-min-width', default: '13rem', description: 'The narrowest a card gets before the grid drops a column.' },
  { name: '--fd-catalog-filters-width', default: '14rem', description: 'The filter panel\'s width beside the results. It moves above them when there is no room.' },
  { name: '--fd-catalog-results-min-width', default: '28rem', description: 'The narrowest the results get beside the filter panel before the panel moves above them.' },
  { name: '--fd-product-image-ratio', default: '4 / 5', description: 'The shape of each card\'s image area.' }
];

const BUILT_FROM = ['product-card', 'input', 'select', 'switch', 'button'];

export default class BlockProductCatalog extends LightningElement {
  usageCode = USAGE;
  filtersCode = FILTERS_CODE;
  composeCode = COMPOSE_CODE;
  extendCode = EXTEND_CODE;
  props = PROPS;
  filterKeys = FILTER_KEYS;
  slots = SLOTS;
  parts = PARTS;
  events = EVENTS;
  styleHooks = STYLE_HOOKS;
  builtFrom = BUILT_FROM;

  installNpm = `npm install fandryui

<!-- nothing to copy: your bundler ships only what you use -->
<fandry-product-catalog></fandry-product-catalog>`;
  installSfdx = `npx fandry add product-catalog
# adds the block, product-card and everything they
# are built from to your package directory`;

  products: FdProduct[] = PRODUCTS;

  cart: Array<{ key: string; label: string }> = [];
  filtersJson = '';

  get cartLabel(): string {
    const count = this.cart.length;
    return count === 0 ? 'Your cart is empty' : `${count} ${count === 1 ? 'item' : 'items'} in your cart`;
  }

  get hasCart(): boolean {
    return this.cart.length > 0;
  }

  handleFilterChange(event: CustomEvent<{ filters: FdProductFilters }>) {
    this.filtersJson = JSON.stringify(event.detail.filters);
  }

  handleAddToCart(event: CustomEvent<{ product: FdProduct; swatch?: FdProductSwatch }>) {
    const { product, swatch } = event.detail;
    const label = swatch ? `${product.name}, ${swatch.name}` : product.name;
    this.cart = [...this.cart, { key: String(this.cart.length), label }];
  }

  handleEmptyCart() {
    this.cart = [];
  }
}
