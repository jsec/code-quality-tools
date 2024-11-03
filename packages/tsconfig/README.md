# TypeScript Configurations

This package includes 8 `tsconfig.json` files, broken out by platform and compilation mode.

### Installation

```
npm install --save-dev @jarsec/tsconfig
```

### Configurations

Select a configuration from the following table based on your project's context and build tooling, and add the associated `extends` line to your `tsconfig.json`.

| Platform 	| Project Type          	| Uses Bundler? 	| Configuration                                     	|
|----------	|-----------------------	|---------------	|---------------------------------------------------	|
| Node     	| Application           	| No            	| `"extends": "@jarsec/tsconfig/node"`              	|
| Node     	| Library               	| No            	| `"extends": "@jarsec/tsconfig/node/lib"`          	|
| Node     	| Library (in monorepo) 	| No            	| `"extends": "@jarsec/tsconfig/node/lib-monorepo"` 	|
| Node     	| Any                   	| Yes           	| `"extends": "@jarsec/tsconfig/bundler/node"`      	|
| Web      	| Application           	| No            	| `"extends": "@jarsec/tsconfig/web"`               	|
| Web      	| Library               	| No            	| `"extends": "@jarsec/tsconfig/web/lib"`           	|
| Web      	| Library (in monorepo) 	| No            	| `"extends": "@jarsec/tsconfig/web/lib-monorepo"`  	|
| Web      	| Any                   	| Yes           	| `"extends": "@jarsec/bundler/web"`                	|
