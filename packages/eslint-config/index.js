/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-call */

require("@rushstack/eslint-patch/modern-module-resolution");

const rules = {
  "comma-dangle": "off",
  "object-curly-spacing": "off",
  "operator-linebreak": "off",
  "no-mixed-spaces-and-tabs": "off",
  "no-warning-comments": "off",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "perfectionist/sort-objects": [
    "error",
    {
      type: "natural",
      order: "asc"
    }
  ]
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
    "perfectionist",
    "prettier",
  ],
  extends: [
    "xo",
    "xo-typescript",
    "plugin:prettier/recommended",
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
