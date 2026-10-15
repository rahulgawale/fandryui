const shared = {
  moduleNameMapper: {
    // Record-aware components live in src/salesforce, under the same `fandry`
    // namespace -- listed first so they win over the core wildcard below.
    '^fandry/lookup$': '<rootDir>/src/salesforce/fandry/lookup/lookup',
    // Blocks (installable patterns) live in src/blocks, same namespace.
    '^fandry/(dataTable|dataTableState|form|formState|formField)$': '<rootDir>/src/blocks/fandry/$1/$1',
    '^fandry/(.+)$': '<rootDir>/src/core/fandry/$1/$1',
    '^fandryui/(.+)$': '<rootDir>/src/modules/fandryui/$1/$1',
    '^fandryuidemos/(.+)$': '<rootDir>/src/modules/fandryuidemos/$1/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/__lwr_cache__/', '/site/']
};

module.exports = {
  projects: [
    { displayName: 'dom', preset: '@lwc/jest-preset', ...shared },
    /* *.ssr-test.ts: rendered with no document, as under LWR SSR. Its
       "LWC1057: inert is not valid attribute" lines are warnings, not failures. */
    { displayName: 'ssr', preset: '@lwc/jest-preset/ssr', ...shared }
  ]
};
