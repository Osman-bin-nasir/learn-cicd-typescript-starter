import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import security from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: {
      js,
      security
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.node
    },
    rules: {
      ...security.configs.recommended.rules
    }
  },
  tseslint.configs.recommended
]);