import { api } from 'lwc';
import FdProductCardState from 'c/fandryProductCardState';

let nextId = 1;

/*
  The product page's markup, and nothing else: no data, no Apex, no
  Commerce. It is fandry-product-card's state class (swatch selection, which
  pictures and prices go with it, flairs, the discounted-price phrase) with
  a page template of its own -- the block's way to get other markup without
  copying the card. Add to cart is reported through `addtocart`, with the
  chosen quantity; the page decides what to do with it.
*/
export default class AryabhProductDetailView extends FdProductCardState {
  /** True while the page is adding to the cart: the button says so and ignores clicks. */
  @api busy = false;

  quantity = 1;
  quantityId = `quantity-${nextId++}`;
  activePicture;

  get pictures() {
    return [this.image, this.hoverImage].filter(Boolean);
  }

  get shownPicture() {
    return this.pictures.includes(this.activePicture) ? this.activePicture : this.pictures[0];
  }

  get hasThumbnails() {
    return this.pictures.length > 1;
  }

  get thumbnails() {
    return this.pictures.map((src, index) => {
      const selected = src === this.shownPicture;
      return {
        key: `${index}-${src}`,
        src,
        label: `Picture ${index + 1} of ${this.pictures.length}`,
        pressed: selected ? 'true' : 'false',
        classes: selected ? 'thumb thumb--selected' : 'thumb'
      };
    });
  }

  get addButtonProps() {
    return this.busy ? { tabIndex: 0, ariaDisabled: 'true' } : { tabIndex: 0 };
  }

  get addLabel() {
    return this.busy ? 'Adding…' : this.addToCartLabel;
  }

  get quantityProps() {
    return { min: 1, step: 1, inputMode: 'numeric' };
  }

  // No shopper price (Experience Builder, or pricing failed) shows nothing, not $0.00.
  formatPrice(amount) {
    return amount === null || amount === undefined ? '' : super.formatPrice(amount);
  }

  handleThumbClick(event) {
    this.activePicture = event.currentTarget.dataset.src;
  }

  // A new colour shows its own front picture.
  handleSwatchClick(event) {
    this.activePicture = undefined;
    super.handleSwatchClick(event);
  }

  handleQuantityInput(event) {
    event.stopPropagation();
    const value = parseInt(event.detail, 10);
    this.quantity = value > 0 ? value : 1;
  }

  handleAddClick() {
    if (this.busy || !this.product) return;
    this.dispatchEvent(
      new CustomEvent('addtocart', {
        detail: { product: this.product, swatch: this.selectedSwatch, quantity: this.quantity },
        bubbles: true
      })
    );
  }
}
