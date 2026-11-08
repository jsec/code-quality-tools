// @ts-check

import { defineConfig } from 'oxlint';

import base from './base.js';

export default defineConfig({
    env: {
        node: true,
    },
    extends: [base],
    plugins: ['node'],
    rules: {
        'node/global-require': 'error',
        'node/handle-callback-err': 'error',
        'node/no-exports-assign': 'error',
        'node/no-mixed-requires': 'error',
        'node/no-new-require': 'error',
        'node/no-path-concat': 'error',
    },
});
