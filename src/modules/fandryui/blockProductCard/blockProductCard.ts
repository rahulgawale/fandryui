import { LightningElement } from 'lwc';
import { PRODUCTS } from 'fandryui/productsData';
import type { FdProduct, FdProductSwatch } from 'fandry/productCardState';

const USAGE = `<fandry-product-card
  product={product}
  currency="USD"
  onchange={handleSwatchChange}
  onaddtocart={handleAddToCart}
></fandry-product-card>`;

const PRODUCT_CODE = `import { discountFlair } from 'fandry/productCardState';

const product = {
  id: 'stride-runner',
  name: 'Stride Runner',
  subtitle: 'Running shoes',
  price: 120,
  compareAtPrice: 160,          // shown struck through
  href: '/products/stride-runner',
  flairs: [
    discountFlair({ price: 120, compareAtPrice: 160 }),   // { label: '-25%', variant: 'danger' }
    { label: 'Sale', variant: 'danger' }
  ],
  swatches: [
    { name: 'Coral', color: '#e76f51', image: '/img/runner-coral.svg', hoverImage: '/img/runner-coral-alt.svg' },
    { name: 'Navy', color: '#27415e', image: '/img/runner-navy.svg', hoverImage: '/img/runner-navy-alt.svg' }
  ]
};`;

const SLOT_CODE = `<fandry-product-card product={product}>
  <div slot="actions">
    <fandry-button onclick={quickView}>Quick view</fandry-button>
    <fandry-button variant="secondary" onclick={addToCart}>Add</fandry-button>
  </div>
</fandry-product-card>

// Your buttons reach the card through its methods.
addToCart() {
  // fires addtocart with the selected swatch
  this.template.querySelector('fandry-product-card').addToCart();
}`;

const PRODUCT_PROPS = [
  { name: 'id', type: 'string', description: 'Required. Identifies the product in events and lists.' },
  { name: 'name', type: 'string', description: 'Required.' },
  { name: 'price', type: 'number', description: 'Required. Formatted with `currency` in the reader\'s locale.' },
  { name: 'compareAtPrice', type: 'number', description: 'The price before a discount. Shown struck through when it is higher than `price`.' },
  { name: 'subtitle', type: 'string', description: 'A line above the name: a brand, a collection, a material.' },
  { name: 'category', type: 'string', description: 'Not shown on the card; fandry-product-catalog filters on it.' },
  { name: 'image', type: 'string', description: 'The image URL. A selected swatch with its own `image` replaces it.' },
  { name: 'hoverImage', type: 'string', description: 'Crossfades in while the image is hovered or focused.' },
  { name: 'imageAlt', type: 'string', description: 'Defaults to the name. The selected swatch\'s name is added to it.' },
  { name: 'href', type: 'string', description: 'Makes the name a link.' },
  { name: 'flairs', type: '{ label, variant }[]', description: 'Labels over the image, top left: Sale, New, an offer, a discount. `variant` is a fandry-badge variant.' },
  { name: 'swatches', type: '{ name, color, image?, hoverImage? }[]', description: 'Colors to choose from. `color` is any CSS color; a swatch with images swaps them in when chosen.' }
];

const PROPS = [
  { name: 'product', type: 'product', default: 'null', description: 'What to show (see the product table below). Never changed by the card.' },
  { name: 'currency', type: 'string', default: "'USD'", description: 'An ISO 4217 code for `price` and `compareAtPrice`.' },
  { name: 'swatch', type: 'string', default: 'the first', description: 'The name of the selected swatch. Set it to choose where the card starts; the card keeps it current as the shopper picks another.' },
  { name: 'addToCart() · selectSwatch(name)', type: 'methods', default: '—', description: 'What the default button and the swatches call. Use them from your own buttons in the `actions` slot.' }
];

const EVENTS = [
  { name: 'change', detail: '{ product, swatch }', description: 'The shopper chose a swatch.' },
  { name: 'addtocart', detail: '{ product, swatch }', description: 'The Add to cart button (or `addToCart()`) was used. `swatch` is the selected one, if the product has any.' }
];

const SLOTS = [
  { name: 'actions', description: 'Replaces the Add to cart button that rises into view over the image on hover and focus. Always visible on touch screens.' }
];

const STYLE_HOOKS = [
  { name: '--fd-product-image-ratio', default: '4 / 5', description: 'The shape of the image area.' }
];

const HELPERS = [
  { name: 'discountFlair(product, variant?)', description: 'A `-25%` flair for a discounted product, or `undefined`. Flairs are never added for you; put this in `flairs` if you want one.' },
  { name: 'discountPercent(product)', description: 'How much cheaper `price` is than `compareAtPrice`, as a whole number.' },
  { name: 'formatPrice(amount, currency?)', description: 'The card\'s own price formatting, for use in your markup.' }
];

const BUILT_FROM = ['badge', 'button', 'link'];

const byId = (id: string) => PRODUCTS.find((product) => product.id === id)!;

let nextToastId = 1;

export default class BlockProductCard extends LightningElement {
  usageCode = USAGE;
  productCode = PRODUCT_CODE;
  slotCode = SLOT_CODE;
  productProps = PRODUCT_PROPS;
  props = PROPS;
  events = EVENTS;
  slots = SLOTS;
  styleHooks = STYLE_HOOKS;
  helpers = HELPERS;
  builtFrom = BUILT_FROM;

  installNpm = `npm install fandryui

<!-- nothing to copy: your bundler ships only what you use -->
<fandry-product-card></fandry-product-card>`;
  installSfdx = `npx fandry add product-card
# adds the block and everything it is built from
# to your package directory, as source you own`;

  showcase = [
    { key: 'swatches', caption: 'Swatches, a hover image, a discount and a Sale flair', product: byId('stride-runner') },
    { key: 'offer', caption: 'An offer flair', product: byId('everyday-mug') },
    { key: 'flairs', caption: 'A discount and a second flair', product: byId('studio-headphones') },
    { key: 'plain', caption: 'No swatches: one image and its hover image', product: byId('canvas-tote') }
  ];

  customProduct: FdProduct = byId('essential-tee');

  toasts: Array<{ id: number; message: string }> = [];
  lastSwatch = '';

  handleSwatchChange(event: CustomEvent<{ product: FdProduct; swatch: FdProductSwatch }>) {
    this.lastSwatch = `${event.detail.product.name}: ${event.detail.swatch.name}`;
  }

  handleAddToCart(event: CustomEvent<{ product: FdProduct; swatch?: FdProductSwatch }>) {
    const { product, swatch } = event.detail;
    this.toast(`Added ${product.name}${swatch ? ` (${swatch.name})` : ''} to the cart.`);
  }

  handleQuickView() {
    this.toast(`Quick view: ${this.customProduct.name}`);
  }

  handleCustomAdd() {
    (this.template.querySelector('.custom-card') as unknown as { addToCart(): void } | null)?.addToCart();
  }

  handleToastDismiss(event: Event) {
    const id = Number((event.currentTarget as HTMLElement).dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }

  private toast(message: string) {
    this.toasts = [...this.toasts, { id: nextToastId++, message }];
  }
}
