import { LightningElement } from 'lwc';
import { findAccounts, getAccountsByIds } from 'fandryuidemos/accountSearch';
import type { Account } from 'fandryuidemos/accountSearch';

export default class DemoLookupValue extends LightningElement {
  // Existing data: ids, as they'd come off a saved record. No names yet --
  // the lookup asks for them through `resolve`.
  accountId = '001C';
  accountIds = ['001A', '001D'];

  // Display data for those ids, filled in by handleResolve*.
  account: Account | null = null;
  accounts: Account[] = [];

  singleResults: Account[] = [];
  singleLoading = false;
  multiResults: Account[] = [];
  multiLoading = false;

  private singleRequest = 0;
  private multiRequest = 0;

  get singleReadout(): string {
    return this.accountId || 'nothing';
  }

  get multiReadout(): string {
    return this.accountIds.length ? this.accountIds.join(', ') : 'nothing';
  }

  // The lookup can't name these ids, so it asks. Fetch them, hand them back.
  async handleResolveSingle(event: CustomEvent<{ values: string[] }>) {
    const [account] = await getAccountsByIds(event.detail.values);
    this.account = account ?? null;
  }

  async handleResolveMultiple(event: CustomEvent<{ values: string[] }>) {
    const found = await getAccountsByIds(event.detail.values);
    this.accounts = [...this.accounts, ...found];
  }

  handleChangeSingle(event: CustomEvent<{ value: string; record: Account | null }>) {
    this.accountId = event.detail.value;
    this.account = event.detail.record;
  }

  handleChangeMultiple(event: CustomEvent<{ values: string[]; records: Account[] }>) {
    this.accountIds = event.detail.values;
    this.accounts = event.detail.records;
  }

  async handleSearchSingle(event: CustomEvent<{ query: string }>) {
    const id = ++this.singleRequest;
    this.singleLoading = true;
    const results = await findAccounts(event.detail.query);
    if (id === this.singleRequest) {
      this.singleResults = results;
      this.singleLoading = false;
    }
  }

  async handleSearchMultiple(event: CustomEvent<{ query: string }>) {
    const id = ++this.multiRequest;
    this.multiLoading = true;
    const results = await findAccounts(event.detail.query);
    if (id === this.multiRequest) {
      this.multiResults = results;
      this.multiLoading = false;
    }
  }
}
