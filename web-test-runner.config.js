export default {
  files: ['test/**/*.test.js'],
  nodeResolve: true,
  coverageConfig: {
    include: ['app/**/*.js'],
    exclude: ['test/**/*.js']
  },
  testFramework: {
    config: {
      ui: 'tdd',
      timeout: '200000'
    }
  }
}
