module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: "@typescript-eslint/parser",
  env: {
    browser: true
  },
  extends: "standard",
  rules: {
    indent: ["error", 2]
  },
  plugins: ["react", "@typescript-eslint/eslint-plugin"]
}