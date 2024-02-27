require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:unicorn/recommended',
    'xo',
    'xo-typescript/space',
    'plugin:perfectionist/recommended-natural',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin', 
    'import', 
    'perfectionist', 
    'promise', 
    'unicorn'
  ],
  settings: {
    'import/resolver': {
      node: true,
      typescript: true,
    },
  },
}
