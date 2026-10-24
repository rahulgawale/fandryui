import { api } from 'lwc';
import Base from 'fandry/base';

export default class FdTabPanel extends Base {
  /** Matches the `value` of one fandry-tab. */
  @api value = '';

  /** Set by fandry-tabs; read-only for a page, which sets `value` on fandry-tabs. */
  @api selected = false;

  /* Names this panel (aria-label). An id can't reach across shadow roots, so
     the panel can't point at its tab with aria-labelledby. */
  @api ariaLabel = '';

  get hiddenPanel(): boolean {
    return !this.selected;
  }

  get label(): string | null {
    return this.ariaLabel || null;
  }
}
