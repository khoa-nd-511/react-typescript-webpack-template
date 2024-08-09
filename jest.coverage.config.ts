/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";
import baseConfig from "./jest.config";

const config: Config = {
    ...baseConfig,
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    collectCoverageFrom: ["src/**/*.{ts,tsx}"],

    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "src/components/ui/*",
        "src/index.tsx",
    ],

    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "v8",

    // A list of reporter names that Jest uses when writing coverage reports
    coverageReporters: ["json", "text", "lcov", "clover"],

    // An object that configures minimum threshold enforcement for coverage results
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: -10,
        },
    },
};

export default config;
