// @ts-check

import { defineConfig } from 'oxfmt';

export default defineConfig({
    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: 'auto',
    endOfLine: 'lf',
    experimentalOperatorPosition: 'start',
    htmlWhitespaceSensitivity: 'css',
    insertFinalNewline: true,
    jsxSingleQuote: false,
    objectWrap: 'preserve',
    overrides: [
        {
            files: ['*.json', '*.jsonc', '*.yaml', '*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
    printWidth: 100,
    proseWrap: 'preserve',
    quoteProps: 'consistent',
    semi: true,
    singleAttributePerLine: false,
    singleQuote: true,
    sortImports: {
        groups: [
            ['type-builtin', 'type-external'],
            ['builtin', 'external'],
            'type-internal',
            ['internal', 'subpath'],
            ['type-parent', 'type-sibling', 'type-index'],
            ['parent', 'sibling', 'index'],
            'style',
            'unknown',
        ],
    },
    sortPackageJson: true,
    tabWidth: 4,
    trailingComma: 'all',
    useTabs: false,
});
