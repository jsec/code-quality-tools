import react from '@eslint-react/eslint-plugin';
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import baseConfig from './base.js';

export default defineConfig(
    {
        extends: [
            eslint.configs.recommended,
            tseslint.configs.recommended,
            ...baseConfig,
            react.configs['recommended-typescript'],
        ],
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                projectService: true,
                // eslint-disable-next-line n/no-unsupported-features/node-builtins
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            '@eslint-react/no-missing-key': 'warn',
        },
    },
);
