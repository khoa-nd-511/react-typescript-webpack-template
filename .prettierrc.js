/** @type {import("prettier").Config} */
module.exports = {
    singleQuote: false,
    semi: true,
    tabWidth: 4,
    endOfLine: "auto",

    // Sorting rules
    plugins: ["@ianvs/prettier-plugin-sort-imports"],
    importOrder: ["<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^[.]"],
    importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
    importOrderTypeScriptVersion: "5.0.0",
};
