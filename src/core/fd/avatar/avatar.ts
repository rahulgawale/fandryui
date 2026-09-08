import { api, track } from 'lwc';
import Base from 'fd/base';

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls.
const RESERVED_ELEMENT_PROPS = ['src', 'alt', 'class', 'onerror'];

export default class Avatar extends Base {
  @api alt = '';
  @api initials = '';
  @api size: 'sm' | 'md' | 'lg' = 'md';

  // Spread onto the native <img> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
  @api elementProps: Record<string, unknown> = {};

  @track imageFailed = false;

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-avatar');
  }

  _src = '';

  @api
  get src(): string {
    return this._src;
  }
  set src(value: string) {
    this._src = value;
    // A new src deserves a fresh attempt, even if a previous one failed.
    this.imageFailed = false;
  }

  get classes() {
    return ['avatar', `avatar--${this.size}`].join(' ');
  }

  get showImage(): boolean {
    return !!this.src && !this.imageFailed;
  }

  get showInitials(): boolean {
    return !this.showImage && !!this.initials;
  }

  handleImageError() {
    this.imageFailed = true;
  }
}
