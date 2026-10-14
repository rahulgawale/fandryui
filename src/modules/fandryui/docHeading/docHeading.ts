import { LightningElement, api } from 'lwc';

export function toAnchor(text = ''): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/* A docs section heading with a permalink. A #fragment can't find an element
   inside a shadow root, so the heading scrolls itself into view when the
   URL's hash names it: on load, and on every hashchange (its own link, a
   table of contents, back/forward). */
export default class DocHeading extends LightningElement {
  @api level: 2 | 3 = 2;
  @api text = '';
  @api anchor = '';

  private scrolledOnLoad = false;

  get resolvedAnchor(): string {
    return this.anchor || toAnchor(this.text);
  }

  get href(): string {
    return `#${this.resolvedAnchor}`;
  }

  get headingClass(): string {
    return `heading heading--${this.level}`;
  }

  connectedCallback() {
    window.addEventListener('hashchange', this.syncToHash);
  }

  disconnectedCallback() {
    window.removeEventListener('hashchange', this.syncToHash);
  }

  renderedCallback() {
    if (!this.scrolledOnLoad) {
      this.scrolledOnLoad = true;
      // After the rest of the page has rendered above it.
      requestAnimationFrame(this.syncToHash);
    }
  }

  syncToHash = () => {
    if (decodeURIComponent(window.location.hash.slice(1)) === this.resolvedAnchor) {
      // `this` is the component, not the host element: scroll what it renders.
      this.template.querySelector('.row')?.scrollIntoView({ block: 'start' });
    }
  };
}
