import { LightningElement } from 'lwc';

// One entry per block page under /blocks. `includes` is what the block covers,
// shown as chips on its card; `image` is a screenshot of its demo. The page's
// og:image is the same with the logo, <slug>-og.jpg (lwr.config.json).
export default class BlocksIndex extends LightningElement {
  blocks = [
    {
      slug: 'data-table',
      image: '/assets/blocks/data-table.jpg',
      href: '/blocks/data-table/',
      name: 'Data table',
      description:
        'A complete table screen: find, filter, page, select, act on rows, edit them in place, and save with feedback.',
      includes: ['Search', 'Filters', 'Column visibility', 'Pagination', 'Selection', 'Row actions', 'Inline edit', 'Multi-record edit', 'Save hooks + toasts', 'Skeleton loading']
    },
    {
      slug: 'form',
      image: '/assets/blocks/form.jpg',
      href: '/blocks/form/',
      name: 'Form',
      description:
        'A form that reads first and edits on demand: fields, validation that speaks up at the right moment, and a save with feedback.',
      includes: ['Fields', 'Validation', 'Actions', 'Read / edit mode', 'Revert and reset', 'Save hook', 'Server-side rules']
    }
  ];
}
