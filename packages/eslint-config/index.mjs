// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import nodePlugin from 'eslint-plugin-n';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
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
    {
        rules: {
            '@typescript-eslint/consistent-type-definitions': [
                'error',
                'type',
            ],
            'multiline-comment-style': ['error', 'starred-block'],
            'n/no-missing-import': 'off',
            'n/no-process-exit': 'off',
            'unicorn/no-process-exit': 'off',
            'unicorn/prevent-abbreviations': 'off',
        },
    },
    {
        extends: [
            tseslint.configs.disableTypeChecked,
        ],
        files: ['**/*.js'],
    },
    {
        files: [
            'eslint.config.js',
            'drizzle.config.ts',
            '**/*.test.ts',
        ],
        rules: {
            'n/no-unpublished-import': 'off',
        },
    },
);
