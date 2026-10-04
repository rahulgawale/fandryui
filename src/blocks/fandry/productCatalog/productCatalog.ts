import FdProductCatalogState from 'fandry/productCatalogState';

/**
 * The product catalog block: FdProductCatalogState (search, category, color,
 * price and on-sale filters, and sorting) plus this component's own Shadow
 * DOM template -- a filter panel and a grid of fandry-product-card. No logic
 * of its own -- see fandry/productCatalogState for what it does and for how to
 * extend it with different markup.
 */
export default class FdProductCatalog extends FdProductCatalogState {}
