import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { describe, it } from 'node:test';

const lint = (config, file) => {
    try {
        execFileSync('oxlint', ['--format=json', '-c', config, file], { encoding: 'utf8' });

        return [];
    } catch (error) {
        return JSON.parse(error.stdout).diagnostics.map(diagnostic => diagnostic.code);
    }
};

describe('@jarsec/oxlint-config', () => {
    describe('lint', () => {
        it('should report native and perfectionist rules', () => {
            const codes = lint('test/fixtures/oxlint.config.js', 'test/fixtures/base.ts');

            assert.deepEqual(codes.toSorted(), ['eslint(eqeqeq)', 'perfectionist(sort-objects)']);
        });
    });

    describe('lint/react', () => {
        it('should report native react and tanstack rules', () => {
            const codes = lint('test/fixtures/react.config.js', 'test/fixtures/list.tsx');

            assert.deepEqual(codes.toSorted(), [
                '@tanstack/query(stable-query-client)',
                'react(no-array-index-key)',
            ]);
        });
    });
});
