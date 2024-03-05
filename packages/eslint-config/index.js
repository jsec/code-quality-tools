require('@rushstack/eslint-patch/modern-module-resolution');

const styleRules = require('./configs/style');

module.exports = {
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:n/recommended',
    'plugin:import/recommended',
    'plugin:unicorn/recommended',
    'plugin:perfectionist/recommended-natural'
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
      ],
      files: [ '*.ts' ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json'
      },
      plugins: [
        '@typescript-eslint/eslint-plugin'
      ],
      rules: {
        ...styleRules,
        'import/no-unresolved': 'error'
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [ '.ts' ]
        },
        'import/resolver': {
          node: true,
          typescript: {
            alwaysTryTypes: true
          }
        }
      }
    }
  ],
  plugins: [
    'import',
    'perfectionist',
    'unicorn',
    '@stylistic'
  ],
  rules: {
    ...styleRules
  }
};

