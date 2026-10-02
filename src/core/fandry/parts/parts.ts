/**
 * A `part` attribute value: the part's name, then the name of every state
 * that is on. `partList('control', { checked: true, disabled: false })` is
 * `'control checked'`, which a page styles with
 * `fandry-checkbox::part(control checked)` -- ::part() with several names
 * matches only an element that has all of them.
 *
 * States are the same words everywhere (checked, selected, active,
 * disabled, a variant's name, ...), so a site learns them once.
 */
export function partList(name: string, states: Record<string, unknown> = {}): string {
  return [name, ...Object.keys(states).filter((state) => states[state])].join(' ');
}
