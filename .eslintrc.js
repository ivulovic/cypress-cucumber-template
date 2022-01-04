const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"),
);

module.exports = {
  root: true,
  extends: [
    "plugin:chai-friendly/recommended",
    "prettier",
  ],
  env: {
    es6: true,
  },
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
  },
};