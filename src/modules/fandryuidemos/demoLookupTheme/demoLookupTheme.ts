import { LightningElement } from 'lwc';
import { findAccounts } from 'fandryuidemos/accountSearch';
import type { Account } from 'fandryuidemos/accountSearch';

export default class DemoLookupTheme extends LightningElement {
  results: Account[] = [];
  loading = false;
  account: Account | null = null;

  /* Only the newest search's answer may land: a slow earlier one must not
     overwrite a later one. */
  private requestId = 0;

  async handleSearch(event: CustomEvent<{ query: string }>) {
    const id = ++this.requestId;
    this.loading = true;
    const results = await findAccounts(event.detail.query);
    if (id === this.requestId) {
      this.results = results;
      this.loading = false;
    }
  }

  handleChange(event: CustomEvent<{ value: string; record: Account | null }>) {
    this.account = event.detail.record;
  }
}
