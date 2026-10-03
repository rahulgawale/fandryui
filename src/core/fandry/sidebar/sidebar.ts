import { api } from 'lwc';
import Base from 'fandry/base';

/** Text the sidebar announces that isn't markup; see `messages`. */
export interface FdSidebarMessages {
  /** The navigation landmark's accessible name, when `aria-label` is not set. */
  label: string;
}

export const DEFAULT_SIDEBAR_MESSAGES: FdSidebarMessages = {
  label: 'Sidebar'
};

/**
 * A vertical navigation rail. Owns its own width/border/scrolling shape --
 * nothing else. Grouping (a heading above a run of items) and the actual
 * links are the consumer's own slotted content (fandry-sidebar-item plus
 * any heading/text primitive), the same "structure here, content there"
 * split fandry-card and fandry-popover already use.
 */
export default class Sidebar extends Base {
  /** Replaces any of DEFAULT_SIDEBAR_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdSidebarMessages> = {};

  /** This instance's name, as `aria-label` on any element. Wins over `messages.label`. */
  @api ariaLabel = '';

  get navLabel(): string {
    return this.ariaLabel || { ...DEFAULT_SIDEBAR_MESSAGES, ...this.messages }.label;
  }
}
