import { LightningElement, api } from 'lwc';
import { addToCart, errorMessage, loadProduct } from 'c/aryabhStoreData';

let nextToastId = 1;

/*
  The store's product page: loads the product through c/aryabhStoreData,
  shows it with c/aryabhProductDetailView, and puts it in the cart through
  the data layer when the view asks. No markup of the product of its own,
  and no fetching of its own.
*/
export default class AryabhProductDetail extends LightningElement {
  /** The product to show: on the product page, the page's record. */
  @api
  get recordId() {
    return this._recordId;
  }
  set recordId(value) {
    this._recordId = value;
    if (this.isConnected) this.load();
  }

  _recordId;
  product;
  currency;
  pricingError;
  loading = true;
  error;
  adding = false;
  toasts = [];

  connectedCallback() {
    this.load();
  }

  async load() {
    if (!this._recordId) {
      this.loading = false;
      this.error = 'Choose a product to show.';
      return;
    }
    this.loading = true;
    this.error = undefined;
    try {
      const { product, currency, pricingError } = await loadProduct(this._recordId);
      this.product = product;
      this.currency = currency;
      this.pricingError = pricingError;
    } catch (error) {
      this.error = errorMessage(error);
    } finally {
      this.loading = false;
    }
  }

  async handleAddToCart(event) {
    if (this.adding) return;
    const { product, swatch, quantity } = event.detail;
    this.adding = true;
    try {
      await addToCart(product, swatch, quantity);
      const what = `${quantity > 1 ? `${quantity} × ` : ''}${product.name}${swatch ? `, ${swatch.name},` : ''}`;
      this.toast('success', `${what} ${quantity > 1 ? 'are' : 'is'} in your cart.`);
    } catch (error) {
      this.toast('danger', errorMessage(error));
    } finally {
      this.adding = false;
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
