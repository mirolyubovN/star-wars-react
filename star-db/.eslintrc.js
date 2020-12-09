module.exports = {
  env: {
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/require-default-props": "off",
    "react/jsx-one-expression-per-line": "off",
    "indent": ["error", "tab"],
    "object-curly-newline": ["error", {
      "ObjectExpression": { "minProperties": 5, "multiline": true, "consistent": true },
      "ObjectPattern": { "minProperties": 5, "multiline": true, "consistent": true },
      "ImportDeclaration": { "minProperties": 5, "multiline": true, "consistent": true },
      "ExportDeclaration": { "minProperties": 5, "multiline": true, "consistent": true }
    }]
  },
};
