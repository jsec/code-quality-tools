import base from '@jarsec/oxlint-config/lint';
import { defineConfig } from 'oxlint';

export default defineConfig({
    extends: [base],
    ignorePatterns: ['**/test/fixtures/**'],
});
