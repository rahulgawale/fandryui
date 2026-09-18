import { LightningElement } from 'lwc';

export default class DemoMenu extends LightningElement {
  menuOpen = false;
  lastSelection = '';

  // fandry-popover deliberately sets no aria-haspopup/expanded on its own
  // slotted trigger (see popover.html) -- this app wires it directly onto
  // the fandry-button trigger via elementProps, same as the kitchen-sink
  // menu example.
  get menuTriggerProps(): Record<string, unknown> {
    return { tabIndex: 0, ariaHasPopup: 'menu', ariaExpanded: this.menuOpen };
  }

  handleToggle(event: CustomEvent<boolean>) {
    this.menuOpen = event.detail;
  }

  handleSelect(event: CustomEvent<{ value: string }>) {
    this.lastSelection = event.detail.value;
    this.menuOpen = false;
  }
}
