import { LightningElement } from "lwc";
import baseStyles from "./base.css";
import { resolveElementProps } from "fandry/elementProps";
import { activateAnchorOnEnter, resolveTabStopIndex, withoutTabIndex } from "fandry/anchorTabStop";

/**
 * Base - Base class for all Fandry UI components
 * Provides shared styles (tokens + base) to all fandry-* primitives, and
 * nothing else: behavior shared by a few components lives in its own module
 * (fandry/motion, fandry/elementProps, fandry/anchorTabStop, fandry/parts),
 * which a component imports when it needs it.
 */
export default class Base extends LightningElement {
  static stylesheets = [baseStyles];

  /** @deprecated Import `activateAnchorOnEnter` from fandry/anchorTabStop and pass `this.template`. */
  protected activateAnchorOnEnter(event: KeyboardEvent): void {
    activateAnchorOnEnter(event, this.template);
  }

  /** @deprecated Import `resolveTabStopIndex` from fandry/anchorTabStop. */
  protected resolveTabStopIndex(elementProps: Record<string, unknown>, isLink: boolean): string | undefined {
    return resolveTabStopIndex(elementProps, isLink);
  }

  /** @deprecated Import `withoutTabIndex` from fandry/anchorTabStop. */
  protected withoutTabIndex(resolved: Record<string, unknown>): Record<string, unknown> {
    return withoutTabIndex(resolved);
  }

  /** @deprecated Import `resolveElementProps` from fandry/elementProps and pass `this` first. */
  protected resolveElementProps(
    elementProps: Record<string, unknown>,
    reservedKeys: string[],
    componentTag: string,
    propName = "elementProps"
  ): Record<string, unknown> {
    return resolveElementProps(this, elementProps, reservedKeys, componentTag, propName);
  }
}
