# ESLint Configuration

*Note:* This configuration requires ESLint >9.

This package contains my standard ESLint configuration.

Rules are collected from the following shared configurations:

- `eslint` recommended configuration.
- `typescript-eslint` recommended and stylistic configurations.
- `eslint-plugin-unicorn`
- `eslint-plugin-perfectionist`
- `@stylistic` code style configuration.

### Installation

```
npm install --save-dev @jarsec/eslint-config
```

### Usage

```js
import config from '@jarsec/eslint.config';

export default [
    ...config,
    // other configurations
]
```
