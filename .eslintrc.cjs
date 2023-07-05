module.exports = {
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:astro/recommended",
		"prettier",
	],
	overrides: [
		{
			files: ["*.astro", ".eslintrc.{js,cjs}"],
			parser: "astro-eslint-parser",
			plugins: ["astro"],
			env: {
				node: true,
				"astro/astro": true,
				es2020: true,
			},
			parserOptions: {
				sourceType: "module",
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				"astro/no-conflict-set-directives": "error",
				"astro/no-unused-define-vars-in-style": "error",
			},
		},
		{
			// Define the configuration for `<script>` tag.
			// Script in `<script>` is assigned a virtual file name with the `.js` extension.
			files: ["**/*.astro/*.js", "*.astro/*.js"],
			env: {
				browser: true,
				es2020: true,
			},
			parserOptions: {
				sourceType: "module",
			},
			rules: {
				// override/add rules settings here, such as:
				// "no-unused-vars": "error"

				// If you are using "prettier/prettier" rule,
				// you don't need to format inside <script> as it will be formatted as a `.astro` file.
				"prettier/prettier": "off",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["astro", "@typescript-eslint", "prettier"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
