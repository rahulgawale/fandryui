import { api } from 'lwc';
import Base from 'fandry/base';

/* A layout seam, not a behavior: it joins the fandry-buttons slotted into it
   into one bar. Each button still owns its click, focus and disabled state. */
export default class FdButtonGroup extends Base {
  /** Names the group (aria-label). */
  @api ariaLabel = '';

  get label(): string | null {
    return this.ariaLabel || null;
  }
}
