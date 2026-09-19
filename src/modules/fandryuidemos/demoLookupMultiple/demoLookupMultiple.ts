import { LightningElement } from 'lwc';
import { findAccounts } from 'fandryuidemos/accountSearch';
import type { Account } from 'fandryuidemos/accountSearch';

export default class DemoLookupMultiple extends LightningElement {
  results: Account[] = [];
  loading = false;
  accounts: Account[] = [];

  private requestId = 0;

  get selected(): string {
    return this.accounts.length ? this.accounts.map((a) => a.label).join(', ') : 'nothing';
  }

  async handleSearch(event: CustomEvent<{ query: string }>) {
    const id = ++this.requestId;
    this.loading = true;

    const results = await findAccounts(event.detail.query);

    if (id === this.requestId) {
      this.results = results;
      this.loading = false;
    }
  }

  handleChange(event: CustomEvent<{ values: string[]; records: Account[] }>) {
    this.accounts = event.detail.records;
  }
}
