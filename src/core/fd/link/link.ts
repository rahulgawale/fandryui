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

  // Confirmed live in Safari: it isn't just form controls that get skipped
  // by default (see fd-button/fd-radio/fd-checkbox) -- a plain `<a href>`
  // is excluded from the Tab order too unless "Full Keyboard Access" is
  // set to "All controls" in System Settings, which most users never touch.
  // An explicit tabIndex overrides that default in WebKit the same way it
  // does for the form controls, so fd-link needs the same fix.
  @api elementProps: Record<string, unknown> = { tabIndex: 0 };

  get classes(): string {
    return ['link', `link--${this.variant}`, this.disabled ? 'link--disabled' : '']
      .filter(Boolean)
      .join(' ');
  }

  // A disabled link renders with no `href` at all -- an <a> without one
  // isn't a hyperlink (not in the accessibility tree's link role) and
  // blocks navigation for free, with no click-blocking needed. That alone
  // no longer keeps it out of the Tab order now that elementProps defaults
  // to an explicit tabIndex (see above) -- an explicit tabindex makes any
  // element focusable regardless of href, so resolvedElementProps below
  // forces it to -1 while disabled.
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
    const resolved = this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fd-link');

    // Overrides even a consumer-supplied tabIndex -- same "component wins"
    // rule computedHref already applies to href/the accessibility tree.
    return this.disabled ? { ...resolved, tabIndex: -1 } : resolved;
  }
}
