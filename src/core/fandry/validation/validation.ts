/*
  Validation for the native text controls (input, textarea). The rules are
  the browser's own: `required`, `type`, `pattern`, `minlength`, `maxlength`,
  `min`, `max` and `step` on the native control, read back through its
  ValidityState. The browser also words the message, in the user's language.

  What a site adds is simple: a `messages` prop to word a failed rule
  itself (keyed by ValidityState name, as Radix's `<Form.Message match>`
  is), and a `validate` function for a rule the browser has no attribute
  for. `validate` is run into `setCustomValidity`, so a custom rule is a
  `customError` on the same ValidityState and nothing else needs to know
  the difference.

  The error is shown once the field has been left or `reportValidity()` was
  called, and follows the value from then on. A server's verdict is not a
  rule the browser can check: it is `error-text`, which wins.
*/

/** Every way a native control can fail, in the order the message is chosen. */
export const VALIDITY_KEYS = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'tooLong',
  'rangeUnderflow',
  'rangeOverflow',
  'stepMismatch',
  'badInput',
  'customError'
] as const;

export type FdValidityKey = (typeof VALIDITY_KEYS)[number];

/**
 * Text for the rules a site wants to word itself, e.g.
 * `{ valueMissing: 'Enter your email.' }`. A rule with no entry shows the
 * browser's own message. `customError` is not listed: that message is the
 * one `validate` returned.
 */
export type FdValidationMessages = Partial<Record<Exclude<FdValidityKey, 'customError'>, string>>;

/**
 * `(value) => message` -- a rule the browser has no attribute for. Return the
 * error text, or nothing when the value is fine. Called only for a value that
 * is not empty (`required` covers empty), like every native rule.
 */
export type FdValidate = (value: string) => string | null | undefined | void;

/** The part of a native input/textarea that validation reads and writes. */
export type FdValidatable = Pick<HTMLInputElement, 'value' | 'validity' | 'validationMessage' | 'setCustomValidity'>;

/** The first rule the control fails, or null while it is valid. */
export function failedRule(validity: ValidityState): FdValidityKey | null {
  if (validity.valid) return null;
  return VALIDITY_KEYS.find((key) => validity[key]) ?? null;
}

/**
 * Runs `validate` into the control, then returns the message for the first
 * failed rule ('' while valid): the site's own wording, else the browser's.
 */
export function validationText(
  control: FdValidatable,
  validate: FdValidate | undefined,
  messages: FdValidationMessages | undefined
): string {
  const message = control.value !== '' && validate ? validate(control.value) : '';
  control.setCustomValidity(message || '');

  const rule = failedRule(control.validity);
  if (!rule) return '';
  if (rule === 'customError') return control.validationMessage;
  return messages?.[rule] || control.validationMessage;
}
