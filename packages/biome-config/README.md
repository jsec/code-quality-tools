# @jarsec/biome-config

> [!WARNING]
> This package is deprecated. Version 0.0.10 is the last release and it will get no further updates.

I've stopped using Biome and now lint with oxlint and format with oxfmt. The shared configurations for both are in [`@jarsec/oxlint-config`](https://github.com/jsec/code-quality-tools/blob/develop/packages/oxlint-config/README.md).

## Switch to `@jarsec/oxlint-config`

1.  Remove this package and Biome:

    ```sh
    npm uninstall @jarsec/biome-config @biomejs/biome
    ```

1.  Delete your `biome.json` or `biome.jsonc` file.
1.  Follow the [`@jarsec/oxlint-config` README](https://github.com/jsec/code-quality-tools/blob/develop/packages/oxlint-config/README.md) to set up linting and formatting.

The oxlint rules and oxfmt output don't match this configuration, so expect new lint errors and a one-off formatting diff the first time you run them.
