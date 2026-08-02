// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import perfectionist from 'eslint-plugin-perfectionist';
import packageJson from 'eslint-package-json';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import { jsFileGlob, sourceFileGlob } from './globs.js';

export default defineConfig([
    {
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommended,
            tseslint.configs.stylistic,
            nodePlugin.configs['flat/recommended'],
            unicorn.configs.recommended,
            perfectionist.configs['recommended-natural'],
            stylistic.configs.customize({
                arrowParens: false,
                blockSpacing: true,
                braceStyle: '1tbs',
                commaDangle: 'always-multiline',
                indent: 4,
                jsx: true,
                pluginName: '@stylistic',
                quoteProps: 'consistent-as-needed',
                quotes: 'single',
                semi: true,
            }),
        ],
        files: sourceFileGlob,
        rules: {
            '@typescript-eslint/consistent-type-definitions': [
                'error',
                'type',
            ],
            'accessor-pairs': 'error',
            'array-callback-return': 'error',
            'curly': ['error', 'multi-line'],
            'default-case-last': 'error',
            'eqeqeq': ['error', 'always', { null: 'ignore' }],
            'multiline-comment-style': ['error', 'starred-block'],
            'n/no-missing-import': 'off',
            'n/no-process-exit': 'off',
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-new-func': 'error',
            'no-proto': 'error',
            'no-self-compare': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unreachable-loop': 'error',
            'no-useless-call': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': 'error',
            'unicorn/name-replacements': 'off',
            'unicorn/no-null': 'off', // TODO: revisit this
            'unicorn/no-process-exit': 'off',
        },
    },
    {
        extends: [
            tseslint.configs.disableTypeChecked,
        ],
        files: jsFileGlob,
    },
    {
        extends: ['package-json/recommended'],
        files: ['**/package.json'],
        plugins: {
            'package-json': packageJson,
        },
        rules: {
            'package-json/no-nested-exports': 'off',
        },
    },
    {
        files: [
            'eslint.config.js',
            'drizzle.config.ts',
            'tsdown.config.ts',
            '**/*.test.ts',
        ],
        rules: {
            'n/no-unpublished-import': 'off',
        },
    },
]);
