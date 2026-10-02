/*
  Shared by every component whose label, help text or title can come from a
  slot as well as a prop. The wrapper stays in the DOM (hidden while empty)
  so its slot is always there to be filled; the component tracks which of
  its slots have content and shows the wrapper when either the prop or the
  slot does.
*/

/** Whether `slot` has content a page put there: an element or non-blank text, not a comment. */
export function slotHasContent(slot: HTMLSlotElement): boolean {
  return slot
    .assignedNodes()
    .some((node) => node.nodeType === Node.ELEMENT_NODE || (node.nodeType === Node.TEXT_NODE && !!node.textContent?.trim()));
}
