import { LightningElement } from 'lwc';

// One entry per block page under /blocks. `includes` is what the block covers,
// shown as chips on its card.
export default class BlocksIndex extends LightningElement {
  blocks = [
    {
      slug: 'data-table',
      href: '/blocks/data-table',
      name: 'Data table',
      description:
        'A complete table screen: find, filter, page, select, act on rows, edit them in place, and save with feedback.',
      includes: ['Search', 'Filters', 'Column visibility', 'Pagination', 'Selection', 'Row actions', 'Inline edit', 'Multi-record edit', 'Save hooks + toasts', 'Skeleton loading']
    },
    {
      slug: 'form',
      href: '/blocks/form',
      name: 'Form',
      description:
        'A form that reads first and edits on demand: fields, validation that speaks up at the right moment, and a save with feedback.',
      includes: ['Fields', 'Validation', 'Actions', 'Read / edit mode', 'Save hook', 'Server-side rules']
    },
    {
      slug: 'media-gallery',
      href: '/blocks/media-gallery',
      name: 'Media gallery',
      description:
        'A grid of pictures that fits any box, and a full-screen viewer with swipe, pinch to zoom and keyboard control.',
      includes: ['Responsive grid', 'Skeleton loading', 'Lazy loading', 'Captions', 'Full-screen viewer', 'Swipe', 'Pinch to zoom', 'Keyboard', 'Headless state']
    }
  ];
}
