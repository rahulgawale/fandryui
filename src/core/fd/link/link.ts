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

  // No forced tabIndex default here, unlike fd-button/fd-radio/fd-checkbox/
  // fd-select. That looked right by analogy at first (those all need one
  // because Safari, with "Full Keyboard Access" off, excludes them from
  // the plain-Tab order by default, and an explicit tabIndex overrides
  // that) -- but confirmed live afterwards that the analogy doesn't hold
  // for <a href>: Safari's plain-Tab exclusion of real hyperlinks is
  // unconditional, tabIndex or not. Option-Tab reaches the link either
  // way (that's Safari's own full-keyboard-access bypass gesture, present
  // regardless of anything this component does), which is what exposed
  // the difference -- fd-button et al. respond to plain Tab once given a
  // tabIndex, fd-link doesn't. There's no in-page fix for that; it's a
  // Safari user preference, not a bug here, so this stays at fd-link's
  // native default instead of pretending otherwise.
  @api elementProps: Record<string, unknown> = {};

  get classes(): string {
    return ['link', `link--${this.variant}`, this.disabled ? 'link--disabled' : '']
      .filter(Boolean)
      .join(' ');
  }

  // A disabled link renders with no `href` at all -- an <a> without one
  // isn't a hyperlink (not keyboard-focusable by default, not in the
  // accessibility tree's link role), which removes it from tab order and
  // blocks navigation for free, with no click-blocking needed on its own.
  // A consumer explicitly passing their own tabIndex via elementProps
  // could still re-add it to the tab order despite the missing href,
  // though -- resolvedElementProps below forces that back to -1 while
  // disabled, same "component wins" rule as href/aria-disabled above.
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
