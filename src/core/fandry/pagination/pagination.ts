import { api } from 'lwc';
import Base from 'fandry/base';
import linksTemplate from './paginationLinks.html';
import pagesTemplate from './paginationPages.html';

/**
 * Pagination has two shapes, chosen by which props are supplied:
 *
 * - Link mode (`previousHref`/`nextHref`): prev/next navigation between two
 *   adjacent pages (e.g. component docs, a guide's chapters). Purely
 *   presentational -- the consumer supplies both hrefs/labels; either side
 *   is simply omitted when its href isn't provided.
 * - Page mode (`pageIndex` set): Previous / "Page N of M" / Next controls
 *   for paging through a collection (e.g. fandry-table's footer). Stateless
 *   -- the consumer owns `pageIndex` and moves it in response to the
 *   `change` event, so it works equally for client-side and server-driven
 *   paging.
 *
 * In page mode each control can be replaced via a named slot (`previous`,
 * `status`, `next`) -- a bubbling click on anything slotted into `previous`
 * or `next` pages, so any clickable element works.
 */
export default class Pagination extends Base {
  @api previousHref = '';
  @api previousLabel = '';
  @api nextHref = '';
  @api nextLabel = '';

  /** Zero-based current page. Setting it switches to page mode. */
  @api pageIndex?: number;

  /** Total number of pages; -1 (the default) means unknown. */
  @api pageCount = -1;

  get isPageMode(): boolean {
    return typeof this.pageIndex === 'number';
  }

  render() {
    return this.isPageMode ? pagesTemplate : linksTemplate;
  }

  get hasPrevious(): boolean {
    return !!this.previousHref;
  }

  get hasNext(): boolean {
    return !!this.nextHref;
  }

  get previousDisabled(): boolean {
    return (this.pageIndex ?? 0) <= 0;
  }

  get nextDisabled(): boolean {
    return this.pageCount >= 0 && (this.pageIndex ?? 0) >= this.pageCount - 1;
  }

  get status(): string {
    const currentPage = (this.pageIndex ?? 0) + 1;
    return this.pageCount >= 0
      ? `Page ${currentPage} of ${this.pageCount}`
      : `Page ${currentPage}`;
  }

  handlePrevious() {
    if (this.previousDisabled) return;
    this.dispatchPageChange((this.pageIndex ?? 0) - 1);
  }

  handleNext() {
    if (this.nextDisabled) return;
    this.dispatchPageChange((this.pageIndex ?? 0) + 1);
  }

  private dispatchPageChange(pageIndex: number) {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { pageIndex },
        bubbles: true
      })
    );
  }
}
