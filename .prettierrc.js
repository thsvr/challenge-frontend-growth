module.exports = {
  printWidth: 100,
  tabWidth: 4,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  overrides: [
    {
      files: '*.{js,jsx,tsx,ts,html}',
      options: {
        tabWidth: 4,
      },
    },
  ],
};
