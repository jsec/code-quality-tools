# @jarsec/oxlint-config

Shared oxlint and oxfmt configurations for JavaScript and TypeScript projects, with presets for Node and React.

## Install the packages

Install the configuration package and its peer dependencies:

```sh
npm install --save-dev @jarsec/oxlint-config oxlint oxlint-tsgolint oxfmt
```

## Lint with the shared configuration

1.  Create an `oxlint.config.ts` file in the root of your project.
1.  Extend the base configuration:

    ```ts
    import base from '@jarsec/oxlint-config/lint';
    import { defineConfig } from 'oxlint';

    export default defineConfig({
        extends: [base],
    });
    ```

    For a Node project, import `@jarsec/oxlint-config/lint/node` instead. For a React project, import `@jarsec/oxlint-config/lint/react`. Both include the base configuration.

    Vitest rules run only on `*.test.*` and `*.spec.*` files. To change one of them, add an override for those files that also sets `plugins: ['vitest']`.

    The configuration runs type-aware rules on TypeScript files, which read your `tsconfig.json`. JavaScript files get only the rules that don't need type information.

1.  Run oxlint:

    ```sh
    npx oxlint
    ```

oxlint lists each rule violation with its file and line.

## Format with the shared configuration

1.  Create an `oxfmt.config.ts` file in the root of your project.
1.  Spread the shared configuration into your own. oxfmt doesn't support `extends`.

    ```ts
    import fmt from '@jarsec/oxlint-config/fmt';
    import { defineConfig } from 'oxfmt';

    export default defineConfig({
        ...fmt,
    });
    ```

1.  Format your files:

    ```sh
    npx oxfmt
    ```

oxfmt rewrites the files in place and prints how many files it processed.
