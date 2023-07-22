module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "overrides": [
      {
        "env": {
          "node": true
        },
        "files": [
          ".eslintrc.{js,cjs}"
        ],
        "parserOptions": {
          "sourceType": "script"
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": 2021, // Set the specific version of ECMAScript you are using
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true // Enable JSX parsing for React
      }
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "linebreak-style": ["error", "unix"],
      "semi": ["error", "always"]
    }
  };
  