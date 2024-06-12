module.exports = {
  root: true,
  extends: ["eslint:recommended", "universe"],
  plugins: [],
  env: {},
  parserOptions: {},
  settings: {},
  reportUnusedDisableDirectives: true,
  ignorePatterns: [],
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "import/no-internal-modules": [
      "error",
      {
        allow: ["**/assets/*"],
      },
    ],
  },
  overrides: [],
};
