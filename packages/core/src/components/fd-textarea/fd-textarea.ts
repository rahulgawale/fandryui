import { LightningElement, api } from "lwc";
import type { FdInputSize, FdInputVariant } from "../fd-input/fd-input";

import "../../vendor/web-awesome/dist/textarea/textarea.js";
export type FdTextareaResize = "none" | "vertical" | "horizontal" | "auto";

export default class FdTextarea extends LightningElement {
  @api value = "";
  @api label = "";
  @api placeholder = "";
  @api size: FdInputSize = "md";
  @api variant: FdInputVariant = "outline";
  @api disabled = false;
  @api readonly = false;
  @api required = false;
  @api resize: FdTextareaResize = "vertical";
  @api rows = 3;

  get mappedSize(): "small" | "medium" | "large" {
    if (this.size === "sm") return "small";
    if (this.size === "lg") return "large";
    return "medium";
  }

  get hasLabel(): boolean {
    return !!this.label || !!this.template.querySelector('[slot="label"]');
  }

  get hasHelp(): boolean {
    return !!this.template.querySelector('[slot="help"]');
  }

  handleInput(e: Event) {
    const value = (e.target as HTMLTextAreaElement).value;
    this.value = value;

    this.dispatchEvent(
      new CustomEvent<string>("input", {
        detail: value,
        bubbles: true,
        composed: true,
      })
    );
  }

  handleChange(e: Event) {
    const value = (e.target as HTMLTextAreaElement).value;

    this.dispatchEvent(
      new CustomEvent<string>("change", {
        detail: value,
        bubbles: true,
        composed: true,
      })
    );
  }
}
