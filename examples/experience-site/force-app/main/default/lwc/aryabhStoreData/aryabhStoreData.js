/*
  The storefront's data layer: the only module that fetches anything. It
  uses the store's own Storefront APIs (commerce/productApi, cartApi,
  contextApi) -- the ones the store's built-in components use -- so the
  shopper's entitlements, price books, strikethrough prices and cart apply
  as everywhere else in the store, and there is no Apex. It returns products
  in the shape fandry-product-card and fandry-product-catalog take; the UI
  components import these functions and never see a Commerce type.
*/
import { getProduct, getProductCollection, getProductPricingCollection, searchProducts } from 'commerce/productApi';
import { addItemToCart } from 'commerce/cartApi';
import { getSessionContext } from 'commerce/contextApi';
import basePath from '@salesforce/community/basePath';
import { discountFlair } from 'c/fandryProductCardState';

const FIELDS = ['Name', 'Description', 'Family', 'Swatch_Color__c', 'Flair__c', 'Flair_Variant__c'];

/**
 * The products in a category, in search order. Resolves to { products,
 * currency, pricesHidden, pricingError }: `pricesHidden` is true without a
 * logged-in shopper (in Experience Builder, for instance) or when prices
 * couldn't be loaded, and `pricingError` then says why.
 */
export async function loadStorefront(categoryId) {
  if (!categoryId) {
    throw new Error('Choose a category to show products from.');
  }
  const session = await getSessionContext();
  /* Every sellable item: each variation, with its own image, colour and
     swatch. With includePrices the search is a POST that takes `grouping`;
     without it, a GET that drops it and returns one item per product. */
  const search = await searchProducts({
    searchQuery: { categoryId, pageSize: 200, fields: FIELDS, includePrices: true, grouping: { groupingOption: 'NoGrouping' } }
  });
  const items = search?.productsPage?.products ?? [];
  const structure = await loadStructure(items);

  let pricing = { prices: new Map() };
  if (session?.isLoggedIn) {
    try {
      pricing = await loadPrices(items);
    } catch (error) {
      // The products are still worth showing; the page says why there are no prices.
      pricing = { prices: new Map(), error: pricingErrorMessage(error) };
    }
  }

  return {
    products: toCardProducts(items, structure, pricing.prices),
    currency: pricing.currency,
    pricesHidden: !session?.isLoggedIn || !!pricing.error,
    pricingError: pricing.error
  };
}

/**
 * One product, for its own page: every colour with both of its pictures
 * (front, then the other angle) and the shopper's prices. `productId` may
 * be the product or one of its colours. Resolves to { product, currency,
 * pricesHidden, pricingError }, as loadStorefront does.
 */
export async function loadProduct(productId) {
  const session = await getSessionContext();
  let detail = await getProduct({ productId, fields: FIELDS });
  if (detail?.variationParentId) {
    detail = await getProduct({ productId: detail.variationParentId, fields: FIELDS });
  }
  const mappings = detail?.variationInfo?.attributesToProductMappings ?? [];
  const colourDetails = await Promise.all(
    mappings.map((mapping) => getProduct({ productId: mapping.productId, fields: ['Swatch_Color__c'] }))
  );
  const colours = mappings.map((mapping, index) => ({
    id: mapping.productId,
    color: mapping.selectedAttributes?.find((attribute) => attribute.apiName === 'Color__c')?.value,
    swatch: field(colourDetails[index]?.fields, 'Swatch_Color__c'),
    ...pictures(colourDetails[index])
  }));
  const own = pictures(detail);

  let pricing = { prices: new Map() };
  if (session?.isLoggedIn) {
    try {
      pricing = await loadPrices(colours.length ? colours : [{ id: detail.id }]);
    } catch (error) {
      pricing = { prices: new Map(), error: pricingErrorMessage(error) };
    }
  }

  const first = colours[0] ?? own;
  const price = pricing.prices.get(first.id ?? detail.id);
  const product = withFlairs(
    {
      id: detail.id,
      name: field(detail.fields, 'Name'),
      subtitle: field(detail.fields, 'Description'),
      category: field(detail.fields, 'Family'),
      price: amount(price?.unitPrice),
      compareAtPrice: amount(price?.listPrice),
      image: own.image ?? first.image,
      hoverImage: own.hoverImage ?? first.hoverImage,
      swatches: colours.map((colour) => ({ name: colour.color, color: colour.swatch, image: colour.image, hoverImage: colour.hoverImage })),
      variationIds: Object.fromEntries(colours.map((colour) => [colour.color, colour.id]))
    },
    detail.fields
  );
  return { product, currency: pricing.currency, pricesHidden: !session?.isLoggedIn || !!pricing.error, pricingError: pricing.error };
}

/**
 * Adds a product to the shopper's cart: the variation of the chosen swatch,
 * or the product itself when it comes in one colour. `product` and `swatch`
 * are what a card's addtocart event carries. The store's cart badge updates
 * itself.
 */
export function addToCart(product, swatch, quantity = 1) {
  const productId = (swatch && product.variationIds[swatch.name]) || product.id;
  return addItemToCart(productId, quantity);
}

