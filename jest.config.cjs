module.exports = {
  preset: '@lwc/jest-preset',
  moduleNameMapper: {
    '^fandry/(.+)$': '<rootDir>/src/core/fandry/$1/$1',
    '^fandryui/(.+)$': '<rootDir>/src/modules/fandryui/$1/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/__lwr_cache__/', '/site/']
};
