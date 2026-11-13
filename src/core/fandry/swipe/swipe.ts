import { api } from 'lwc';
import Base from 'fandry/base';
import { partList } from 'fandry/parts';

export type FdSwipeSide = 'start' | 'end';

export interface FdSwipeChangeDetail {
  /** The side now showing its actions, or '' when closed. */
  open: FdSwipeSide | '';
}

/* Distances are CSS pixels: they describe the hand, not the design, so they
   aren't tokens (as in fandry/mediaGestures). */
const DRAG_SLOP = 8;
/* A drag that opens an action side past this share of its width. */
const OPEN_RATIO = 0.4;

/* Content that slides sideways to show actions behind it: the swipe actions
   of a list row, or a full-page panel pulled aside. The actions are slotted
   (`start` / `end`), so they are anything; the swipe only moves the
   content and keeps the actions out of reach until they show. For a mouse
   or keyboard, the page slots a button into `start-trigger` / `end-trigger`
   and a click on it opens that side. */
export default class FdSwipe extends Base {
  private _open: FdSwipeSide | '' = '';

  /* The side showing its actions: 'start', 'end', or '' (closed). Like a
     native control it updates as the user swipes and `change` reports it.
     A side with nothing slotted can't open. */
  @api
  get open(): FdSwipeSide | '' {
    return this._open;
  }

  set open(value: FdSwipeSide | '') {
    this._open = value === 'start' || value === 'end' ? value : '';
  }

  // Kept in step by renderedCallback; a reactive field so a measured width re-renders.
  private startWidth = 0;
  private endWidth = 0;
  private hasStart = false;
  private hasEnd = false;
  private hasStartTrigger = false;
  private hasEndTrigger = false;

  private dragging = false;
  private dragOffset = 0;
  private pointerId: number | null = null;
  private startX = 0;
  private startOffset = 0;
  private moved = false;
  private swallowClick = false;
  private listening: Element | null = null;

  /** Shows `side`'s actions. Does nothing for a side with no actions. */
  @api
  reveal(side: FdSwipeSide) {
    this.settle(side);
  }

  /** Slides the content back over the actions. */
  @api
  close() {
    this.settle('');
  }

  renderedCallback() {
    // Capture, so a tap on open content closes it before the page's own handler runs.
    const content = this.refs?.content;
    if (content && content !== this.listening) {
      this.listening?.removeEventListener('click', this.handleClickCapture, true);
      content.addEventListener('click', this.handleClickCapture, true);
      this.listening = content;
    }
    const start = this.measure('.actions--start');
    const end = this.measure('.actions--end');
    if (start !== this.startWidth || end !== this.endWidth) {
      this.startWidth = start;
      this.endWidth = end;
    }
  }

  private measure(selector: string): number {
    const el = this.template.querySelector(selector) as HTMLElement | null;
    return el && !el.hidden ? el.getBoundingClientRect().width : 0;
  }

  handleSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    const filled = slot.assignedNodes().length > 0;
    if (slot.name === 'start') this.hasStart = filled;
    else if (slot.name === 'end') this.hasEnd = filled;
    else if (slot.name === 'start-trigger') this.hasStartTrigger = filled;
    else this.hasEndTrigger = filled;
    // An emptied side can't stay open.
    if (!filled && this._open === slot.name) this.settle('');
  };

  /* ---- Rendering ---- */

  private get rtl(): boolean {
    return typeof getComputedStyle === 'function' && getComputedStyle(this.template.host).direction === 'rtl';
  }

  // Positive pushes the content toward the end edge, which reveals `start`.
  private get restOffset(): number {
    const sign = this.rtl ? -1 : 1;
    if (this._open === 'start') return sign * this.startWidth;
    if (this._open === 'end') return -sign * this.endWidth;
    return 0;
  }

  get offset(): number {
    return this.dragging ? this.dragOffset : this.restOffset;
  }

  get contentStyle(): string {
    return `--_fd-swipe-x: ${this.offset}px`;
  }

  get noStart(): boolean {
    return !this.hasStart;
  }

  get noEnd(): boolean {
    return !this.hasEnd;
  }

  get noStartTrigger(): boolean {
    return !this.hasStartTrigger;
  }

  get noEndTrigger(): boolean {
    return !this.hasEndTrigger;
  }

  get startClass(): string {
    return this._open === 'start' ? 'actions actions--start' : 'actions actions--start actions--closed';
  }

  get endClass(): string {
    return this._open === 'end' ? 'actions actions--end' : 'actions actions--end actions--closed';
  }

  get basePart(): string {
    return partList('base', { start: this._open === 'start', end: this._open === 'end' });
  }

  get startPart(): string {
    return partList('actions', { start: true });
  }

  get endPart(): string {
    return partList('actions', { end: true });
  }

  get contentPart(): string {
    return partList('content', { dragging: this.dragging });
  }

  /* ---- Gesture ---- */

  handlePointerDown = (event: PointerEvent) => {
    // The mouse's primary button, or a finger or pen.
    if (this.pointerId !== null || (event.pointerType === 'mouse' && event.button !== 0)) return;
    this.pointerId = event.pointerId;
    this.startX = event.clientX;
    this.startOffset = this.restOffset;
    this.moved = false;
  };

  handlePointerMove = (event: PointerEvent) => {
    if (event.pointerId !== this.pointerId) return;
    const dx = event.clientX - this.startX;
    if (!this.moved) {
      if (Math.abs(dx) < DRAG_SLOP) return;
      this.moved = true;
      this.dragging = true;
      (event.currentTarget as HTMLElement).setPointerCapture?.(event.pointerId);
    }
    this.dragOffset = this.clamp(this.startOffset + dx);
  };

  handlePointerUp = (event: PointerEvent) => {
    if (event.pointerId !== this.pointerId) return;
    this.pointerId = null;
    if (!this.moved) return;
    // The click that follows this release; if none comes, don't eat the next real one.
    this.swallowClick = true;
    setTimeout(() => {
      this.swallowClick = false;
    }, 0);
    this.dragging = false;
    this.settle(this.sideFor(this.dragOffset));
  };

  handlePointerCancel = (event: PointerEvent) => {
    if (event.pointerId !== this.pointerId) return;
    this.pointerId = null;
    this.dragging = false;
  };

  /* A drag ends in a click on whatever is under the finger; it is not a tap.
     A tap on open content closes it instead of reaching the page. */
  handleClickCapture = (event: Event) => {
    if (this.swallowClick) {
      this.swallowClick = false;
      event.stopPropagation();
      event.preventDefault();
    } else if (this._open) {
      event.stopPropagation();
      event.preventDefault();
      this.settle('');
    }
  };

  /* A click on the slotted `start-trigger` / `end-trigger` opens that side.
     (When a side is already open, handleClickCapture has closed it first.) */
  handleStartTrigger = () => this.settle('start');

  handleEndTrigger = () => this.settle('end');

  handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._open) {
      event.stopPropagation();
      this.settle('');
    }
  };

  // How far the content can go: not past an action side's width, nor toward a side with none.
  private clamp(offset: number): number {
    const sign = this.rtl ? -1 : 1;
    const toStart = this.hasStart ? this.startWidth : 0;
    const toEnd = this.hasEnd ? this.endWidth : 0;
    const max = sign > 0 ? toStart : toEnd;
    const min = sign > 0 ? -toEnd : -toStart;
    return Math.min(Math.max(offset, min), max);
  }

  // The side a released drag settles on: open past OPEN_RATIO of its width.
  private sideFor(offset: number): FdSwipeSide | '' {
    const towardStart = this.rtl ? -offset : offset;
    if (towardStart > 0 && this.startWidth && towardStart >= this.startWidth * OPEN_RATIO) return 'start';
    if (towardStart < 0 && this.endWidth && -towardStart >= this.endWidth * OPEN_RATIO) return 'end';
    return '';
  }

  private settle(side: FdSwipeSide | '') {
    if (side === 'start' && !this.hasStart) side = '';
    if (side === 'end' && !this.hasEnd) side = '';
    if (side === this._open) {
      // Re-render so a released drag eases back to rest.
      this.dragOffset = 0;
      return;
    }
    this._open = side;
    this.dragOffset = 0;
    this.dispatchEvent(new CustomEvent<FdSwipeChangeDetail>('change', { detail: { open: side }, bubbles: true }));
  }
}
