/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */

require("@rushstack/eslint-patch/modern-module-resolution");

const rules = {
  "comma-dangle": "off",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "no-mixed-spaces-and-tabs": "off",
  "no-warning-comments": "off",
  "object-curly-spacing": "off",
  "operator-linebreak": "off",
};

module.exports = {
  env: {
    node: true,
  },
  extends: [
    "xo",
    "xo-typescript",
    "plugin:perfectionist/recommended-natural",
    "plugin:prettier/recommended",
  ],
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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: [
    "@typescript-eslint/eslint-plugin",
    "import",
    "perfectionist",
    "prettier",
  ],
  rules,
  settings: {
    "import/resolver": {
      node: true,
      typescript: true,
    },
  },
};
