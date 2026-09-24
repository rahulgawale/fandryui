import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

// See fandry-button's button.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls.
const RESERVED_ELEMENT_PROPS = ['href', 'target', 'rel', 'class', 'ariaDisabled'];

export default class FdLink extends Base {
  @api href = '';
  @api target: '_self' | '_blank' | '_parent' | '_top' = '_self';
  @api rel = '';
  @api variant: 'default' | 'muted' = 'default';
  @api disabled = false;

  // The <a> is always tabindex="-1"; the `.tab-stop` wrapper around it is
  // the real tab stop (see Base.activateAnchorOnEnter for why -- Safari
  // skips <a href> in plain Tab order no matter what tabindex it has), and
  // takes a consumer's elementProps.tabIndex. A disabled link has no href,
  // so the wrapper drops out of the tab order too.
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

  get tabStopIndex(): string | undefined {
    return this.resolveTabStopIndex(this.elementProps, !this.disabled);
  }

  handleKeydown(event: KeyboardEvent): void {
    this.activateAnchorOnEnter(event);
  }

  get resolvedElementProps(): Record<string, unknown> {
    return this.withoutTabIndex(this.resolveElementProps(this.elementProps, RESERVED_ELEMENT_PROPS, 'fandry-link'));
  }

  get linkPart(): string {
    return partList('link', { [this.variant]: true, disabled: this.disabled });
  }
}
