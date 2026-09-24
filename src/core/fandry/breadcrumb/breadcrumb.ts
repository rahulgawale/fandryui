import { api } from 'lwc';
import Base from 'fandry/base';

// A nav landmark wrapping an <ol> of fandry-breadcrumb-item crumbs -- the
// same "parent owns list semantics, child owns item semantics" split
// fandry-sidebar/fandry-sidebar-item and fandry-menu/fandry-menu-item already
// use.
export default class Breadcrumb extends Base {
  @api ariaLabel = 'Breadcrumb';
}
