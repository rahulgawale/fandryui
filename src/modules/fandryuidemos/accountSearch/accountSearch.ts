// Stands in for a consumer's real query (an Apex method, a GraphQL wire, a
// UI API call) in the lookup demos: slow, and matching on a field the label
// alone doesn't show.
export interface Account {
  id: string;
  label: string;
  description: string;
  objectApiName: string;
}

const ACCOUNTS: Account[] = [
  { id: '001A', label: 'Acme Corp', description: 'Account • Customer', objectApiName: 'Account' },
  { id: '001B', label: 'Acme Logistics', description: 'Account • Partner', objectApiName: 'Account' },
  { id: '001C', label: 'Globex', description: 'Account • Prospect', objectApiName: 'Account' },
  { id: '001D', label: 'Initech', description: 'Account • Customer', objectApiName: 'Account' },
  { id: '001E', label: 'Umbrella Industries', description: 'Account • Prospect', objectApiName: 'Account' }
];

// Stands in for looking records up by id (e.g. a getRecord wire or an Apex
// method taking a list of ids) -- what a consumer does on `resolve`.
export function getAccountsByIds(ids: string[]): Promise<Account[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ACCOUNTS.filter((account) => ids.includes(account.id))), 600);
  });
}

export function findAccounts(query: string): Promise<Account[]> {
  const needle = query.trim().toLowerCase();

  return new Promise((resolve) => {
    setTimeout(() => {
      // An empty query offers recent records, like a Salesforce lookup does.
      resolve(
        needle
          ? ACCOUNTS.filter((a) => `${a.label} ${a.description}`.toLowerCase().includes(needle))
          : ACCOUNTS.slice(0, 3)
      );
    }, 400);
  });
}
