# jsec's Code Quality Tools

This is a set of commonly used code quality enforcement tools used in TypeScript projects, with my personal preferences baked into configurations. The goal of this repo is so that I don't have to keep installing and configuring the same packages over and over and over again.

## What's inside?

This Turborepo includes the following:

### Apps and Packages

- `@jarsec/tsconfig`: A base [tsconfig](https://www.typescriptlang.org/tsconfig) file with my preferred settings.
- `@jarsec/prettier-config`: A base [Prettier](https://prettier.io/) configuration with my preferred settings.
- `@jarsec/eslint-config`: A base [ESLint](https://eslint.org/) configuration with my preferred settings. Based off of [standard-with-typescript](https://github.com/standard/eslint-config-standard-with-typescript)

## Usage

### TSConfig 

#### Install
```
npm install --save-dev @jarsec/tsconfig
```
#### Usage
`tsconfig.json`
```json
{
  "extends": "./node_modules/@jarsec/tsconfig/tsconfig.json"
}
```

### Prettier

#### Install
```
npm install --save-dev @jarsec/prettier-config
```
#### Usage
`package.json`
```json
{
  "prettier": "@jarsec/prettier-config"
}
```

### ESLint

#### Install
```
npm install --save-dev @jarsec/eslint-config
```
#### Usage
`.eslintrc.js`
```js
{
  extends: [ '@jarsec/eslint-config' ]
}
```
