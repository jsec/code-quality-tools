require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:perfectionist/recommended-natural',
    'plugin:promise/recommended'
  ],
  plugins: [
    'import',
    'perfectionist',
    'promise'
  ],
  settings: {
    'import/resolver': {
      node: true,
    }
  }
}
