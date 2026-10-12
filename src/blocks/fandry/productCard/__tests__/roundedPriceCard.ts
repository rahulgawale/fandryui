import FdProductCard from '../productCard';

/* The card's own template, prices formatted another way: proves both prices
   go through formatPrice(). */
export default class RoundedPriceCard extends FdProductCard {
  protected formatPrice(amount: number): string {
    return `${Math.round(amount)} ${this.currency}`;
  }
}
