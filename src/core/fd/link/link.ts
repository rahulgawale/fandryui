import { api } from 'lwc';
import Base from 'fd/base';

// See fd-button's button.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls.
const RESERVED_ELEMENT_PROPS = ['href', 'target', 'rel', 'class', 'ariaDisabled'];

export default class FdLink extends Base {
  @api href = '';
  @api target: '_self' | '_blank' | '_parent' | '_top' = '_self';
  @api rel = '';
  @api variant: 'default' | 'muted' = 'default';
  @api disabled = false;

  // No forced tabIndex default here, unlike fd-button/fd-radio/fd-checkbox
  // -- a native `<a href>` is already keyboard-focusable without help.
  // Those primitives need the Safari fix because it specifically skips
  // form controls (button/checkbox/radio/select) from the Tab order, not
  // anchors.
  @api elementProps: Record<string, unknown> = {};

  get classes(): string {
    return ['link', `link--${this.variant}`, this.disabled ? 'link--disabled' : '']
      .filter(Boolean)
      .join(' ');
  }

  // A disabled link renders with no `href` at all -- an <a> without one
  // isn't a hyperlink (not keyboard-focusable, not in the accessibility
  // tree's link role), which removes it from tab order and blocks
  // navigation for free, with no tabindex or click-blocking needed.
  get computedHref(): string | undefined {
    return this.disabled ? undefined : this.href;
  }

  get computedRel(): string | undefined {
    if (this.rel) {
      return this.rel;
    }

    // Prevents the opened page from getting `window.opener` access back to
    // this one (a reverse-tabnabbing risk) whenever a target="_blank" link
    // doesn't already specify its own `rel`.
    return this.target === '_blank' ? 'noopener noreferrer' : undefined;
  }

  get ariaDisabled(): 'true' | undefined {
    return this.disabled ? 'true' : undefined;
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-link');
  }
}
