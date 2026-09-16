import { api } from 'lwc';
import Base from 'fandry/base';

/**
 * A vertical navigation rail. Owns its own width/border/scrolling shape --
 * nothing else. Grouping (a heading above a run of items) and the actual
 * links are the consumer's own slotted content (fandry-sidebar-item plus
 * any heading/text primitive), the same "structure here, content there"
 * split fandry-card and fandry-popover already use.
 */
export default class Sidebar extends Base {
  @api ariaLabel = 'Sidebar';
}
