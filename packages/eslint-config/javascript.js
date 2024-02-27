require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'xo',
    'plugin:perfectionist/recommended-natural',
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
