import { api, track } from 'lwc';
import Base from 'fd/base';

// See fd-checkbox's checkbox.ts for why this list exists: it keeps a
// consumer's `elementProps` from clobbering a property the component
// itself controls.
const RESERVED_ELEMENT_PROPS = ['src', 'alt', 'class', 'onerror'];

export default class Avatar extends Base {
  @api alt = '';
  @api initials = '';
  @api size: 'sm' | 'md' | 'lg' = 'md';

  // Spread onto the native <img> via `lwc:spread` -- see checkbox.ts for
  // why this can't reach `data-*` attributes, and why that's not solved
  // with a dedicated prop either.
  @api elementProps: Record<string, unknown> = {};

  private lastWarnedElementProps: Record<string, unknown> | null = null;

  @track imageFailed = false;

  get resolvedElementProps(): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    const rejectedKeys: string[] = [];

    for (const [key, value] of Object.entries(this.elementProps)) {
      if (RESERVED_ELEMENT_PROPS.includes(key)) {
        rejectedKeys.push(key);
      } else {
        result[key] = value;
      }
    }

    if (rejectedKeys.length && this.elementProps !== this.lastWarnedElementProps) {
      this.lastWarnedElementProps = this.elementProps;
      // eslint-disable-next-line no-console
      console.warn(
        `fd-avatar: elementProps included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which fd-avatar already controls via its own @api props -- ignored. Use the dedicated @api prop instead (e.g. \`src\`, \`alt\`).`
      );
    }

    return result;
  }

  _src = '';

  @api
  get src(): string {
    return this._src;
  }
  set src(value: string) {
    this._src = value;
    // A new src deserves a fresh attempt, even if a previous one failed.
    this.imageFailed = false;
  }

  get classes() {
    return ['avatar', `avatar--${this.size}`].join(' ');
  }

  get showImage(): boolean {
    return !!this.src && !this.imageFailed;
  }

  get showInitials(): boolean {
    return !this.showImage && !!this.initials;
  }

  handleImageError() {
    this.imageFailed = true;
  }
}
