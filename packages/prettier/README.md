# @jarsec/prettier-config

> [!WARNING]
> This package is deprecated. Version 2.1.0 is the last release and it will get no further updates.

I've stopped using Prettier and now format code with oxfmt. The shared oxfmt configuration is in [`@jarsec/oxlint-config`](https://github.com/jsec/code-quality-tools/blob/develop/packages/oxlint-config/README.md).

## Switch to `@jarsec/oxlint-config`

1.  Remove this package and Prettier:

    ```sh
    npm uninstall @jarsec/prettier-config prettier
    ```

1.  Delete your Prettier configuration: the `prettier` field in `package.json`, or any `.prettierrc*` file.
1.  Follow the [formatting setup](https://github.com/jsec/code-quality-tools/blob/develop/packages/oxlint-config/README.md#format-with-the-shared-configuration) in the `@jarsec/oxlint-config` README.

oxfmt doesn't produce the same output as this configuration, so expect a one-off formatting diff the first time you run it.
