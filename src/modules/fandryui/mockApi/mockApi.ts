// Shared by every block demo's own mock backend (blockDataTable, blockForm,
// ...): a fake network delay and the options shape for simulating it.
// Nothing here is part of a block; a real app replaces these calls with its
// own requests.

export const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

export interface MockApiOptions {
  latencyMs?: number;
  // Read on every call, so the page can flip it from a switch.
  shouldFail?: () => boolean;
}
