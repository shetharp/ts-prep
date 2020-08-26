module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)", // match .ts, .tsx, and .js files in a __tests__ directory
        "**/?(*.)+(spec|test).+(ts|tsx|js)", // match .spec.ts and .test.ts files (also applies to .tsx and .js)
        "**/*.(ts|js)", // match all .ts and .js files
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest" // Use ts-jest dependency to transform .ts and .tsx files for jest
    },
}