module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    rules: {
      'comma-dangle': 1,
    },
  },
}
