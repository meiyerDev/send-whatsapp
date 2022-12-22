/* eslint-disable no-undef */
module.exports = {
  jsxSingleQuote: true,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 120,
  bracketSameLine: false,
  bracketSpacing: true,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  tailwindConfig: './tailwind.config.cjs',
  plugins: [require('prettier-plugin-tailwindcss')],
};
