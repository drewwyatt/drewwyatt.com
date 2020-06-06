const packageJson = require('./package.json')

module.exports = {
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'prettier'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'eslint-comments/no-use': 'off',
    'import/no-namespace': 'off',
    'no-unused-vars': 'off',
    'no-console': 'error',
    'react/prop-types': 'off',
    'react/no-children-prop': 'off',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: packageJson.dependencies.react,
    },
  },
}
