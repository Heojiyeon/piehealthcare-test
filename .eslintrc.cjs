/* eslint-env node */

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-duplicate-imports': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
    'arrow-body-style': ['error', 'as-needed'],
  },
};
