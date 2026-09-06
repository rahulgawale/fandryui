import { api, track } from 'lwc';
import Base from 'fd/base';

export default class Avatar extends Base {
  @api alt = '';
  @api initials = '';
  @api size: 'sm' | 'md' | 'lg' = 'md';

  @track imageFailed = false;

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
