// Enter/exit lifecycle for transient fandry-* UI (popover, dialog, tooltip,
// toast) -- ENTERING -> OPEN -> EXITING -> REMOVED -- without a state
// machine. CSS already owns the visual half (see base/motion.css): the panel
// plays its entrance the moment it's mounted, and plays its exit when it
// gains a `--closing` class. The one thing CSS can't do is keep the element
// in the DOM until that exit has played, so a component tracks just that:
//
//   open (logical state)   isMounted (in the DOM)   phase
//   false                  false                    REMOVED
//   true                   true                     ENTERING -> OPEN
//   false                  true                     EXITING
//
// On close: leave `isMounted` true, add the `--closing` class, and once
// rendered, `await exitFinished(panel)` and only then set `isMounted = false`
// -- provided the component wasn't reopened in the meantime.
//
// Deliberately not `animationend`: that never fires if a consumer overrides
// the animation to `none` or an ancestor is `display: none`, which would
// strand the element in the DOM forever, and it also bubbles up from
// unrelated animating descendants. `Animation.finished` (native Web
// Animations API) settles either way: when the animation finishes, when it's
// cancelled (a reopen swaps the animation out), or immediately when there
// isn't one.

export function exitFinished(element: Element | null | undefined): Promise<unknown> {
  if (!element || typeof element.getAnimations !== 'function') {
    return Promise.resolve();
  }

  // `subtree` also covers the panel's own shadow-tree descendants (e.g.
  // fandry-dialog's backdrop *and* panel animate independently). Slotted
  // consumer content isn't a descendant here, so a consumer's own looping
  // animation (e.g. a fandry-spinner in the body) can't hold the exit open.
  return Promise.allSettled(
    element.getAnimations({ subtree: true }).map((animation) => animation.finished)
  );
}
