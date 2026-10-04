import { api, track } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';
import type { FdBadgeVariant } from 'fandry/badge';

/** A label over the product image: "Sale", "New", "Buy 2, get 1", "-25%". Rendered as a fandry-badge. */
export interface FdProductFlair {
  label: string;
  /** A fandry-badge variant. Defaults to `default`. */
  variant?: FdBadgeVariant;
}

/** One color (or finish, or pattern) of a product, with the images that show it. */
export interface FdProductSwatch {
  /** Names the swatch to the shopper and identifies it: unique within a product. */
  name: string;
  /** Any CSS color. Paints the swatch button. */
  color: string;
  /** Replaces the product's `image` while this swatch is selected. */
  image?: string;
  hoverImage?: string;
}

/**
 * A product, as plain data. Only `id`, `name` and `price` are required.
 *
 *   { id: 'runner', name: 'Stride Runner', price: 120, compareAtPrice: 160,
 *     image: '/img/runner.svg', hoverImage: '/img/runner-alt.svg',
 *     flairs: [{ label: 'Sale', variant: 'danger' }],
 *     swatches: [{ name: 'Coral', color: '#e76f51', image: '...' }] }
 */
export interface FdProduct {
  id: string;
  name: string;
  price: number;
  /** The price before a discount. Shown struck through when it is higher than `price`. */
  compareAtPrice?: number;
  /** A line above the name: a brand, a collection, a category. */
  subtitle?: string;
  category?: string;
  image?: string;
  /** Shown in place of `image` while the card is hovered or focused. */
  hoverImage?: string;
  /** Defaults to the product's name. */
  imageAlt?: string;
  /** Makes the name a link. */
  href?: string;
  flairs?: FdProductFlair[];
  swatches?: FdProductSwatch[];
}

export interface FdProductRenderSwatch {
  name: string;
  style: string;
  selected: boolean;
  ariaPressed: 'true' | 'false';
  classes: string;
  part: string;
}

export interface FdProductRenderFlair {
  key: string;
  label: string;
  variant: FdBadgeVariant;
}

/**
 * Everything the card says; see `messages`. All of it, the button's words
 * included, because a card in fandry-product-catalog can't be given slots:
 * the catalog passes `messages` on through `cardProps`.
 */
export interface FdProductCardMessages {
  addToCart: string;
  /** Names the group of swatch buttons. */
  swatches: string;
  /** Read in place of the two prices of a discounted product. */
  discountedPrice: (price: string, compareAtPrice: string) => string;
}

export const DEFAULT_PRODUCT_CARD_MESSAGES: FdProductCardMessages = {
  addToCart: 'Add to cart',
  swatches: 'Colors',
  discountedPrice: (price, compareAtPrice) => `${price}, was ${compareAtPrice}`
};

/** `amount` as money, in the reader's locale. */
export function formatPrice(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency }).format(amount);
}

/** How much cheaper `price` is than `compareAtPrice`, as a whole percentage. 0 when there is no discount. */
export function discountPercent(product: Pick<FdProduct, 'price' | 'compareAtPrice'>): number {
  const { price, compareAtPrice } = product;
  if (!compareAtPrice || compareAtPrice <= price) return 0;
  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}

/**
 * A "-25%" flair for a discounted product, or nothing. Flairs are never added
 * behind your back: put this in a product's `flairs` if you want one.
 *
 *   flairs: [discountFlair(product), { label: 'Sale', variant: 'danger' }].filter(Boolean)
 */
export function discountFlair(
  product: Pick<FdProduct, 'price' | 'compareAtPrice'>,
  variant: FdBadgeVariant = 'danger'
): FdProductFlair | undefined {
  const percent = discountPercent(product);
  return percent ? { label: `-${percent}%`, variant } : undefined;
}

/**
 * FdProductCardState is the behavior behind the product card, with no template
 * of its own: which swatch is selected, which images that means, the prices as
 * text and the flairs. fandry-product-card is this class plus the ready-made
 * markup; a consumer who wants a different card extends this class and writes
 * their own template, as with FdFormState and FdDataTableState.
 *
 * The card never changes `product`. Choosing a swatch is reported through
 * `change`; the Add to cart button through `addtocart`.
 */
export default class FdProductCardState extends Base {
  @api product: FdProduct | null = null;

  /** An ISO 4217 code, for `price` and `compareAtPrice`. */
  @api currency = 'USD';

  /** Replaces any of DEFAULT_PRODUCT_CARD_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdProductCardMessages> = {};

  /**
   * The name of the selected swatch. Set it to choose which one the card
   * starts on (or to move it from outside, as fandry-product-catalog does
   * when a color filter is on); the card keeps it current as the user picks
   * another and reports each pick through `change`. Defaults to the first.
   */
  @api
  get swatch(): string {
    return this.selectedSwatchName;
  }
  set swatch(value: string) {
    this.selectedSwatchName = value ?? '';
  }

