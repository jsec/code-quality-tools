# @jarsec/eslint-config

## 7.4.0

### Minor Changes

- 96fa1ff: Bump eslint to ^10.4
- baa269e: add a handful of neostandard rules
- 96fa1ff: Add eslint-package-json

### Patch Changes

- f720ad6: Fix extension in globs file import

## 7.3.1

### Patch Changes

- 1149dbd: remove @eslint-react/prefer-destructuring-assignment

## 7.3.0

### Minor Changes

- 4b19635: remove prefer-read-only-props rule

## 7.2.3

### Patch Changes

- 35e5183: Update dependencies:

  - @types/node 24.13.1 -> 24.13.2

## 7.2.2

### Patch Changes

- 45bf051: fix(deps): update eslint ecosystem (major)

## 7.2.1

### Patch Changes

- 391167d: Update typescript-eslint to TS v6 supported version

## 7.2.0

### Minor Changes

- 057c130: Update to TypeScript 6

### Patch Changes

- 921b6c9: fix(deps): update eslint ecosystem (major)

## 7.1.0

### Minor Changes

- c63b2f9: Update React config to support TanStack configs

## 7.0.1

### Patch Changes

- a831c22: fix(deps): update dependency @stylistic/eslint-plugin to ^5.9.0
- 6b7c3ee: fix(deps): update eslint
- 55c0da7: fix(deps): update dependency eslint-plugin-perfectionist to ^5.6.0

## 7.0.0

### Major Changes

- 0d9452d: Update to Eslint 10
  Replace React plugins with @eslint-react/eslint-plugin
- 20b51a6: fix(deps): update dependency @stylistic/eslint-plugin to v5
- c82b578: fix(deps): update dependency eslint-plugin-perfectionist to v5

### Patch Changes

- 0541a3c: fix(deps): update eslint
- 9e7f69f: fix(deps): update dependency globals to ^17.3.0
- 7c40703: fix(deps): update dependency eslint-plugin-n to ^17.24.0
- c9d5835: chore(deps): update dependency typescript to ^5.9.3

## 6.4.1

### Patch Changes

- 5415df4: chore(deps): update dependency typescript-eslint to ^8.53.0
- cf67259: chore(deps): update dependency globals to v17
- 6ee0d93: chore(deps): update dependency eslint-plugin-n to ^17.23.2
- 2975e2e: chore(deps): update eslint monorepo to ^9.39.2

## 6.4.0

### Minor Changes

- 9971bf1: Migrate `tseslint.config()` to eslint's built-in `defineConfig`

### Patch Changes

- 03d3594: chore(deps): update dependency eslint-plugin-n to ^17.23.1
- 6bd3a5e: chore(deps): update dependency typescript to ^5.9.2
- f6ec699: chore(deps): update eslint monorepo to ^9.39.1
- 88b4269: chore(deps): update dependency typescript to ^5.9.3
- 847ac77: chore(deps): update dependency globals to ^16.5.0
- c0e0cbd: chore(deps): update dependency eslint-plugin-unicorn to v62
- f6e5d54: chore(deps): update eslint monorepo to ^9.34.0
- ac491c7: chore(deps): update dependency typescript-eslint to ^8.42.0
- 137a191: chore(deps): update dependency typescript-eslint to ^8.49.0

## 6.3.0

### Minor Changes

- 023a087: Disable unpublished import errors for tsdown config files
- 8b8f376: Add react eslint config

### Patch Changes

- 9f170ce: chore(deps): update dependency typescript-eslint to ^8.36.0
- cc1d078: chore(deps): update dependency eslint-plugin-n to ^17.21.3
- 6e684cf: chore(deps): update dependency eslint-plugin-n to ^17.21.0

## 6.2.3

### Patch Changes

- 2f45440: Update @types/node to v22
- 8e49865: chore(deps): update dependency eslint-plugin-perfectionist to ^4.15.0
- a67977d: chore(deps): update dependency @stylistic/eslint-plugin to ^4.4.1
- c462cc1: chore(deps): update dependency eslint-plugin-unicorn to v59

## 6.2.2

### Patch Changes

- f3c316f: Disable n/no-unpublished-import for tests and config files
- 766fcf5: Disable unicorn/no-null
- d5cdeef: chore(deps): update dependency typescript to ^5.8.3

## 6.2.1

### Patch Changes

- 96bca17: chore(deps): update dependency eslint-plugin-perfectionist to ^4.12.3
- 7d61739: chore(deps): update dependency eslint-plugin-n to ^17.17.0
- 0d449ec: chore(deps): update dependency typescript-eslint to ^8.31.1
- df500da: chore(deps): update eslint monorepo to ^9.25.1

## 6.2.0

### Minor Changes

