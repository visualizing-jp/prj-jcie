module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'shared/assets/js/**/*.js',
    '!shared/assets/js/libs/**',
    '!shared/assets/js/pubsub.js'
  ],
  verbose: true
};
