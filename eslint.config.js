// eslint.config.js
// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const react = require('eslint-plugin-react');
const eslintConfigPrettier = require('eslint-config-prettier');
const reactHooks = require('eslint-plugin-react-hooks');
const tailwindcss = require('eslint-plugin-tailwindcss');

module.exports = tseslint.config({
  ignores: ['node_modules', '.nx/**', 'coverage/**', 'dist/**'],
  files: ['**/*.{ts,tsx,js,jsx}'],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.stylistic,
    react.configs.recommended,
    eslintConfigPrettier,
    tailwindcss.configs.recommended,
  ],
  plugins: {
    react,
    'react-hooks': reactHooks,
    tailwindcss,
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
  },
  settings: {
    react: { version: 'detect' }, // automatically detect React version
  },
  rules: {
    /* React best practices */
    'react/prop-types': 'off', // not needed with TypeScript
    'react/react-in-jsx-scope': 'off', // not required in React 17+

    /* React Hooks */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TypeScript best practices
    '@typescript-eslint/array-type': ['warn'],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',

    // JavaScript best practices
    eqeqeq: 'error',
    complexity: ['error', 20],
    curly: 'error',
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 160,
      },
    ],
    'max-lines': ['error', 400], // my favorite rule to keep files small
    'no-bitwise': 'error',
    'no-console': 'off',
    'no-new-wrappers': 'error',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'no-restricted-syntax': 'off',
    'no-shadow': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],

    /* Enforce single quotes in TS/JS (Prettier keeps JSX double quotes) */
    quotes: ['error', 'single', { avoidEscape: true }],

    // Security
    'no-eval': 'error',
    'no-implied-eval': 'error',
  },
});
