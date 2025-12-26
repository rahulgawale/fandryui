import { LightningElement } from "lwc";
import baseStyles from "./base.css";

/**
 * Base - Base class for all Fandry UI components
 * Provides shared styles (tokens + base) to all fd-* primitives
 */
export default class Base extends LightningElement {
  static stylesheets = [baseStyles];
}