/**
 * A readable message from a failed call. The cart reports only an error
 * code (a StoreActionError), so that is named when there's no message.
 */
export function errorMessage(error) {
  const message = error?.body?.message ?? error?.body?.[0]?.message ?? error?.[0]?.message ?? error?.message;
  if (message) return message;
  const code = error?.code ?? error?.error?.code ?? error?.details?.code;
  return code ? `The store didn't accept that (${code}).` : 'Something went wrong.';
}

// The pricing service often fails without a message.
function pricingErrorMessage(error) {
  const message = errorMessage(error);
  return message === 'Something went wrong.' ? "the store couldn't price these products for your account." : message;
}

/* Which product each variation belongs to, and each product's colours in
   order: one product lookup per product (its first variation names the
   parent and all its colours), then the parents' own fields in one batch. */
async function loadStructure(items) {
  const parentOf = new Map();
  const variationsOf = new Map();
  for (const item of items) {
    if (item.productClass !== 'Variation' || parentOf.has(item.id)) continue;
    // eslint-disable-next-line no-await-in-loop -- each lookup skips the colours the previous ones found
    const detail = await getProduct({ productId: item.id, excludeMedia: true, excludePrices: true });
    const variationIds = (detail?.variationInfo?.attributesToProductMappings ?? []).map((mapping) => mapping.productId);
    variationIds.forEach((id) => parentOf.set(id, detail.variationParentId));
    variationsOf.set(detail.variationParentId, variationIds);
  }

  const parentFields = new Map();
  if (variationsOf.size) {
    const parents = await getProductCollection({ ids: [...variationsOf.keys()], fields: FIELDS, excludeMedia: true });
    for (const parent of parents?.products ?? []) {
      parentFields.set(parent.id, parent.fields ?? {});
    }
  }
  return { parentOf, variationsOf, parentFields };
}

/* The shopper's price for every item in one call: the price to pay and the
   strikethrough price. */
async function loadPrices(items) {
  const prices = new Map();
  if (!items.length) return { prices };
  const result = await getProductPricingCollection({ productIds: items.map((item) => item.id) });
  for (const line of result?.pricingLineItemResults ?? []) {
    if (line.success !== false) prices.set(line.productId, line);
  }
  return { prices, currency: result?.currencyIsoCode };
}

/* Groups the search results into card products, in search order, each
   product's colours in order. */
function toCardProducts(items, { parentOf, variationsOf, parentFields }, prices) {
  const itemById = new Map(items.map((item) => [item.id, item]));
  const done = new Set();
  const products = [];
  for (const item of items) {
    const parentId = parentOf.get(item.id);
    if (!parentId) {
      products.push(cardProduct(item.id, item.fields, [], { image: item.defaultImage?.url, price: prices.get(item.id) }));
      continue;
    }
    if (done.has(parentId)) continue;
    done.add(parentId);
    // A colour the shopper may not buy isn't in the search results.
    const variations = variationsOf
      .get(parentId)
      .map((id) => itemById.get(id))
      .filter(Boolean)
      .map((variation) => ({
        id: variation.id,
        color: color(variation),
        swatch: field(variation.fields, 'Swatch_Color__c'),
        image: variation.defaultImage?.url,
        price: prices.get(variation.id)
      }));
    products.push(cardProduct(parentId, parentFields.get(parentId), variations, variations[0] ?? {}));
  }
  return products;
}

function cardProduct(id, fields, variations, first) {
  const product = {
    id,
    name: field(fields, 'Name'),
    subtitle: field(fields, 'Description'),
    category: field(fields, 'Family'),
    // A product costs what its first colour costs.
    price: amount(first.price?.unitPrice),
    compareAtPrice: amount(first.price?.listPrice),
    image: first.image,
    href: `${basePath}/product/${id}`,
    swatches: variations.map((variation) => ({ name: variation.color, color: variation.swatch, image: variation.image })),
    // Not a card field: lets addToCart find the variation of a swatch.
    variationIds: Object.fromEntries(variations.map((variation) => [variation.color, variation.id]))
  };
  return withFlairs(product, fields);
}

// The discount first, then the product's own flair.
function withFlairs(product, fields) {
  const flair = field(fields, 'Flair__c');
  product.flairs = [
    discountFlair(product),
    flair ? { label: flair, variant: field(fields, 'Flair_Variant__c') || 'default' } : undefined
  ].filter(Boolean);
  return product;
}

/* A product's two detail pictures: the front, then the other angle. */
function pictures(detail) {
  const group = detail?.mediaGroups?.find((g) => g.developerName === 'productDetailImage');
  const items = [...(group?.mediaItems ?? [])].sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0));
  return { image: items[0]?.url ?? detail?.defaultImage?.url, hoverImage: items[1]?.url };
}

function color(item) {
  return item.variationAttributeSet?.attributes?.find((attribute) => attribute.apiName === 'Color__c')?.value;
}

/* Search returns { Name: { value } }; a product collection returns
   { Name: 'value' }. */
function field(fields, name) {
  const value = fields?.[name];
  return value !== null && typeof value === 'object' ? value.value : value;
}

function amount(value) {
  return value === undefined || value === null || value === '' ? undefined : Number(value);
}
