import { slotHasContent } from '../textSlots';

describe('slotHasContent', () => {
  const slotWith = (...nodes: Node[]) => ({ assignedNodes: () => nodes }) as unknown as HTMLSlotElement;

  it('counts an element or non-blank text', () => {
    expect(slotHasContent(slotWith(document.createElement('span')))).toBe(true);
    expect(slotHasContent(slotWith(document.createTextNode(' Email ')))).toBe(true);
  });

  it('ignores whitespace and comments', () => {
    expect(slotHasContent(slotWith())).toBe(false);
    expect(slotHasContent(slotWith(document.createTextNode('\n  ')))).toBe(false);
    expect(slotHasContent(slotWith(document.createComment('note')))).toBe(false);
  });
});
