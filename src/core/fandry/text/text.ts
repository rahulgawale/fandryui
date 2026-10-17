import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export default class FdText extends Base {
  @api as: 'p' | 'span' | 'div' = 'p';
  @api size: 'xs' | 'sm' | 'md' = 'md';
  @api variant: 'default' | 'muted' = 'default';

  get classes(): string {
    return ['text', `text--${this.as}`, `text--${this.size}`, `text--${this.variant}`].join(' ');
  }

  // One real tag per lwc:if branch (an unknown `as` renders a <p>).
  get isSpan(): boolean {
    return this.as === 'span';
  }

  get isDiv(): boolean {
    return this.as === 'div';
  }

  get basePart(): string {
    return partList('base', { [this.variant || 'default']: true });
  }
}
