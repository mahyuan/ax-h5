module.exports = {
    "env": {
        "browser": true,
        "es2015": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "plugin:prettier/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
