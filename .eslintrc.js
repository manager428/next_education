const isProduction = process.env.NODE_ENV === 'production'

// http://eslint.org/docs/user-guide/configuring
// https://github.com/prettier/prettier#eslint
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:@next/next/recommended',
  ],
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    'json',
    'import',
    'simple-import-sort',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': isProduction ? 2 : 1,
    'import/extensions': [
      2,
      'ignorePackages',
      { js: 'never', ts: 'never', tsx: 'never' },
    ],
    camelcase: 0,
    'import/prefer-default-export': 0,
    'react/jsx-no-bind': 2,
    'react/jsx-boolean-value': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.ts', '.tsx'] }],
    'react/jsx-sort-props': [2, { callbacksLast: true }],
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'sort-imports': 0,
    'import/order': 0,
    'import/no-unresolved': [2, { caseSensitive: false }],
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // `react` related packages come first.
          ['^react', 'prop-types'],
          ['^react-icons'],
          // `styled-components` related packages.
          ['^styled', '^@styled'],
          // Other packages.
          ['^@?[a-zA-Z0-9]'],
          // `lodash` related packages.
          ['^lodash'],
          // Internal packages.
          ['^Assets(/.*|$)'],
          ['^Containers(/.*|$)'],
          ['^Components/UI(/.*|$)'],
          ['^Components/Blocks(/.*|$)'],
          ['^Components/Pages(/.*|$)'],
          ['^Components(/.*|$)'],
          ['^Config(/.*|$)'],
          ['^Constants(/.*|$)'],
          ['^Hooks(/.*|$)'],
          ['^Pages(/.*|$)'],
          ['^Router(/.*|$)'],
          ['^Store(/.*|$)'],
          ['^Services(/.*|$)'],
          ['^Theme(/.*|$)'],
          ['^Utils(/.*|$)'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
