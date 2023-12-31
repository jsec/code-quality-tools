require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:perfectionist/recommended-natural',
    'plugin:promise/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['import', 'perfectionist', '@typescript-eslint/eslint-plugin', 'promise'],
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
}
