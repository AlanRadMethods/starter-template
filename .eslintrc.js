module.exports = {
  root: true,
  extends: [
    'next',
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/jsx-runtime',
    'plugin:vitest/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'testing-library',
    'vitest',
    'sort-exports',
    'eslint-plugin-no-inline-styles',
    'deprecation',
    'jsx-a11y',
    'regex',
  ],
  rules: {
    'arrow-body-style': 'error',
    curly: [1, 'all'],
    // BUG
    // https://github.com/eslint/eslint/issues/15617
    'no-restricted-exports': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**/*.ts?(x)',
          '**/*.test.ts?(x)',
          '**/tests/**',
          '**/mocks/**/*.ts?(x)',
          'vitest.config.ts',
        ],
      },
    ],
    'import/no-self-import': 'error',
    'import/no-cycle': 'off',
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'never',
      },
    ],
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // function-declaration
        unnamedComponents: 'arrow-function', // function-expression
      },
    ],
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments', // defaultProps
      },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
      },
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowNamespace: true,
      },
    ],
    'regex/invalid': [
      'error',
      [
        {
          regex: 'import .* from (\'|")(@/|./|../).*\\b(\\w+)/\\3\\b(\'|")',
          message: 'Please remove duplicate path from local import path',
          replacement: {
            function:
              'const last = text.lastIndexOf(captured[2]); return last === -1 ? text : `${text.slice(0, last - 1)}${text.slice(last + captured[2].length)}`',
          },
        },
      ],
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-inline-styles/no-inline-styles': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '**/../types/**/*',
              '@/types/**/*',
              '@/fixtures/**/*',
              '@/constants/**/*',
              'lodash/**/*',
            ],
          },
          {
            group: ['lodash'],
            importNames: [
              'camelCase',
              'capitalize',
              'kebabCase',
              'lowerCase',
              'snakeCase',
              'startCase',
              'upperCase',
            ],
            message: 'Use equivalent utility from Case instead.',
          },
        ],
      },
    ],
    'no-restricted-syntax': [
      'error',
      "JSXIdentifier[name='zIndex']", // https://www.codegram.com/blog/stop-ab-using-z-index/
      "Identifier[name='withSentry']", // https://github.com/getsentry/sentry-javascript/issues/5893
      "MemberExpression[object.name='formState']", // https://github.com/react-hook-form/react-hook-form/issues/9855
    ],
    'deprecation/deprecation': 'error',
  },
  overrides: [
    {
      files: ['src/types/**/*.ts', 'src/schemas/**/*.ts'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/*.test.ts?(x)', 'vitest.config.ts'],
      rules: {
        'global-require': 'off',
        'no-underscore-dangle': [
          'error',
          {
            allow: ['_getJSONData'],
          },
        ],
        'react/jsx-no-constructed-context-values': 'off',
      },
      extends: ['plugin:testing-library/react', 'plugin:vitest/recommended'],
    },
    {
      files: ['**/index.ts'],
      rules: {
        'sort-exports/sort-exports': [
          'error',
          { sortDir: 'asc', ignoreCase: true, sortExportKindFirst: 'type' },
        ],
      },
    },
  ],
}
