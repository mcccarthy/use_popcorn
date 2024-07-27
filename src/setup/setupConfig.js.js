const fs = require('fs');

const eslintConfig = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }],
    'react/jsx-max-props-per-line': [1, { when: 'always' }],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

const prettierConfig = {
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};

const prettierIgnore = `
node_modules
build
dist
`;

const eslintIgnore = `
node_modules
build
dist
`;

fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintConfig, null, 2));
fs.writeFileSync('.prettierrc', JSON.stringify(prettierConfig, null, 2));
fs.writeFileSync('.prettierignore', prettierIgnore.trim());
fs.writeFileSync('.eslintignore', eslintIgnore.trim());

console.log('Configuration files created successfully.');
