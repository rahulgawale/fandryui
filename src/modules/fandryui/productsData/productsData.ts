/*
  Sample products for the product-card and product-catalog demo pages. The
  images are illustrations in src/assets/products, one front view and one
  alternate view per color, so each swatch has pictures that match it.
  Nothing here is part of a block; a real shop passes its own products.
*/

import { discountFlair } from 'fandry/productCardState';
import type { FdProduct, FdProductFlair, FdProductSwatch } from 'fandry/productCardState';

const COLORS: Record<string, string> = {
  Coral: '#e76f51',
  Navy: '#27415e',
  Sage: '#8ab17d',
  Olive: '#6b7443',
  Sand: '#d4a373',
  Charcoal: '#3d4349',
  Cream: '#efe6d5',
  Terracotta: '#c8553d',
  Slate: '#5c6b73',
  Pearl: '#e4e7eb',
  Blush: '#e5989b',
  Sunflower: '#f4a938',
  Teal: '#2a9d8f',
  White: '#f7f7f5',
  Heather: '#a9aeb4',
  Forest: '#2d6a4f',
  Sky: '#8ecae6',
  Lilac: '#b8b0f0',
  Mustard: '#e9c46a',
  Brick: '#bc4749',
  Natural: '#e9dcc9'
};

const image = (slug: string, color: string, alt = false) =>
  `/assets/products/${slug}-${color.toLowerCase()}${alt ? '-alt' : ''}.svg`;

function swatches(slug: string, names: string[]): FdProductSwatch[] {
  return names.map((name) => ({
    name,
    color: COLORS[name],
    image: image(slug, name),
    hoverImage: image(slug, name, true)
  }));
}

// A discount flair goes first, before the product's own flairs.
function withDiscount(product: FdProduct, flairs: FdProductFlair[] = []): FdProduct {
  const discount = discountFlair(product);
  return { ...product, flairs: discount ? [discount, ...flairs] : flairs };
}

export const PRODUCTS: FdProduct[] = [
  withDiscount(
    {
      id: 'stride-runner',
      name: 'Stride Runner',
      subtitle: 'Running shoes',
      category: 'Shoes',
      price: 120,
      compareAtPrice: 160,
      href: '#stride-runner',
      swatches: swatches('stride-runner', ['Coral', 'Navy', 'Sage'])
    },
    [{ label: 'Sale', variant: 'danger' }]
  ),
  {
    id: 'trail-pack',
    name: 'Trail Pack 22L',
    subtitle: 'Daypack',
    category: 'Bags',
    price: 89,
    href: '#trail-pack',
    flairs: [{ label: 'New', variant: 'success' }],
    swatches: swatches('trail-pack', ['Olive', 'Sand', 'Charcoal'])
  },
  {
    id: 'everyday-mug',
    name: 'Everyday Mug',
    subtitle: 'Stoneware, 350 ml',
    category: 'Home',
    price: 18,
    href: '#everyday-mug',
    flairs: [{ label: 'Buy 2, get 1 free', variant: 'primary' }],
    swatches: swatches('everyday-mug', ['Cream', 'Terracotta', 'Slate'])
  },
  withDiscount(
    {
      id: 'studio-headphones',
      name: 'Studio Headphones',
      subtitle: 'Wireless, noise cancelling',
      category: 'Audio',
      price: 199,
      compareAtPrice: 249,
      href: '#studio-headphones',
      swatches: swatches('studio-headphones', ['Charcoal', 'Pearl', 'Blush'])
    },
    [{ label: 'Bestseller', variant: 'warning' }]
  ),
  {
    id: 'arc-lamp',
    name: 'Arc Desk Lamp',
    subtitle: 'Dimmable LED',
    category: 'Home',
    price: 64,
    href: '#arc-lamp',
    swatches: swatches('arc-lamp', ['Sunflower', 'White', 'Teal'])
  },
  {
    id: 'essential-tee',
    name: 'Essential Tee',
    subtitle: 'Organic cotton',
    category: 'Apparel',
    price: 28,
    href: '#essential-tee',
    flairs: [{ label: 'Offer: 3 for $70', variant: 'primary' }],
    swatches: swatches('essential-tee', ['White', 'Heather', 'Forest', 'Navy'])
  },
  withDiscount(
    {
      id: 'hydro-bottle',
      name: 'Hydro Bottle',
      subtitle: 'Insulated, 750 ml',
      category: 'Outdoor',
      price: 29,
      compareAtPrice: 40,
      href: '#hydro-bottle',
      swatches: swatches('hydro-bottle', ['Sky', 'Lilac', 'Charcoal'])
    },
    [{ label: 'Sale', variant: 'danger' }]
  ),
  withDiscount({
    id: 'ribbed-beanie',
    name: 'Ribbed Beanie',
    subtitle: 'Merino wool',
    category: 'Apparel',
    price: 22,
    compareAtPrice: 26,
    href: '#ribbed-beanie',
    swatches: swatches('ribbed-beanie', ['Mustard', 'Brick', 'Heather'])
  }),
  {
    id: 'canvas-tote',
    name: 'Canvas Tote',
    subtitle: 'Heavy cotton canvas',
    category: 'Bags',
    price: 36,
    href: '#canvas-tote',
    image: image('canvas-tote', 'Natural'),
    hoverImage: image('canvas-tote', 'Natural', true),
    imageAlt: 'Canvas Tote in natural canvas',
    flairs: [{ label: 'New', variant: 'success' }]
  }
];
