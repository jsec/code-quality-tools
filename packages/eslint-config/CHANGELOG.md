# @jarsec/eslint-config

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
