import { LightningElement } from 'lwc';
import { PRODUCTS } from 'fandryui/productsData';
import type { FdProduct, FdProductSwatch } from 'fandry/productCardState';
import type { FdProductFilters } from 'fandry/productCatalogState';

const USAGE = `<fandry-product-catalog
  products={products}
  currency="USD"
  onfilterchange={handleFilterChange}
  onaddtocart={handleAddToCart}
></fandry-product-catalog>`;

const FILTERS_CODE = `// Start on a filtered view -- anything left out keeps its default.
<fandry-product-catalog products={products} filters={initialFilters}></fandry-product-catalog>

initialFilters = { onSale: true, sort: 'discount' };

// Or change them later, from your own controls.
this.template.querySelector('fandry-product-catalog').setFilters({ category: 'Bags' });`;

const EXTEND_CODE = `import FdProductCatalogState from 'fandry/productCatalogState';

// Your own template renders \`items\` and the filter options; the filtering
// stays here. Override passesFilters() to add a rule of your own.
export default class MyCatalog extends FdProductCatalogState {
  passesFilters(product) {
    return super.passesFilters(product) && product.inStock !== false;
  }
}`;

const PROPS = [
  { name: 'products', type: 'product[]', default: '[]', description: 'The products, in the order "Featured" shows them. Same shape as fandry-product-card\'s `product`. Never changed.' },
  { name: 'currency', type: 'string', default: "'USD'", description: 'An ISO 4217 code, passed on to every card.' },
  { name: 'filters', type: 'filters', default: 'none set', description: 'Set it to choose where the catalog starts; anything left out keeps its default. The catalog keeps it current as the shopper filters.' },
  { name: 'setFilters(changes) · clearFilters()', type: 'methods', default: '—', description: 'Change the filters from your own controls. `clearFilters()` keeps the sort order.' }
];

const FILTER_KEYS = [
  { name: 'query', type: 'string', description: 'Matched against name, subtitle and category.' },
  { name: 'category', type: 'string', description: 'One `category`, or empty for all. The options are the categories in `products`.' },
  { name: 'colors', type: 'string[]', description: 'Swatch names. A product matches when it comes in any of them, and its card switches to that swatch.' },
  { name: 'minPrice · maxPrice', type: 'number | null', description: 'Bounds on `price`, inclusive.' },
  { name: 'onSale', type: 'boolean', description: 'Only products whose `compareAtPrice` is above their `price`.' },
  { name: 'sort', type: "'featured' · 'price-asc' · 'price-desc' · 'discount' · 'name'", description: '`featured` is the order of `products`; every other sort falls back to it on a tie.' }
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
  extendCode = EXTEND_CODE;
  props = PROPS;
  filterKeys = FILTER_KEYS;
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
