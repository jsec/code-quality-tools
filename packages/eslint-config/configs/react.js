// @ts-check

import eslintReact from '@eslint-react/eslint-plugin';
import tanstackQuery from '@tanstack/eslint-plugin-query';
import tanstackRouter from '@tanstack/eslint-plugin-router';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

import base from './base.js';
import { sourceFileGlob } from './globs.js';

export default defineConfig([
    ...base,
    {
        extends: [
            eslintReact.configs['recommended-type-checked'],
            tanstackQuery.configs['flat/recommended'],
            tanstackRouter.configs['flat/recommended'],
        ],
        files: sourceFileGlob,
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            '@eslint-react/no-array-index-key': 'error',
            '@eslint-react/no-leaked-conditional-rendering': 'error',
            '@eslint-react/no-missing-key': 'error',
            'n/no-missing-import': 'off',
            'n/no-unpublished-import': 'off',
            'n/no-unsupported-features/node-builtins': 'off',
            'unicorn/no-anonymous-default-export': 'error',
        },
    },
]);