- 8e131a4: Disable type-checking rules for JavaScript files
- 5a293fc: - Update deprecated unicorn config
  - Remove deprecated `flat` option from @stylistic factory function

### Patch Changes

- ea1d64a: chore(deps): update dependency @stylistic/eslint-plugin to v4
- 8e60259: chore(deps): update dependency eslint-plugin-n to ^17.15.1
- df31669: chore(deps): update dependency eslint-plugin-perfectionist to v4
- c4b8a13: chore(deps): update eslint monorepo
- 185c428: chore(deps): update dependency typescript-eslint to ^8.24.1
- 2693c75: chore(deps): update dependency typescript-eslint to ^8.26.0
- 54f5069: chore(deps): update eslint monorepo to ^9.21.0
- 4938aaf: chore(deps): update dependency @stylistic/eslint-plugin to ^4.2.0

## 6.1.0

### Minor Changes

- ea942b3: Turn ASI off
- bf4b7f2: Re-require semicolons and up indent to 4 spaces
- 2265b31: Codify preference for types over interfaces
- 4e31593: multiline-comment-style: use starred-block instead of separate-lines

## 6.0.1

### Patch Changes

- 92dcc6b: chore(deps): update devDependency eslint to v9

## 6.0.0

### Major Changes

- bc38fb2: Update to ESLint v9
  - Bump ESLint dependencies to support the v9 migration.
  - Update config file to flat config format.
  - Drop eslint-plugin-import until they can get their lives together.
  - Simplify @stylistic configuration.

## 5.2.0

### Minor Changes

- c596d63: Add import-newlines plugin

## 5.1.0

### Minor Changes

- 6dd6e99: Tweaks to unicorn and stylistic rules

## 5.0.0

### Major Changes

- c703d78: Refactor eslint configuration

  Version 5 brings the following changes:
  - Removal of xo and xo-typescript
  - Separation of javascript and typescript rules
  - Introduction of @stylistic/eslint-plugin and associated rules (to replace dprint/prettier)
  - Addition of node-specific lint rules

### Patch Changes

- 6c2981c: fix(renovate): Update patch dependencies (patch)
- cc5eb8e: fix(renovate): Update minor (minor)

## 4.5.0

### Minor Changes

- 126a9e3: Add xo presets

## 4.4.0

### Minor Changes

- d51b6db: Add JavaScript-specific eslint configuration

### Patch Changes

- 9772eee: Remove unused dependencies

## 4.3.0

### Minor Changes

- 30ad781: Remove style-related rule

### Patch Changes

- 672bab9: fix(deps): update dependencies

## 4.2.0

### Minor Changes

- 4c2b1f2: Correct bug where stylistic plugin was not bundled into the library tarball

## 4.1.0

### Minor Changes

- a47f70d: Add @stylistic/eslint-plugin

## 4.0.0

### Major Changes

- 39fa095: - Remove xo and xo-typescript configurations
  - Add standard-with-typescript configuration
  - Remove eslint-plugin-prettier, let Prettier handle formatting in a separate step
  - Remove custom TypeScript rules

## 3.2.3

### Patch Changes

- ee1b9c4: fix(deps): update dependency eslint-plugin-perfectionist to v2.4.0

## 3.2.2

### Patch Changes

- 61d1f76: fix(deps): update dependencies
- d572a2e: fix(deps): update dependencies

## 3.2.1

### Patch Changes

- 66a808e: Add perfectionist config to extends array

## 3.2.0

### Minor Changes

- 966515f: Replace simple-import-sort with eslint-plugin-perfectionist

### Patch Changes

- 6c1d736: Add version ranges to typescript and eslint peer dependencies
- d68718e: fix(deps): update dependencies

## 3.1.0

### Minor Changes

- 8482cba: Revert standard-with-typescript configuration

### Patch Changes

- f13defd: fix(deps): update dependencies

## 3.0.0

### Major Changes

- d5fcb37: Base configuration around standard-with-typescript instead of XO

  XO requires your project to be ESM, StandardJS does not.

### Patch Changes

- 0335f6b: chore(deps): update peer dependency eslint to v8.49.0
- 013f9dc: fix(deps): update dependency @rushstack/eslint-patch to v1.4.0
- b310726: fix(deps): update @typescript-eslint dependencies to v6.5.0
- d63383e: fix(deps): update @typescript-eslint dependencies to v6.7.0

## 2.0.2

### Patch Changes

- fd2e6fc: fix(deps): update dependencies

## 2.0.1

### Patch Changes

- 78982ce: fix(deps): update dependencies

## 2.0.0

### Major Changes

- 550890f: Forcing a major version bump to fix publishing issues with the previous @jarsec/eslint-config package

## 1.0.0

### Major Changes

- 79473ff: Initial package build
