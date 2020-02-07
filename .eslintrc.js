module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    browser: true,
  },

  rules: {
    // No need to append .js extension to imports
    'class-methods-use-this': [0],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
      },
    ],
    'import/prefer-default-export': [0],
    'no-underscore-dangle': [0],
    'no-use-before-define': [0],
    'global-require': [0],
    // Recommend not to leave any console.log in your code
    // Use console.error, console.warn and console.info instead
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-prototype-builtins': [0],
    // ESLint plugin for prettier formatting
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // https://github.com/prettier/prettier#options
        singleQuote: true,
      },
    ],
  },
};
