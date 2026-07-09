// @ts-check

import eslintReact from '@eslint-react/eslint-plugin';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import tanstackRouter from '@tanstack/eslint-plugin-router';
import globals from 'globals';

import base from './base.js';

export default [
    ...base,
    eslintReact.configs['recommended-type-checked'],
    ...tanstackQuery.configs['flat/recommended'],
    ...tanstackRouter.configs['flat/recommended'],
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    {
        rules: {
            '@eslint-react/no-array-index-key': 'error',
            '@eslint-react/no-leaked-conditional-rendering': 'error',
            '@eslint-react/no-missing-key': 'error',
            '@eslint-react/prefer-destructuring-assignment': 'error',
            'n/no-missing-import': 'off',
            'n/no-unpublished-import': 'off',
            'n/no-unsupported-features/node-builtins': 'off',
            'unicorn/no-anonymous-default-export': 'error',
        },
    },
];
