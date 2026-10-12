import type { LightningElement } from 'lwc';
import FdProductCatalogState from 'fandry/productCatalogState';
import FdProductCard from 'fandry/productCard';

/**
 * The product catalog block: FdProductCatalogState (search, category, color,
 * price and on-sale filters, and sorting) plus this component's own Shadow
 * DOM template -- a filter panel and a grid of cards, fandry-product-card
 * unless `cardComponent` names another. No logic of its own -- see
 * fandry/productCatalogState for what it does and for how to extend it with
 * different markup.
 *
 * The cards are rendered with `lwc:is`, so on Salesforce this bundle's
 * .js-meta.xml needs the lightning__dynamicComponent capability (API 55+),
 * which `fandry add` writes.
 */
export default class FdProductCatalog extends FdProductCatalogState {
  protected defaultCardComponent: typeof LightningElement = FdProductCard;
}
