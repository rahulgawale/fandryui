import { api } from 'lwc';
import Base from 'fandry/base';

export default class FdHeading extends Base {
  private _level: 1 | 2 | 3 | 4 | 5 | 6 = 2;

  // A getter/setter pair (rather than a plain @api field) because a static
  // template attribute (e.g. `level="3"`) is always a string -- LWC only
  // auto-coerces Boolean-defaulted @api props from bare attributes, so a
  // Number-defaulted one like this needs its own coercion or callers get a
  // string silently miscast as this union type.
  @api
  get level(): 1 | 2 | 3 | 4 | 5 | 6 {
    return this._level;
  }

  set level(value: 1 | 2 | 3 | 4 | 5 | 6) {
    this._level = Number(value) as 1 | 2 | 3 | 4 | 5 | 6;
  }

  // One real h1-h6 per lwc:if branch: a tag name can't be interpolated, and
  // LWC allows the same slot once in each branch of an if/elseif chain.
  get isLevel1(): boolean {
    return this.level === 1;
  }

  get isLevel2(): boolean {
    return this.level === 2;
  }

  get isLevel3(): boolean {
    return this.level === 3;
  }

  get isLevel4(): boolean {
    return this.level === 4;
  }

  get isLevel5(): boolean {
    return this.level === 5;
  }

  get classes(): string {
    return ['heading', `heading--${this.level}`].join(' ');
  }
}
