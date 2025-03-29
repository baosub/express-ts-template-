import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  {
    extends: [
      "plugin:prettier/recommended",  // Esta es la configuración recomendada de Prettier para ESLint
      "prettier" // Desactiva reglas de ESLint que pueden entrar en conflicto con Prettier
    ],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": ["error"] // Esto asegura que Prettier sea aplicado y cualquier violación sea tratada como un error
    }
  },
]);