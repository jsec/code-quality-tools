# jsec's Code Quality Tools

Shared lint, format and TypeScript configurations for my TypeScript projects. Each package is published to npm under the `@jarsec` scope.

## Packages

| Package | Configures | Status | README |
|---|---|---|---|
| `@jarsec/oxlint-config` | oxlint and oxfmt | Active | [packages/oxlint-config](packages/oxlint-config/README.md) |
| `@jarsec/eslint-config` | ESLint | Active | [packages/eslint-config](packages/eslint-config/README.md) |
| `@jarsec/tsconfig` | TypeScript | Active | [packages/tsconfig](packages/tsconfig/README.md) |
| `@jarsec/prettier-config` | Prettier | Deprecated | [packages/prettier](packages/prettier/README.md) |
| `@jarsec/biome-config` | Biome | Deprecated | [packages/biome-config](packages/biome-config/README.md) |

For a new project, install `@jarsec/oxlint-config` and `@jarsec/tsconfig`. The Prettier and Biome packages get no further updates; use `@jarsec/oxlint-config` instead.

## Development

The repo uses pnpm workspaces and Turborepo.

```sh
pnpm install
```

| Command | What it does |
|---|---|
| `pnpm lint` | Runs oxlint on the repo, then each package's `lint` script |
| `pnpm format` | Formats the repo with oxfmt |
| `pnpm test` | Runs each package's tests |
| `pnpm changeset` | Records a version bump and changelog entry for the packages you changed |

Releases go through [Changesets](https://github.com/changesets/changesets): add a changeset with each change, and the release workflow versions and publishes the packages.
