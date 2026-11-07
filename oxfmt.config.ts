import fmt from '@jarsec/oxlint-config/fmt';
import { defineConfig } from 'oxfmt';

export default defineConfig({
    ...fmt,
    ignorePatterns: ['**/test/fixtures/**', '**/CHANGELOG.md'],
});
