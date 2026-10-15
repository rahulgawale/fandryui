import { LightningElement, api } from 'lwc';

type ComposedRangesSelection = Selection & {
  getComposedRanges?: (...args: unknown[]) => StaticRange[];
};

// The selection range as seen inside `root` (the plain Selection API stops
// at shadow boundaries). Safari 17 takes shadow roots as arguments, newer
// browsers an options object.
function composedRange(selection: ComposedRangesSelection, root: ShadowRoot): StaticRange | undefined {
  if (!selection.getComposedRanges) {
    return undefined;
  }
  try {
    return selection.getComposedRanges({ shadowRoots: [root] })[0];
  } catch {
    return selection.getComposedRanges(root)[0];
  }
}

export default class CodeBlock extends LightningElement {
  @api code = '';
  @api label = '';
  // 'tree' is the quieter surface for directory trees.
  @api variant: 'default' | 'tree' = 'default';

  get preClass(): string {
    return this.variant === 'tree' ? 'code-block tree' : 'code-block';
  }

  get hasLabel(): boolean {
    return !!this.label;
  }

  connectedCallback() {
    document.addEventListener('selectionchange', this.trimSelection);
  }

  disconnectedCallback() {
    document.removeEventListener('selectionchange', this.trimSelection);
  }

  /* A triple-click on the last line selects up to the selection stop, line
     break included, and Safari paints that across the block's full width
     and padding. End it at the code's last character instead. */
  trimSelection = () => {
    const selection = document.getSelection() as ComposedRangesSelection | null;
    const stop = this.template.querySelector('.selection-stop');
    const code = this.template.querySelector('code');
    const range = selection && composedRange(selection, this.template as unknown as ShadowRoot);
    if (!selection || !range || !code?.lastChild || range.endContainer !== stop || !code.contains(range.startContainer)) {
      return;
    }
    const text = code.lastChild;
    selection.setBaseAndExtent(range.startContainer, range.startOffset, text, text.textContent?.length ?? 0);
  };
}
