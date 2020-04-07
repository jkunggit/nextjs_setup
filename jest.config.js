// const { defaults } = require('jest-config')
// console.log('defaults', defaults)
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    './node_modules/',
    './.next/'
  ],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  coverageReporters: [
    'html',
    'text-summary'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  resetMocks: false,
  resetModules: false
}
