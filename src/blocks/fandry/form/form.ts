import FdFormState from 'fandry/formState';

/**
 * The form block: FdFormState (fields, validation, read/edit mode, a save
 * workflow with a `saveValues` hook) plus this component's own Shadow DOM
 * template, with fandry-form-field for each field. No logic of its own -- see
 * fandry/formState for what it does and for how to extend it with different
 * markup.
 */
export default class FdForm extends FdFormState {}
