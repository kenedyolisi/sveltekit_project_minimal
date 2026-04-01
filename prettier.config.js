/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  trailingComma: "es5",
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  experimentalTernaries: true,
  experimentalOperatorPosition: "end",
  // tailwindStylesheet: './src/styles/app.css',
  plugins: [
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss", // must come last
  ],
  overrides: [
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};

export default config;
