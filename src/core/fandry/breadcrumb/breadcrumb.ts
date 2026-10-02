import { api } from 'lwc';
import Base from 'fandry/base';

/** Text the breadcrumb announces that isn't markup; see `messages`. */
export interface FdBreadcrumbMessages {
  /** The navigation landmark's accessible name. */
  label: string;
}

export const DEFAULT_BREADCRUMB_MESSAGES: FdBreadcrumbMessages = {
  label: 'Breadcrumb'
};

// A nav landmark wrapping an <ol> of fandry-breadcrumb-item crumbs -- the
// same "parent owns list semantics, child owns item semantics" split
// fandry-sidebar/fandry-sidebar-item and fandry-menu/fandry-menu-item already
// use.
export default class Breadcrumb extends Base {
  /** Replaces any of DEFAULT_BREADCRUMB_MESSAGES, e.g. to translate them. */
  @api messages: Partial<FdBreadcrumbMessages> = {};

  /** @deprecated Set `messages.label`. Still wins over it when set. */
  @api ariaLabel = '';

  get navLabel(): string {
    return this.ariaLabel || { ...DEFAULT_BREADCRUMB_MESSAGES, ...this.messages }.label;
  }
}
