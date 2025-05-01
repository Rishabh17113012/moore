// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'

export default [
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      // Base recommended rules
      ...js.configs.recommended.rules,

      // React Hooks
      ...reactHooks.configs.recommended.rules,

      // React Fast Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Unused vars ignore UPPER_CASE (e.g. for constants)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Case-sensitive import resolution
      'import/no-unresolved': ['error', { caseSensitive: true }],
    },
  },
]
