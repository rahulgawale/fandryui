import { api, track } from 'lwc';
import Base from 'fandry/base';
import type { FdFormField } from 'fandry/formField';
import { toBoolean } from 'fandry/formField';

export type FdFormValues = Record<string, unknown>;
export type FdFormMode = 'read' | 'edit';
export type FdFormErrors = Record<string, string | undefined>;

export interface FdFormRenderField {
  name: string;
  field: FdFormField;
  value: unknown;
  error: string;
}

export interface FdFormStatus {
  variant: 'info' | 'success' | 'danger';
  message: string;
}

// `CSS.escape` isn't universally available (missing in this project's jsdom
// test environment, and not something to trust on Salesforce either), and a
// double-quoted CSS attribute selector only needs its own quote and
// backslash escaped -- so that's done by hand instead of depending on it.
function escapeAttrValue(value: string): string {
  return value.replace(/[\\"]/g, (char) => `\\${char}`);
}

/**
 * FdFormState is the behavior behind the form block, with no template of its
 * own: which fields exist, what the user has changed, when an error is shown,
 * the read/edit switch and the save workflow around a `saveValues` hook.
 * fandry-form is this class plus the ready-made markup; a consumer who wants
 * other markup extends this class and writes their own template, rendering
 * each of `renderFields` with fandry-form-field or with their own controls
 * (see FdDataTableState for the same seam in the data-table block).
 *
 * Data is controlled: this component never edits `values`. What the user
 * types is a draft over it, and a successful save is reported through `save`
 * for the consumer to put into the `values` it passes back in.
 *
 * Validation, in the order it runs:
 *   1. per field: `required`, then the field's own `validate`
 *   2. once every field passes, the form-level `validate` hook (cross-field
 *      rules, or a check that needs the server)
 * An error is shown once its field has been left or a save was attempted, and
 * follows the value from then on.
 */
export default class FdFormState extends Base {
  @api fields: FdFormField[] = [];

  /** The saved values, `{ [field.name]: value }`. Keys with no field are passed through to `saveValues` untouched. */
  @api values: FdFormValues = {};

  /**
   * `edit` shows controls; `read` shows the values as text with an Edit
   * action. Set it to choose where the form starts (or to switch it from
   * outside); the form keeps it up to date as the user moves between the two
   * and reports each change through `modechange`.
   *
   * A form that was opened for reading goes back to `read` after Cancel or a
   * successful save. A form that starts in `edit` stays there: it has no
   * "before" to go back to.
   */
  @api mode: FdFormMode = 'edit';

  /**
   * `(values, changes) => Promise<values | void>` -- persist the form.
   * `values` is every value, with the user's edits applied; `changes` holds
   * only the fields that differ from `values` as passed in. Resolve to the
   * saved values (e.g. the server's response) or nothing; reject with an
   * Error to stay in edit mode and show `error.message` above the actions.
   * Without a hook the edit is accepted as it is. A form that was opened for
   * reading does not call it when nothing changed.
   */
  @api saveValues?: (values: FdFormValues, changes: FdFormValues) => Promise<FdFormValues | void>;

  /**
   * `(values) => errors | Promise<errors>` -- rules that span fields or need
   * the server. Return `{ [field.name]: message }`, or nothing when the
   * values are fine. Runs on save, after every field's own rules pass.
   */
  @api validate?: (values: FdFormValues) => FdFormErrors | void | Promise<FdFormErrors | void>;

  // What the user has typed, over `values`: so a `values` that changes while
  // the user is typing moves every field except the ones they edited.
  @track protected draft: FdFormValues = {};
  @track protected touched: Record<string, boolean> = {};
  @track protected serverErrors: Record<string, string> = {};
  @track protected submitAttempted = false;
  @track protected saving = false;
  @track protected status: FdFormStatus | null = null;

  private editedFromRead = false;
  private focusPending: 'first' | 'invalid' | null = null;

  // ---- rendering model

  get isEditing(): boolean {
    return this.mode === 'edit';
  }

  get isReading(): boolean {
    return this.mode === 'read';
  }

  get hasStatus(): boolean {
    return this.status !== null;
  }

  get statusVariant(): string {
    return this.status?.variant ?? 'info';
  }

  get statusMessage(): string {
    return this.status?.message ?? '';
  }

  get renderFields(): FdFormRenderField[] {
    // Computed once per render rather than inside visibleError/fieldError:
    // every field with its own `validate` would otherwise rebuild this same
    // merged object from scratch, on every field, on every render.
    const values = this.isEditing ? this.currentValues() : null;
    return this.fields.map((field) => ({
      name: field.name,
      field,
      value: this.rawValue(field.name),
      error: values ? this.visibleError(field, values) : ''
    }));
  }

  private get editableFields(): FdFormField[] {
    return this.fields.filter((field) => !field.readonly);
  }

  // ---- values

  private rawValue(name: string): unknown {
    return name in this.draft ? this.draft[name] : this.values[name];
  }

  // What a field holds, in the shape it is saved in, so that `12` typed into a
  // number field is the number 12 and "nothing typed" is one thing.
  private toSavedShape(field: FdFormField, value: unknown): unknown {
    switch (field.type ?? 'text') {
      case 'checkbox':
      case 'switch':
        return toBoolean(value);
      case 'number': {
        if (value === '' || value == null) return null;
        // A value that doesn't parse (e.g. dirty data like "N/A") is no more
        // a number than "nothing typed" is -- treated the same way so it
        // trips `required` instead of silently saving as NaN.
        const num = Number(value);
        return Number.isNaN(num) ? null : num;
      }
      default:
        return value == null ? '' : String(value);
    }
  }

  private isEmpty(field: FdFormField, value: unknown): boolean {
    const type = field.type ?? 'text';
    if (type === 'checkbox' || type === 'switch') return !value;
    return value === null || (typeof value === 'string' && value.trim() === '');
  }

  // `values` with the user's edits applied. Only the edited fields change
  // shape; everything else stays exactly as the consumer passed it.
  private currentValues(): FdFormValues {
    const merged: FdFormValues = { ...this.values };
    for (const field of this.fields) {
      if (field.name in this.draft) merged[field.name] = this.toSavedShape(field, this.draft[field.name]);
    }
    return merged;
  }

  private changedValues(): FdFormValues {
    const changes: FdFormValues = {};
    for (const field of this.editableFields) {
      if (!(field.name in this.draft)) continue;
      const next = this.toSavedShape(field, this.draft[field.name]);
      if (next !== this.toSavedShape(field, this.values[field.name])) changes[field.name] = next;
    }
    return changes;
  }

  // ---- validation

  // Skipped for an empty field that is not required: a blank optional email
  // is not an invalid one. `values` is the already-merged currentValues(),
  // passed in so callers that need it for several fields build it once.
  private fieldError(field: FdFormField, values: FdFormValues): string {
    const value = this.toSavedShape(field, this.rawValue(field.name));
    if (this.isEmpty(field, value)) return field.required ? this.requiredMessage(field) : '';
    return field.validate?.(value, values) || '';
  }

  private visibleError(field: FdFormField, values: FdFormValues): string {
    if (field.readonly || !(this.touched[field.name] || this.submitAttempted)) return '';
    return this.fieldError(field, values) || this.serverErrors[field.name] || '';
  }

  private firstInvalid(): FdFormField | undefined {
    const values = this.currentValues();
    return this.editableFields.find((field) => this.fieldError(field, values) || this.serverErrors[field.name]);
  }

  private async runValidateHook(): Promise<Record<string, string>> {
    const result = this.validate ? await this.validate(this.currentValues()) : undefined;
    const errors: Record<string, string> = {};
    for (const field of this.editableFields) {
      const message = result?.[field.name];
      if (message) errors[field.name] = message;
    }
    return errors;
  }

  // ---- field events

  handleFieldChange(event: CustomEvent<{ value: unknown }>) {
    event.stopPropagation();
    const name = (event.currentTarget as HTMLElement).dataset.name;
    const field = this.fields.find((candidate) => candidate.name === name);
    if (!field) return;

    const value = event.detail.value;
    // fandry-input reports `input` and then `change` for the same edit.
    if (value === this.rawValue(field.name)) return;

    this.draft = { ...this.draft, [field.name]: value };
    // A server's verdict was about the old value.
    if (this.serverErrors[field.name]) {
      const { [field.name]: _stale, ...rest } = this.serverErrors;
      this.serverErrors = rest;
    }
    this.status = null;

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { name: field.name, value: this.toSavedShape(field, value), values: this.currentValues() },
        bubbles: true
      })
    );
  }

  handleFieldBlur(event: Event) {
    event.stopPropagation();
    const name = (event.currentTarget as HTMLElement).dataset.name;
    if (name && !this.touched[name]) this.touched = { ...this.touched, [name]: true };
  }

  handleFieldSubmit(event: Event) {
    event.stopPropagation();
    void this.save();
  }

  // ---- actions

  @api
  edit() {
    if (this.isEditing || this.saving) return;
    this.editedFromRead = true;
    this.status = null;
    this.focusPending = 'first';
    this.setMode('edit');
  }

  @api
  cancel() {
    if (this.saving) return;
    this.clearDraft();
    this.status = null;
    this.dispatchEvent(new CustomEvent('cancel', { bubbles: true }));
    this.leaveEdit();
  }

  @api
  async save() {
    if (!this.isEditing || this.saving) return;

    this.submitAttempted = true;
    this.status = null;
    this.saving = true;
    try {
      // The server's last verdict was about the last attempt; ask again.
      this.serverErrors = {};
      if (!this.firstInvalid()) this.serverErrors = await this.runValidateHook();
      if (this.firstInvalid()) {
        this.focusPending = 'invalid';
        this.status = { variant: 'danger', message: this.invalidMessage() };
        return;
      }

      const changes = this.changedValues();
      // Nothing to send, but never a silent exit: the user pressed Save and
      // should hear what happened. (A form that starts in edit mode always
      // submits: it is creating something, and its defaults are the values.)
      if (this.editedFromRead && !Object.keys(changes).length) {
        this.status = { variant: 'info', message: this.noChangesMessage() };
        return;
      }

      const values = this.currentValues();
      const saved = this.saveValues ? await this.saveValues(values, changes) : undefined;
      const result = saved ?? values;

      this.clearDraft();
      this.dispatchEvent(new CustomEvent('save', { detail: { values: result, changes }, bubbles: true }));
      this.status = { variant: 'success', message: this.saveSuccessMessage() };
      this.leaveEdit();
    } catch (error) {
      this.status = { variant: 'danger', message: this.saveFailureMessage(error) };
    } finally {
      this.saving = false;
    }
  }

  handleEdit() {
    this.edit();
  }

  handleCancel() {
    this.cancel();
  }

  handleSave() {
    void this.save();
  }

  private clearDraft() {
    this.draft = {};
    this.touched = {};
    this.serverErrors = {};
    this.submitAttempted = false;
  }

  private leaveEdit() {
    if (!this.editedFromRead) return;
    this.editedFromRead = false;
    this.setMode('read');
  }

  private setMode(mode: FdFormMode) {
    this.mode = mode;
    this.dispatchEvent(new CustomEvent('modechange', { detail: { mode }, bubbles: true }));
  }

  // Overridable copy, so a subclass can translate or reword without
  // touching the workflow.
  protected requiredMessage(field: FdFormField): string {
    return `${field.label} is required.`;
  }

  protected invalidMessage(): string {
    return 'Fix the highlighted fields to continue.';
  }

  protected noChangesMessage(): string {
    return 'No changes to save.';
  }

  protected saveSuccessMessage(): string {
    return 'Saved.';
  }

  protected saveFailureMessage(error: unknown): string {
    const reason = error instanceof Error && error.message ? error.message : 'Something went wrong.';
    return `Couldn't save: ${reason}`;
  }

  // ---- lifecycle

  renderedCallback() {
    if (!this.focusPending) return;

    const wanted = this.focusPending === 'invalid' ? this.firstInvalid() : this.editableFields[0];
    this.focusPending = null;
    const host = wanted && this.template.querySelector(`fandry-form-field[data-name="${escapeAttrValue(wanted.name)}"]`);
    (host as HTMLElement | null)?.focus();
  }
}
