import { LightningElement } from "lwc";
import baseStyles from "./base.css";

/**
 * Base - Base class for all Fandry UI components
 * Provides shared styles (tokens + base) to all fandry-* primitives
 */
export default class Base extends LightningElement {
  static stylesheets = [baseStyles];

  private lastWarnedElementProps: Record<string, unknown> | null = null;

  /**
   * Shared plumbing for components that wrap a real `<a href>` in a
   * `.tab-stop` element (fandry-link, fandry-sidebar-item,
   * fandry-breadcrumb-item). Safari, without "Press Tab to highlight each
   * item on a webpage" enabled, never plain-Tabs to an `<a href>` -- and
   * unlike native form controls, an explicit tabindex doesn't override that
   * for links. A non-link wrapper with tabindex="0" is tabbable regardless,
   * so it takes the tab stop (the anchor itself stays tabindex="-1" and
   * aria-hidden, with the wrapper carrying role="link" and the anchor's
   * state) and forwards Enter to the anchor, as a native link would.
   */
  protected activateAnchorOnEnter(event: KeyboardEvent): void {
    if (event.key !== "Enter" || event.target !== event.currentTarget) {
      return;
    }
    // A bare anchor.click() would drop the modifiers a native Enter-on-link
    // honours (Cmd/Ctrl+Enter = new tab, Shift+Enter = new window).
    this.template.querySelector("a")?.dispatchEvent(
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        composed: true,
        view: window,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
        metaKey: event.metaKey
      })
    );
  }

  /**
   * The wrapper's tabindex: -1 if the consumer's `elementProps.tabIndex` is
   * -1 (it can't go on the anchor, which stays at -1), else 0. Positive
   * values aren't honoured -- LWC templates only allow 0 or -1 in a
   * `tabindex` binding. Undefined -- no tab stop at all -- when the wrapper
   * isn't currently a link.
   */
  protected resolveTabStopIndex(elementProps: Record<string, unknown>, isLink: boolean): string | undefined {
    if (!isLink) {
      return undefined;
    }
    return Number(elementProps.tabIndex) === -1 ? "-1" : "0";
  }

  /** Drops `tabIndex` from resolved elementProps -- see resolveTabStopIndex. */
  protected withoutTabIndex(resolved: Record<string, unknown>): Record<string, unknown> {
    const { tabIndex: _tabIndex, ...rest } = resolved;
    return rest;
  }

  /**
   * Filters an `elementProps`-style prop (spread onto a native element via
   * `lwc:spread`) so it can't clobber a prop the component itself already
   * controls -- e.g. `elementProps={ checked: false }` desyncing a
   * checkbox's rendered state from its own `checked` @api field. A
   * rejected key is dropped, not silently: this warns once per distinct
   * `elementProps` object reference (not on every re-render) naming
   * exactly which keys were ignored.
   *
   * `propName` only affects the warning text -- pass it when the prop
   * being spread isn't literally called `elementProps` (e.g. fandry-table's
   * `sortButtonProps`).
   */
  protected resolveElementProps(
    elementProps: Record<string, unknown>,
    reservedKeys: string[],
    componentTag: string,
    propName = "elementProps"
  ): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    const rejectedKeys: string[] = [];

    for (const [key, value] of Object.entries(elementProps)) {
      if (reservedKeys.includes(key)) {
        rejectedKeys.push(key);
      } else {
        result[key] = value;
      }
    }

    if (rejectedKeys.length && elementProps !== this.lastWarnedElementProps) {
      this.lastWarnedElementProps = elementProps;
      // eslint-disable-next-line no-console
      console.warn(
        `${componentTag}: ${propName} included ${rejectedKeys.map((key) => `"${key}"`).join(", ")}, which ${componentTag} already controls via its own @api props -- ignored to avoid desyncing its state.`
      );
    }

    return result;
  }
}
