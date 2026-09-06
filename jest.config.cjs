module.exports = {
  preset: '@lwc/jest-preset',
  moduleNameMapper: {
    '^fd/(.+)$': '<rootDir>/src/core/fd/$1/$1',
    '^fandryui/(.+)$': '<rootDir>/src/modules/fandryui/$1/$1'
  },
  testPathIgnorePatterns: ['/node_modules/', '/__lwr_cache__/', '/site/']
};
