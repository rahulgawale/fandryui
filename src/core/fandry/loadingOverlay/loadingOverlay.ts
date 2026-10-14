import FdLoadingOverlayState from 'fandry/loadingOverlayState';

/*
  "This page, or this panel, is busy": a backdrop that blocks the pointer and
  the keyboard, and a panel with a spinner and a label. Not a dialog: it
  takes no focus, has nothing to close and asks nothing. The behavior is
  fandry/loadingOverlayState; this adds the ready-made template.
*/
export default class FdLoadingOverlay extends FdLoadingOverlayState {}
