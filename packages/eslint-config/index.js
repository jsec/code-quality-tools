/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */

require("@rushstack/eslint-patch/modern-module-resolution");

const rules = {
  "comma-dangle": "off",
  "object-curly-spacing": "off",
  "operator-linebreak": "off",
  "no-mixed-spaces-and-tabs": "off",
  "@typescript-eslint/comma-dangle": "off",
  "@typescript-eslint/indent": "off",
  "@typescript-eslint/quotes": "off",
  "@typescript-eslint/semi": "off",
  "@typescript-eslint/object-curly-spacing": "off",
  "no-unused-vars": "off",
  "no-warning-comments": "off",
  "simple-import-sort/imports": "error",
  "simple-import-sort/exports": "error",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
};

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    node: true,
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "import",
    "simple-import-sort",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "standard-with-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules,
  overrides: [
    {
      files: ["**/*/*.{test,spec}.ts"],
      rules: {
        ...rules,
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
  ],
};
