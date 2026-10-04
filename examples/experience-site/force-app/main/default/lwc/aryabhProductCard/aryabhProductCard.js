import FdProductCard from 'c/fandryProductCard';

/*
  fandry-product-card, with its template, for this store: a product without
  a price (no shopper is logged in, as in Experience Builder) shows no
  price rather than $0.00. Passed to the catalog as its cardComponent.
*/
export default class AryabhProductCard extends FdProductCard {
  formatPrice(amount) {
    return amount === null || amount === undefined ? '' : super.formatPrice(amount);
  }
}
