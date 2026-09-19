import { LightningElement } from 'lwc';
import { createMockApi, PLAN_OPTIONS } from './mockApi';
import type { Profile } from './mockApi';

const USAGE = `<fandry-form
  fields={fields}
  values={profile}
  mode="read"
  save-values={saveValues}
  validate={validate}
  onsave={handleSave}
></fandry-form>`;

const FIELDS_CODE = `fields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'email', label: 'Email', type: 'email', required: true,
    validate: (value) => (/^\\S+@\\S+\\.\\S+$/.test(value) ? undefined : 'Enter a valid email address.') },
  { name: 'username', label: 'Username', required: true, helpText: 'At least 3 characters.',
    validate: (value) => (value.length < 3 ? 'Use at least 3 characters.' : undefined) },
  { name: 'plan', label: 'Plan', type: 'radio', options: PLAN_OPTIONS },
  { name: 'bio', label: 'Bio', type: 'textarea' },
  { name: 'newsletter', label: 'Send me the newsletter', type: 'switch' },
  { name: 'memberSince', label: 'Member since', readonly: true }
];`;

const HOOKS_CODE = `// Rules that need more than one field, or the server. Runs once every
// field's own rules pass; return { [field name]: message }.
validate = async (values) => {
  const taken = await api.checkUsername(values.username);
  return taken ? { username: taken } : undefined;
};

// The request. \`changes\` holds only what differs from \`values\`. Resolve with
// the saved values, or throw to stay in edit mode and show the message.
saveValues = (values, changes) => api.save(changes);

// The block never edits \`values\` itself -- put the result back.
handleSave(event) {
  this.profile = event.detail.values;
}`;

const FIELD_PROPS = [
  { name: 'name', type: 'string', description: 'The key in the form\'s `values`.' },
  { name: 'label', type: 'string', description: 'Shown above the control, and beside the value in read mode.' },
  { name: 'type', type: 'text · email · number · tel · url · password · date · textarea · select · radio · checkbox · switch', description: 'Defaults to `text`. `number` fields save as numbers; `checkbox` and `switch` as booleans.' },
  { name: 'options', type: '{ label, value }[]', description: 'For `select` and `radio`.' },
  { name: 'required', type: 'boolean', description: 'Must have a value. For a checkbox or switch, must be on.' },
  { name: 'readonly', type: 'boolean', description: 'Shown as text even while the form is being edited, and never validated.' },
  { name: 'helpText', type: 'string', description: 'Shown under the control.' },
  { name: 'placeholder', type: 'string', description: 'For text inputs, textareas and selects.' },
  { name: 'elementProps', type: 'object', description: 'Spread onto the native control (`{ autocomplete: \'email\', maxLength: 80 }`).' },
  { name: 'validate', type: '(value, values) => string | void', description: 'Return a message when the value is not acceptable. Runs after `required`, and not at all on an empty field that is not required.' }
];

const PROPS = [
  { name: 'fields', type: 'field[]', default: '[]', description: 'What the form asks for, as plain data (see the field table below).' },
  { name: 'values', type: 'object', default: '{}', description: 'The saved values. Controlled: the block never changes it. What the user types is a draft over it.' },
  { name: 'mode', type: "'read' | 'edit'", default: "'edit'", description: 'Whether the form shows controls or the values as text. Set it to choose where the form starts; the block keeps it current as the user moves between the two.' },
  { name: 'save-values', type: '(values, changes) => Promise', default: '—', description: 'Persists the form. `values` is everything with the edits applied, `changes` only what differs. Resolve with the saved values or nothing; reject to stay in edit mode and show the message.' },
  { name: 'validate', type: '(values) => errors | Promise', default: '—', description: 'Rules that span fields or need the server. Return `{ [field name]: message }`. Runs on save, once every field\'s own rules pass.' },
  { name: 'edit() · save() · cancel()', type: 'methods', default: '—', description: 'What the default buttons call. Use them from your own buttons in the `actions` slot.' }
];

const EVENTS = [
  { name: 'change', detail: '{ name, value, values }', description: 'A field\'s value changed (on every keystroke). `value` is in its saved shape: a number for a number field.' },
  { name: 'save', detail: '{ values, changes }', description: 'A save succeeded. Put `values` into your data.' },
  { name: 'cancel', detail: '', description: 'The user cancelled; their edits are discarded.' },
  { name: 'modechange', detail: '{ mode }', description: 'The form moved between reading and editing.' }
];

const SLOTS = [
  { name: 'actions', description: 'Replaces the default Edit / Save / Cancel buttons. Wire your own to `edit()`, `save()` and `cancel()`.' }
];

const BUILT_FROM = ['input', 'textarea', 'select', 'radio-group', 'checkbox', 'switch', 'button', 'alert', 'spinner', 'text'];

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export default class BlockForm extends LightningElement {
  usageCode = USAGE;
  fieldsCode = FIELDS_CODE;
  hooksCode = HOOKS_CODE;
  fieldProps = FIELD_PROPS;
  props = PROPS;
  events = EVENTS;
  slots = SLOTS;
  builtFrom = BUILT_FROM;

  installNpm = `npm install fandryui

<!-- nothing to copy: your bundler ships only what you use -->
<fandry-form></fandry-form>`;
  installSfdx = `npx fandry add form
# adds the block and everything it is built from
# to your package directory, as source you own`;

  fields = [
    { name: 'name', label: 'Name', required: true },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      elementProps: { autocomplete: 'email' },
      validate: (value: unknown) => (EMAIL_PATTERN.test(String(value)) ? undefined : 'Enter a valid email address.')
    },
    {
      name: 'username',
      label: 'Username',
      required: true,
      helpText: 'At least 3 characters. Try "admin" for a server-side rule.',
      validate: (value: unknown) => (String(value).length < 3 ? 'Use at least 3 characters.' : undefined)
    },
    { name: 'plan', label: 'Plan', type: 'radio', options: PLAN_OPTIONS },
    { name: 'bio', label: 'Bio', type: 'textarea' },
    { name: 'newsletter', label: 'Send me the newsletter', type: 'switch' },
    { name: 'memberSince', label: 'Member since', readonly: true }
  ];

  simulateErrors = false;

  private api = createMockApi({ shouldFail: () => this.simulateErrors });

  // Initialized where it is declared, so LWC makes it reactive.
  profile: Profile = this.api.get();

  // ---- hooks handed to the block

  validate = async (values: Partial<Profile>) => {
    const taken = await this.api.checkUsername(String(values.username));
    return taken ? { username: taken } : undefined;
  };

  saveValues = (_values: Partial<Profile>, changes: Partial<Profile>) => this.api.save(changes);

  handleSave(event: CustomEvent<{ values: Profile }>) {
    this.profile = event.detail.values;
  }

  handleSimulateErrorsChange(event: CustomEvent<boolean>) {
    this.simulateErrors = !!event.detail;
  }
}
