import { LightningElement, api } from 'lwc';
import { addToCart, errorMessage, loadStorefront } from 'c/aryabhStoreData';
import AryabhProductCard from 'c/aryabhProductCard';

let nextToastId = 1;

/*
  The store's product listing: fandry-product-catalog over the products of
  one category. Data comes from c/aryabhStoreData; this component only
  shows it and says what happened.
*/
export default class AryabhCatalog extends LightningElement {
  /** The category to list: on a category page, the page's record. */
  @api
  get recordId() {
    return this._recordId;
  }
  set recordId(value) {
    this._recordId = value;
    if (this.isConnected) this.load();
  }

  _recordId;
  products = [];
  cardComponent = AryabhProductCard;
  cardProps = {};
  loading = true;
  error;
  pricingError;
  toasts = [];

  connectedCallback() {
    this.load();
  }

  async load() {
    this.loading = true;
    this.error = undefined;
    try {
      const { products, currency, pricingError } = await loadStorefront(this._recordId);
      this.products = products;
      this.cardProps = { currency };
      this.pricingError = pricingError;
    } catch (error) {
      this.error = errorMessage(error);
    } finally {
      this.loading = false;
    }
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
