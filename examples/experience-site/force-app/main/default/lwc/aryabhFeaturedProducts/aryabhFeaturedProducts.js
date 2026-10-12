import { LightningElement, api } from 'lwc';
import { addToCart, errorMessage, loadStorefront } from 'c/aryabhStoreData';

let nextToastId = 1;

/*
  A row of product cards for the Home page: the first products of a
  category, in its order. Data comes from c/aryabhStoreData.
*/
export default class AryabhFeaturedProducts extends LightningElement {
  @api heading = 'Featured';
  /** The category whose first products are shown. */
  @api categoryId;
  /** How many cards to show. */
  @api count = 4;

  products = [];
  currency;
  loading = true;
  error;
  pricingError;
  toasts = [];

  async connectedCallback() {
    try {
      const { products, currency, pricingError } = await loadStorefront(this.categoryId);
      this.products = products.slice(0, Number(this.count) || 4);
      this.currency = currency;
      this.pricingError = pricingError;
    } catch (error) {
      this.error = errorMessage(error);
    } finally {
      this.loading = false;
    }
  }

  get hasHeading() {
    return !!this.heading;
  }

  async handleAddToCart(event) {
    const { product, swatch } = event.detail;
    try {
      await addToCart(product, swatch);
      this.toast('success', `${product.name}${swatch ? `, ${swatch.name},` : ''} is in your cart.`);
    } catch (error) {
      this.toast('danger', errorMessage(error));
    }
  }

  handleToastDismiss(event) {
    const id = Number(event.currentTarget.dataset.id);
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }

  toast(variant, message) {
    this.toasts = [...this.toasts, { id: nextToastId++, variant, message }];
  }
}
