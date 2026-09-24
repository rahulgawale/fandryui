/* The elementProps object each component last warned about, so a warning is
   logged once per distinct object rather than on every render. */
const lastWarned = new WeakMap<object, Record<string, unknown>>();

/**
 * Filters an `elementProps`-style prop (spread onto a native element via
 * `lwc:spread`) so it can't clobber a prop the component itself already
 * controls -- e.g. `elementProps={ checked: false }` desyncing a
 * checkbox's rendered state from its own `checked` @api field. A rejected
 * key is dropped, not silently: this warns once per distinct
 * `elementProps` object reference (not on every re-render) naming exactly
 * which keys were ignored.
 *
 * `owner` is the component (usually `this`), which the warn-once memory is
 * kept for. `propName` only affects the warning text -- pass it when the
 * prop being spread isn't literally called `elementProps` (e.g.
 * fandry-table's `sortButtonProps`).
 */
export function resolveElementProps(
  owner: object,
  elementProps: Record<string, unknown>,
  reservedKeys: string[],
  componentTag: string,
  propName = 'elementProps'
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  const rejectedKeys: string[] = [];

  for (const [key, value] of Object.entries(elementProps)) {
    if (reservedKeys.includes(key)) {
      rejectedKeys.push(key);
    } else {
      result[key] = value;
    }
  }

  if (rejectedKeys.length && lastWarned.get(owner) !== elementProps) {
    lastWarned.set(owner, elementProps);
    // eslint-disable-next-line no-console
    console.warn(
      `${componentTag}: ${propName} included ${rejectedKeys.map((key) => `"${key}"`).join(', ')}, which ${componentTag} already controls via its own @api props -- ignored to avoid desyncing its state.`
    );
  }

  return result;
}
