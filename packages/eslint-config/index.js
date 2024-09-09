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
    '@stylistic',
    'import-newlines'
  ],
  rules: {
    ...styleRules,
    'import-newlines/enforce': ['error', {
      'items': 2,
      'max-len': 100,
      'semi': true
    }],
    'multiline-comment-style': [
      'error',
      'separate-lines'
    ],
    'n/no-missing-import': 'off',
    'n/no-process-exit': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/prevent-abbreviations': 'off'
  }
};

