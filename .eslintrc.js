module.exports = {
	root: true,
	overrides: [
		{
			files: ['*.ts'],
			parserOptions: {
				ecmaVersion: 12,
				sourceType: 'module',
			},
			extends: [
				'plugin:@angular-eslint/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
			],
			rules: {
				'import/prefer-default-export': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/no-floating-promises': 'off',
				'@typescript-eslint/unbound-method': 'off',
				'@typescript-eslint/no-unsafe-assignment': 'off',
				'@typescript-eslint/no-unsafe-member-access': 'off',
				'@typescript-eslint/no-unsafe-call': 'off',
				'@typescript-eslint/no-misused-promises': 'off',
				'@typescript-eslint/restrict-plus-operands': 'off',
				'@angular-eslint/no-empty-lifecycle-method': 'off',
				'@typescript-eslint/no-unsafe-return': 'off',
				'@typescript-eslint/restrict-template-expressions': 'off',
				'@typescript-eslint/no-unsafe-argument': 'off',
				'max-len': [
					'error',
					{
						code: 160,
						tabWidth: 2,
						ignoreUrls: true,
					},
				],
			},
		},
		{
			files: ['*.component.html'],
			plugins: ['html'],
			settings: {
				'html/html-extensions': ['.html', '.we'],
			},
			rules: {
				'max-len': ['error', { code: 160 }],
			},
		},
		{
			files: ['*.component.ts'],
			extends: ['plugin:@angular-eslint/template/process-inline-templates'],
		},
	],
};
