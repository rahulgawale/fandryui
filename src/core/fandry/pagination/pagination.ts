import { api } from 'lwc';
import Base from 'fandry/base';

/**
 * Prev/next navigation between two adjacent pages (e.g. component docs, a
 * guide's chapters). Purely presentational -- the consumer supplies both
 * hrefs/labels; this owns no list of its own and no notion of "adjacent
 * to what". Either side is simply omitted when its href isn't provided
 * (the first page has no previous, the last has no next).
 */
export default class Pagination extends Base {
  @api previousHref = '';
  @api previousLabel = '';
  @api nextHref = '';
  @api nextLabel = '';

  get hasPrevious(): boolean {
    return !!this.previousHref;
  }

  get hasNext(): boolean {
    return !!this.nextHref;
  }
}
