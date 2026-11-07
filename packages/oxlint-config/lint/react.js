// @ts-check

import { defineConfig } from 'oxlint';

import base from './base.js';

export default defineConfig({
    env: {
        browser: true,
    },
    extends: [base],
    jsPlugins: [
        {
            name: '@tanstack/query',
            specifier: import.meta.resolve('@tanstack/eslint-plugin-query'),
        },
        {
            name: '@tanstack/router',
            specifier: import.meta.resolve('@tanstack/eslint-plugin-router'),
        },
    ],
    plugins: ['react'],
    rules: {
        '@tanstack/query/exhaustive-deps': 'error',
        '@tanstack/query/infinite-query-property-order': 'error',
        '@tanstack/query/mutation-property-order': 'error',
        '@tanstack/query/no-rest-destructuring': 'warn',
        '@tanstack/query/no-unstable-deps': 'error',
        '@tanstack/query/no-void-query-fn': 'error',
        '@tanstack/query/stable-query-client': 'error',
        '@tanstack/router/create-route-property-order': 'warn',
        '@tanstack/router/route-param-names': 'error',
        'react/error-boundaries': 'error',
        'react/exhaustive-deps': 'error',
        'react/hook-use-state': 'error',
        'react/iframe-missing-sandbox': 'error',
        'react/jsx-key': ['error', { checkKeyMustBeforeSpread: true }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-script-url': 'error',
        'react/no-array-index-key': 'error',
        'react/no-children-prop': 'error',
        'react/no-clone-element': 'error',
        'react/no-danger': 'error',
        'react/no-danger-with-children': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-find-dom-node': 'error',
        'react/no-namespace': 'error',
        'react/no-react-children': 'error',
        'react/no-render-return-value': 'error',
        'react/no-unsafe': 'error',
        'react/no-unstable-nested-components': 'error',
        'react/no-will-update-set-state': 'error',
        'react/purity': 'error',
        'react/rules-of-hooks': 'error',
        'react/set-state-in-effect': 'error',
        'react/set-state-in-render': 'error',
        'react/static-components': 'error',
        'react/unsupported-syntax': 'error',
        'react/use-memo': 'error',
        'react/void-dom-elements-no-children': 'error',
        'unicorn/no-anonymous-default-export': 'error',
    },
});
