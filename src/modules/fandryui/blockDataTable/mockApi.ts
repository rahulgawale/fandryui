// A fake backend for the data-table block's demo: an in-memory list, some
// latency, and a couple of validation rules -- so the page can show real
// loading, saving and failure states without a server. Nothing here is part
// of the block; a real app replaces these calls with its own requests.

import { delay } from 'fandryui/mockApi';
import type { MockApiOptions } from 'fandryui/mockApi';

export interface Person {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const ROLES = ['Admin', 'Editor', 'Viewer'];
const STATUSES = ['active', 'pending', 'suspended'];

const NAMES = [
  'Ada Lovelace',
  'Grace Hopper',
  'Alan Turing',
  'Margaret Hamilton',
  'Katherine Johnson',
  'Linus Torvalds',
  'Barbara Liskov',
  'Dennis Ritchie',
  'Radia Perlman',
  'Donald Knuth',
  'Hedy Lamarr',
  'Edsger Dijkstra',
  'Annie Easley',
  'Ken Thompson',
  'Frances Allen',
  'Tim Berners-Lee',
  'Jean Bartik',
  'Claude Shannon',
  'Mary Jackson',
  'John McCarthy',
  'Dorothy Vaughan',
  'Bjarne Stroustrup',
  'Sophie Wilson',
  'Guido van Rossum'
];

/*
 * The first NAMES.length people are always the same; past that the names are
 * numbered, so a benchmark can ask for thousands of rows.
 */
function seed(count = NAMES.length): Person[] {
  return Array.from({ length: count }, (_, index) => {
    const base = NAMES[index % NAMES.length];
    const name = index < NAMES.length ? base : `${base} ${Math.floor(index / NAMES.length) + 1}`;
    return {
      id: index + 1,
      name,
      email: `${name.toLowerCase().replace(/[^a-z]+/g, '.')}@example.com`,
      role: ROLES[index % ROLES.length],
      status: STATUSES[(index * 7) % STATUSES.length]
    };
  });
}

/*
 * How many people to start with. The demo uses the default; the benchmark
 * (scripts/bench-data-table.mjs) asks for thousands.
 */
interface DataTableMockApiOptions extends MockApiOptions {
  rowCount?: number;
}

function validate(changes: Partial<Person>) {
  if (changes.name !== undefined && changes.name.trim().length < 2) {
    throw new Error('Name must be at least 2 characters.');
  }
  if (changes.email !== undefined && !/^\S+@\S+\.\S+$/.test(changes.email)) {
    throw new Error('Enter a valid email address.');
  }
}

export function createMockApi({ latencyMs = 900, rowCount, shouldFail = () => false }: DataTableMockApiOptions = {}) {
  let store = seed(rowCount);

  // Every call goes through here, so the switch treats them all alike. It is
  // read when the request is *sent*, not when it lands: flipping it while a
  // request is in flight must not change that request's outcome.
  async function request() {
    const fail = shouldFail();
    await delay(latencyMs);
    if (fail) throw new Error('The server is unavailable. Try again.');
  }

  return {
    async list(): Promise<Person[]> {
      await request();
      return store.map((person) => ({ ...person }));
    },

    async update(id: number, changes: Partial<Person>): Promise<Person> {
      await request();
      validate(changes);

      const current = store.find((person) => person.id === id);
      if (!current) throw new Error('This person no longer exists.');
      const updated = { ...current, ...changes };
      store = store.map((person) => (person.id === id ? updated : person));
      return { ...updated };
    },

    // One request for the whole batch, all or nothing -- like a bulk endpoint.
    async updateMany(ids: number[], changes: Partial<Person>): Promise<Person[]> {
      await request();
      validate(changes);
      if (changes.email !== undefined && ids.length > 1) {
        throw new Error('Emails must be unique, so they cannot be set on several people at once.');
      }

      const missing = ids.filter((id) => !store.some((person) => person.id === id));
      if (missing.length) throw new Error(`${missing.length} of these people no longer exist.`);
      store = store.map((person) => (ids.includes(person.id) ? { ...person, ...changes } : person));
      return store.filter((person) => ids.includes(person.id)).map((person) => ({ ...person }));
    },

    async remove(ids: number[]): Promise<void> {
      await request();
      store = store.filter((person) => !ids.includes(person.id));
    },

    reset() {
      store = seed(rowCount);
    }
  };
}

export const ROLE_OPTIONS = ROLES.map((role) => ({ label: role, value: role }));
export const STATUS_OPTIONS = [
  { label: 'Active', value: 'active' },
  { label: 'Pending', value: 'pending' },
  { label: 'Suspended', value: 'suspended' }
];

/*
 * `?rows=10000&latency=0&pageSize=50` on the demo page, for the benchmark. All
 * optional; without them the page is exactly the demo.
 */
export function benchmarkOptionsFromUrl(): { rowCount?: number; latencyMs?: number; pageSize?: number } {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const number = (key: string) => (params.has(key) && Number.isFinite(Number(params.get(key))) ? Number(params.get(key)) : undefined);
  return { rowCount: number('rows'), latencyMs: number('latency'), pageSize: number('pageSize') };
}
