/*
  Shared plumbing for components that wrap a real `<a href>` in a
  `.tab-stop` element (fandry-link, fandry-sidebar-item,
  fandry-breadcrumb-item, fandry-pagination's links). Safari, without "Press Tab to highlight each
  item on a webpage" enabled, never plain-Tabs to an `<a href>` -- and
  unlike native form controls, an explicit tabindex doesn't override that
  for links. A non-link wrapper with tabindex="0" is tabbable regardless,
  so it takes the tab stop (the anchor itself stays tabindex="-1" and
  aria-hidden, with the wrapper carrying role="link" and the anchor's
  state) and forwards Enter to the anchor, as a native link would. A
  screen reader activates the role="link" wrapper with a click on the
  wrapper itself, never on the hidden anchor, so that is forwarded too.
*/

/** Forwards Enter on the tab-stop wrapper to the `<a>` inside `root` (usually `this.template`). */
export function activateAnchorOnEnter(event: KeyboardEvent, root: ParentNode): void {
  if (event.key !== 'Enter' || event.target !== event.currentTarget) {
    return;
  }
  root.querySelector('a')?.dispatchEvent(anchorClick(event));
}

/**
 * Forwards a click on the tab-stop wrapper itself (a screen reader's
 * activation) to the `<a>` inside `root`. A click on the anchor already
 * follows it. The wrapper's click stops here, so a listener above sees one
 * click, the anchor's, as it does for a mouse click.
 */
export function activateAnchorOnClick(event: MouseEvent, root: ParentNode): void {
  const anchor = root.querySelector('a');
  if (!anchor || event.target !== event.currentTarget) {
    return;
  }
  event.stopPropagation();
  anchor.dispatchEvent(anchorClick(event));
}

/* A bare anchor.click() would drop the modifiers a native activation
   honours (Cmd/Ctrl+Enter = new tab, Shift+Enter = new window). */
function anchorClick(event: KeyboardEvent | MouseEvent): MouseEvent {
  return new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    composed: true,
    view: window,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    metaKey: event.metaKey
  });
}

/**
 * The wrapper's tabindex: -1 if the consumer's `elementProps.tabIndex` is
 * -1 (it can't go on the anchor, which stays at -1), else 0. Positive
 * values aren't honoured -- LWC templates only allow 0 or -1 in a
 * `tabindex` binding. Undefined -- no tab stop at all -- when the wrapper
 * isn't currently a link.
 */
export function resolveTabStopIndex(elementProps: Record<string, unknown>, isLink: boolean): string | undefined {
  if (!isLink) {
    return undefined;
  }
  return Number(elementProps.tabIndex) === -1 ? '-1' : '0';
}

/** Drops `tabIndex` from resolved elementProps -- see resolveTabStopIndex. */
export function withoutTabIndex(resolved: Record<string, unknown>): Record<string, unknown> {
  const { tabIndex: _tabIndex, ...rest } = resolved;
  return rest;
}
