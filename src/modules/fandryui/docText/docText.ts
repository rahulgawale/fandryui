import { LightningElement, api } from 'lwc';
import { componentHrefForTag } from 'fandryui/componentLinks';

export interface TextSegment {
  key: string;
  text: string;
  code: boolean;
  /** Set on a mention of a component that has a page: the link to it. */
  href?: string;
}

export interface LinkOptions {
  /** The slug of the page's own component, which is never linked. */
  current?: string;
}

// Splits docs copy on backticks: `like this` becomes a code segment. An
// unclosed backtick stays literal text.
export function toSegments(text = '', links?: LinkOptions): TextSegment[] {
  const parts = text.split('`');
  if (parts.length % 2 === 0) {
    parts.splice(-2, 2, `${parts[parts.length - 2]}\`${parts[parts.length - 1]}`);
  }
  const segments = parts
    .map((part, index) => ({ key: String(index), text: part, code: index % 2 === 1 }))
    .filter((segment) => segment.text);
  return links ? linkComponents(segments, links) : segments;
}

/* Each component a text names (`fandry-select`, or plain fandry-select)
   links to its page, the first time only: one link per name is enough. */
function linkComponents(segments: TextSegment[], { current = '' }: LinkOptions): TextSegment[] {
  const linked = new Set<string>(current ? [`fandry-${current}`] : []);
  const hrefFor = (tag: string) => {
    const href = linked.has(tag) ? '' : componentHrefForTag(tag);
    if (href) linked.add(tag);
    return href;
  };
  return segments.flatMap((segment) => {
    if (segment.code) {
      const href = hrefFor(segment.text);
      return href ? [{ ...segment, href }] : [segment];
    }
    const pieces = segment.text.split(/(fandry-[a-z]+(?:-[a-z]+)*)/);
    if (pieces.length === 1) return [segment];
    return pieces
      .map((piece, index) => {
        const href = index % 2 === 1 ? hrefFor(piece) : '';
        const key = `${segment.key}.${index}`;
        return href ? { key, text: piece, code: false, href } : { key, text: piece, code: false };
      })
      .filter((piece) => piece.text);
  });
}

/* Light DOM, so the <code> it renders is styled by the page around it
   (docStyles), like markup written straight into that page's template. */
export default class DocText extends LightningElement {
  static renderMode = 'light';

  @api text = '';
  /** Links each component the text names to its page. Off where the text sits inside a link already. */
  @api links = false;
  /** The page's own component (its slug), which `links` leaves alone. */
  @api current = '';

  get segments(): TextSegment[] {
    return toSegments(this.text, this.links ? { current: this.current } : undefined);
  }
}
