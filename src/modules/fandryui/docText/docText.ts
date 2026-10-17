import { LightningElement, api } from 'lwc';

export interface TextSegment {
  key: string;
  text: string;
  code: boolean;
}

// Splits docs copy on backticks: `like this` becomes a code segment. An
// unclosed backtick stays literal text.
export function toSegments(text = ''): TextSegment[] {
  const parts = text.split('`');
  if (parts.length % 2 === 0) {
    parts.splice(-2, 2, `${parts[parts.length - 2]}\`${parts[parts.length - 1]}`);
  }
  return parts
    .map((part, index) => ({ key: String(index), text: part, code: index % 2 === 1 }))
    .filter((segment) => segment.text);
}

/* Light DOM, so the <code> it renders is styled by the page around it
   (docStyles), like markup written straight into that page's template. */
export default class DocText extends LightningElement {
  static renderMode = 'light';

  @api text = '';

  get segments(): TextSegment[] {
    return toSegments(this.text);
  }
}
