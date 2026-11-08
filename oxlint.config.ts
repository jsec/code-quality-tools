import base from '@jarsec/oxlint-config/lint/node';
import { defineConfig } from 'oxlint';

export default defineConfig({
    extends: [base],
    ignorePatterns: ['**/test/fixtures/**'],
    overrides: [
        {
            files: ['**/*.test.*'],
            plugins: ['vitest'],
            rules: {
                'vitest/prefer-importing-vitest-globals': 'off',
            },
        },
    ],
});
