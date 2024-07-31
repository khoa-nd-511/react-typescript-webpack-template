import globals from "globals";
import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import a11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier/recommended";
import { fixupPluginRules } from "@eslint/compat";

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },

    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            ecmaVersion: 2020,
        },
    },

    js.configs.recommended,

    ...ts.configs.recommended,

    react.configs.flat.recommended,

    {
        plugins: {
            "react-hooks": fixupPluginRules(reactHooks),
        },
        rules: reactHooks.configs.recommended.rules,
    },

    a11y.flatConfigs.recommended,

    prettier,

    {
        rules: {
            "react/react-in-jsx-scope": "off",
        },
    },
];
