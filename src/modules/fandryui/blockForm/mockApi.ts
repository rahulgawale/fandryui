// A fake backend for the form block's demo: one saved profile, some latency
// and a couple of server-side rules -- so the page can show real saving,
// server validation and failure states without a server. Nothing here is
// part of the block; a real app replaces these calls with its own requests.

export interface Profile {
  name: string;
  email: string;
  username: string;
  plan: string;
  bio: string;
  newsletter: boolean;
  memberSince: string;
}

export const PLAN_OPTIONS = [
  { label: 'Free', value: 'free' },
  { label: 'Team', value: 'team' },
  { label: 'Enterprise', value: 'enterprise' }
];

const TAKEN_USERNAMES = ['admin', 'root', 'ada'];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface MockApiOptions {
  latencyMs?: number;
  // Read on every call, so the page can flip it from a switch.
  shouldFail?: () => boolean;
}

export function createMockApi({ latencyMs = 800, shouldFail = () => false }: MockApiOptions = {}) {
  let profile: Profile = {
    name: 'Grace Hopper',
    email: 'grace@example.com',
    username: 'grace',
    plan: 'team',
    bio: 'Compilers, and the occasional moth.',
    newsletter: true,
    memberSince: 'March 2024'
  };

  // Read when the request is *sent*, not when it lands: flipping the switch
  // while a request is in flight must not change that request's outcome.
  async function request() {
    const fail = shouldFail();
    await delay(latencyMs);
    if (fail) throw new Error('The server is unavailable. Try again.');
  }

  return {
    // The kind of rule only a server can check.
    async checkUsername(username: string): Promise<string | undefined> {
      await delay(latencyMs / 2);
      const taken = TAKEN_USERNAMES.includes(username.toLowerCase()) && username !== profile.username;
      return taken ? 'That username is taken.' : undefined;
    },

    async save(changes: Partial<Profile>): Promise<Profile> {
      await request();
      profile = { ...profile, ...changes };
      return { ...profile };
    },

    get(): Profile {
      return { ...profile };
    }
  };
}
