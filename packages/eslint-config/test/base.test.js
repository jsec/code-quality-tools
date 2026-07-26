import assert from 'node:assert/strict';
import test from 'node:test';

import { ESLint } from 'eslint';

import baseConfig from '@jarsec/eslint-config';

const eslint = new ESLint({
    overrideConfig: baseConfig,
    overrideConfigFile: true,
});

const lint = async (code, filePath) => {
    const [result] = await eslint.lintText(code, { filePath });

    return result.messages.map(message => message.ruleId);
};

test('loads the base config through the public package export', async () => {
    const config = await eslint.calculateConfigForFile('smoke.js');

    assert.ok(config);
});

test('accepts valid JavaScript', async () => {
    const ruleIds = await lint('export const answer = 42;\n', 'valid.js');

    assert.deepEqual(ruleIds, []);
});

test('reports undefined variables in JavaScript', async () => {
    const ruleIds = await lint(
        'console.log(missingValue);\n',
        'invalid.js',
    );

    assert.deepEqual(ruleIds, ['no-undef']);
});

test('accepts valid TypeScript', async () => {
    const ruleIds = await lint(
        'export type User = {\n    name: string;\n};\n',
        'valid.ts',
    );

    assert.deepEqual(ruleIds, []);
});

test('requires type aliases in TypeScript', async () => {
    const ruleIds = await lint(
        'export interface User {\n    name: string;\n}\n',
        'invalid.ts',
    );

    assert.deepEqual(ruleIds, [
        '@typescript-eslint/consistent-type-definitions',
    ]);
});

test('accepts a valid package.json', async () => {
    const ruleIds = await lint(
        '{\n'
            + '    "name": "example",\n'
            + '    "version": "1.0.0",\n'
            + '    "private": true,\n'
            + '    "type": "module",\n'
            + '    "engines": {\n'
            + '        "node": ">=24"\n'
            + '    }\n'
            + '}\n',
        'package.json',
    );

    assert.deepEqual(ruleIds, []);
});

test('rejects HTTP dependencies in package.json', async () => {
    const ruleIds = await lint(
        '{\n'
            + '    "name": "example",\n'
            + '    "version": "1.0.0",\n'
            + '    "private": true,\n'
            + '    "type": "module",\n'
            + '    "engines": {\n'
            + '        "node": ">=24"\n'
            + '    },\n'
            + '    "dependencies": {\n'
            + '        "other": "http://example.com/example.tgz"\n'
            + '    }\n'
            + '}\n',
        'package.json',
    );

    assert.deepEqual(ruleIds, ['package-json/no-http-dependencies']);
});
