/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.resolve(__dirname, "..", "./src/index.tsx"),
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": path.resolve(__dirname, "..", "./src"),
        },
    },
    output: {
        path: path.resolve(__dirname, "..", "./build"),
        filename: "bundle.js",
        clean: true,
    },
    target: ["web", "es5"],

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "output.css",
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "..", "./src/index.html"),
        }),
    ],
};
