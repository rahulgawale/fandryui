/*
  Shared by every field that shows an error under its control (input,
  textarea, select, combobox, lookup). The error is text like the help
  text: an `error-text` prop, or an `error-text` slot for markup. There is
  no `invalid` flag to keep in step with it -- a field with error text is
  invalid.

  The wrapper is a polite live region, so the error is read out when it
  appears and again, as the control's description, when the control is
  focused. It stays in the page while empty rather than `hidden`: a screen
  reader announces text put into a region it already knows, not a region
  that turns up together with its text.
*/

/**
 * Whether the field is invalid: it has error text, or the page marked it
 * through `elementProps` (`ariaInvalid: 'true'`, for an error shown
 * somewhere else).
 */
export function fieldInvalid(hasErrorText: boolean, elementProps: Record<string, unknown> | undefined): boolean {
  return hasErrorText || String(elementProps?.ariaInvalid) === 'true';
}

/** The control's `aria-describedby`: the error first, then the help text. Null while there is neither. */
export function fieldDescribedBy(hasErrorText: boolean, hasHelpText: boolean): string | null {
  return [hasErrorText ? 'error-text' : '', hasHelpText ? 'help-text' : ''].filter(Boolean).join(' ') || null;
}

/**
 * `elementProps` without `ariaInvalid`: the template sets aria-invalid from
 * `fieldInvalid`, and the spread must not set it back.
 */
export function withoutAriaInvalid(elementProps: Record<string, unknown>): Record<string, unknown> {
  const { ariaInvalid: _ariaInvalid, ...rest } = elementProps;
  return rest;
}
