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
        it('should report native and type-aware rules', () => {
            const codes = lint('test/fixtures/oxlint.config.js', 'test/fixtures/base.ts');

            assert.deepEqual(codes.toSorted(), [
                'eslint(eqeqeq)',
                'promise(catch-or-return)',
                'typescript(no-floating-promises)',
            ]);
        });
    });

    describe('lint/react', () => {
        it('should report native react rules', () => {
            const codes = lint('test/fixtures/react.config.js', 'test/fixtures/list.tsx');

            assert.ok(codes.includes('react(no-array-index-key)'));
        });
    });
});
