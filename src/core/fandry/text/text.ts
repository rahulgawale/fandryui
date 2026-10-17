import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export default class FdText extends Base {
  @api as: 'p' | 'span' | 'div' = 'p';
  @api size: 'xs' | 'sm' | 'md' = 'md';
  @api variant: 'default' | 'muted' = 'default';

  // One real tag per lwc:if branch; an unknown `as` renders, and is styled as, a <p>.
  get tag(): 'p' | 'span' | 'div' {
    return this.as === 'span' || this.as === 'div' ? this.as : 'p';
  }

  get isSpan(): boolean {
    return this.tag === 'span';
  }

  get isDiv(): boolean {
    return this.tag === 'div';
  }

  get classes(): string {
    return ['text', `text--${this.tag}`, `text--${this.size}`, `text--${this.variant}`].join(' ');
  }

  get basePart(): string {
    return partList('base', { [this.variant || 'default']: true });
  }
}
