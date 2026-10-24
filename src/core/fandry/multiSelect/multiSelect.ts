import FdMultiSelectState from 'fandry/multiSelectState';

export type { FdMultiSelectOption, FdMultiSelectMessages } from 'fandry/multiSelectState';
export { DEFAULT_MULTI_SELECT_MESSAGES } from 'fandry/multiSelectState';

/**
 * A select that keeps several options: each row has a check box, picking one
 * toggles it and leaves the list open. The behavior is in fandry/multiSelectState.
 */
export default class MultiSelect extends FdMultiSelectState {}
