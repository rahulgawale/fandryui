import { LightningElement } from 'lwc';

interface SwipeElement extends HTMLElement {
  close(): void;
}

export default class DemoSwipe extends LightningElement {
  handleArchive(event: Event) {
    // A button in a slotted action: close the row it belongs to.
    (event.currentTarget as HTMLElement).closest<SwipeElement>('fandry-swipe')?.close();
  }
}
