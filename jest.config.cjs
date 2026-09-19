module.exports = {
  preset: '@lwc/jest-preset',
  moduleNameMapper: {
    // Record-aware components live in src/salesforce, under the same `fandry`
    // namespace -- listed first so they win over the core wildcard below.
    '^fandry/lookup$': '<rootDir>/src/salesforce/fandry/lookup/lookup',
    '^fandry/(.+)$': '<rootDir>/src/core/fandry/$1/$1',
    '^fandryui/(.+)$': '<rootDir>/src/modules/fandryui/$1/$1',
    '^fandryuidemos/(.+)$': '<rootDir>/src/modules/fandryuidemos/$1/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/__lwr_cache__/', '/site/']
};
