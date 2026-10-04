import { LightningElement, api } from 'lwc';

/* The catalog with a filter of its own in filters-end (an "In stock" button
   that sets a `inStock` key) and its own empty state. */
export default class CatalogSlotHarness extends LightningElement {
  @api products: unknown[] = [];

  matchProduct = (product: { inStock?: boolean }, filters: { inStock?: boolean }) =>
    !filters.inStock || product.inStock === true;

  handleInStock() {
    (this.template.querySelector('fandry-product-catalog') as unknown as { setFilters(changes: object): void }).setFilters({
      inStock: true
    });
  }
}
