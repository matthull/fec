module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 4,
        },
        multiline: {
          max: 3,
        },
      },
    ],
    'no-console': 'warn',
    // Fixing optional chaining can be a significant refactor
    'no-unsafe-optional-chaining': 'warn',
    // Fixing this aliasing also tends to be a big refactor
    '@typescript-eslint/no-this-alias': 'warn',
    'vue/multi-word-component-names': 'off',
    // The following rules are important but demoted to warning b/c they
    // are often risky to fix.
    'vue/no-side-effects-in-computed-properties': 'warn',
    'vue/no-mutating-props': 'warn',
    'vue/no-reserved-component-names': 'warn',
    'vue/no-deprecated-filter': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    // OFFs
    'vue/singleline-html-element-content-newline': 'off', // Conflicts with prettier
    'vue/max-attributes-per-line': 'off', // Conflicts with prettier
    'vue/no-v-for-template-key-on-child': 'off', // the compiler breaks when this rule is satisfied and :key is added to a template
    // note we DO NOT obey the linting here as it breaks per:
    // https://linear.app/userevidence/issue/UE-1168/issue-with-results-page-filters-freezing-the-page
    // setting this to 'warn' does not prevent the autosave from correcting it
    'vue/no-deprecated-v-bind-sync': 'off',
  },
  globals: {
    process: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2022,
    parser: '@typescript-eslint/parser',
  },
}
