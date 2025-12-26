import { LightningElement, api } from "lwc";

export type FdInputSize = "sm" | "md" | "lg";
export type FdInputVariant = "outline" | "filled";

export default class FdInput extends LightningElement {
  @api value = "";
  @api type: string = "text";
  @api label = "";
  @api size: FdInputSize = "md";
  @api variant: FdInputVariant = "outline";
  @api disabled = false;
  @api readonly = false;
  @api required = false;
  @api clearable = false;

  get mappedSize(): "small" | "medium" | "large" {
    if (this.size === "sm") return "small";
    if (this.size === "lg") return "large";
    return "medium";
  }

  handleInput(e: Event) {
    const value = (e.target as HTMLInputElement).value;
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
    const value = (e.target as HTMLInputElement).value;

    this.dispatchEvent(
      new CustomEvent<string>("change", {
        detail: value,
        bubbles: true,
        composed: true,
      })
    );
  }
}
