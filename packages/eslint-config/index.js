require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	env: {
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/stylistic',
		'plugin:perfectionist/recommended-natural',
		'prettier'
	],
	overrides: [
		{
			files: ['**/*/*.{test,spec}.ts'],
			rules: {
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/unbound-method': 'off'
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['import', 'perfectionist', '@typescript-eslint/eslint-plugin'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: true
		}
	}
}
