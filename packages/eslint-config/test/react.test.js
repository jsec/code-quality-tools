import assert from 'node:assert/strict';
import test from 'node:test';

import { ESLint } from 'eslint';

import reactConfig from '@jarsec/eslint-config/react';

const eslint = new ESLint({
    overrideConfig: reactConfig,
    overrideConfigFile: true,
});

const lint = async (code, filePath) => {
    const [result] = await eslint.lintText(code, { filePath });

    return result.messages.map(message => message.ruleId);
};

test('loads the React config through the public package export', async () => {
    const config = await eslint.calculateConfigForFile('smoke.jsx');

    assert.ok(config);
});

test('accepts valid JSX', async () => {
    const ruleIds = await lint(
        'export const Greeting = () => <div>Hello</div>;\n',
        'valid.jsx',
    );

    assert.deepEqual(ruleIds, []);
});

test('requires keys for JSX list elements', async () => {
    const ruleIds = await lint(
        'export const List = () => [<div key="first" />, <span />];\n',
        'invalid.jsx',
    );

    assert.deepEqual(ruleIds, ['@eslint-react/no-missing-key']);
});

test('accepts valid TSX', async () => {
    const ruleIds = await lint(
        'export const Greeting = ({ name }: { name: string }) => <div>{name}</div>;\n',
        'valid.tsx',
    );

    assert.deepEqual(ruleIds, []);
});

test('rejects array indexes as TSX keys', async () => {
    const ruleIds = await lint(
        'export const List = ({ items }: { items: string[] }) => items.map((item, index) => <div key={index}>{item}</div>);\n',
        'invalid.tsx',
    );

    assert.deepEqual(ruleIds, ['@eslint-react/no-array-index-key']);
});