  @track protected selectedSwatchName = '';

  // ---- rendering model

  protected get text(): FdProductCardMessages {
    return { ...DEFAULT_PRODUCT_CARD_MESSAGES, ...this.messages };
  }

  /** Both prices go through this. Override it for another locale, no decimals, "From $X", ... */
  protected formatPrice(amount: number): string {
    return formatPrice(amount, this.currency);
  }

  get hasProduct(): boolean {
    return !!this.product;
  }

  get name(): string {
    return this.product?.name ?? '';
  }

  get subtitle(): string {
    return this.product?.subtitle ?? '';
  }

  get hasSubtitle(): boolean {
    return !!this.subtitle;
  }

  get href(): string {
    return this.product?.href ?? '';
  }

  get hasHref(): boolean {
    return !!this.href;
  }

  /** The selected swatch, or the first one when nothing (or an unknown name) is selected. */
  get selectedSwatch(): FdProductSwatch | undefined {
    const swatches = this.product?.swatches ?? [];
    return swatches.find((swatch) => swatch.name === this.selectedSwatchName) ?? swatches[0];
  }

  get hasSwatches(): boolean {
    return (this.product?.swatches?.length ?? 0) > 0;
  }

  get swatches(): FdProductRenderSwatch[] {
    const selected = this.selectedSwatch;
    return (this.product?.swatches ?? []).map((swatch) => {
      const isSelected = swatch === selected;
      return {
        name: swatch.name,
        style: `--_fd-swatch-color: ${swatch.color}`,
        selected: isSelected,
        ariaPressed: isSelected ? 'true' : 'false',
        classes: isSelected ? 'swatch swatch--selected' : 'swatch',
        part: partList('option', { selected: isSelected })
      };
    });
  }

  get selectedSwatchLabel(): string {
    return this.selectedSwatch?.name ?? '';
  }

  /* A swatch with its own images replaces the product's; one without them
     keeps showing the product's, so a swatch can be color-only. */
  get image(): string {
    return this.selectedSwatch?.image ?? this.product?.image ?? '';
  }

  get hasImage(): boolean {
    return !!this.image;
  }

  get hoverImage(): string {
    const swatch = this.selectedSwatch;
    if (swatch?.image) return swatch.hoverImage ?? '';
    return this.product?.hoverImage ?? '';
  }

  get hasHoverImage(): boolean {
    return !!this.hoverImage;
  }

  get imageAlt(): string {
    const alt = this.product?.imageAlt ?? this.name;
    return this.selectedSwatch ? `${alt}, ${this.selectedSwatch.name}` : alt;
  }

  get flairs(): FdProductRenderFlair[] {
    return (this.product?.flairs ?? []).map((flair, index) => ({
      key: `${index}-${flair.label}`,
      label: flair.label,
      variant: flair.variant ?? 'default'
    }));
  }

  get hasFlairs(): boolean {
    return this.flairs.length > 0;
  }

  get priceText(): string {
    return this.product ? this.formatPrice(this.product.price) : '';
  }

  get isDiscounted(): boolean {
    return !!this.product && discountPercent(this.product) > 0;
  }

  get compareAtPriceText(): string {
    return this.isDiscounted ? this.formatPrice(this.product!.compareAtPrice!) : '';
  }

  /* A discounted product's two prices are read as one phrase, so a
     translation can put them in its own order; the visible ones are hidden
     from a screen reader. */
  get discountedPriceText(): string {
    return this.isDiscounted ? this.text.discountedPrice(this.priceText, this.compareAtPriceText) : '';
  }

  get currentPriceHidden(): 'true' | undefined {
    return this.isDiscounted ? 'true' : undefined;
  }

  get addToCartLabel(): string {
    return this.text.addToCart;
  }

  get swatchesLabel(): string {
    return this.text.swatches;
  }

  // ---- actions

  /** Selects a swatch by name, as a click on it would. */
  @api
  selectSwatch(name: string) {
    const swatch = this.product?.swatches?.find((item) => item.name === name);
    if (!swatch || swatch === this.selectedSwatch) return;
    this.selectedSwatchName = name;
    this.dispatchEvent(new CustomEvent('change', { detail: { product: this.product, swatch }, bubbles: true }));
  }

  /** What the default Add to cart button calls. */
  @api
  addToCart() {
    if (!this.product) return;
    this.dispatchEvent(
      new CustomEvent('addtocart', { detail: { product: this.product, swatch: this.selectedSwatch }, bubbles: true })
    );
  }

  handleSwatchClick(event: Event) {
    this.selectSwatch((event.currentTarget as HTMLElement).dataset.name ?? '');
  }

  handleAddToCart() {
    this.addToCart();
  }
}
