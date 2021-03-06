module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "globals": {
    "graphql": false,
  },
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "prefer-destructuring": ["off"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "default-case": ["warn"],
    "dot-notation": ["warn"],
    "no-plusplus": ["off"],
    "padded-blocks": ["off"],
    "no-underscore-dangle": ["off"],
    "no-console": ["off"],
    "arrow-parens": ["off"],
    "class-methods-use-this": ["warn"],
    "consistent-return": ["warn"],
    "no-nested-ternary": ["off"],
    "no-lonely-if": ["warn"],
    "import/prefer-default-export": ["off"],
    "import/no-extraneous-dependencies": [
      "warn",
      {
        "devDependencies": true,
        "optionalDependencies": false,
        "peerDependencies": false
      }
    ],
    "jsx-a11y/no-static-element-interactions": ["warn"],
    "react/forbid-prop-types": ["off"],
    "react/require-default-props": ["off"],
    "react/jsx-indent": ["warn", 2],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".js"]
      }
    ],
    "react/no-unused-prop-types": ["off"],
    "react/no-array-index-key": ["warn"],
    "react/prefer-stateless-function": [
      "off",
      {
        "ignorePureComponents": true
      }
    ],
    "react/prop-types": ["off"],
    "jsx-a11y/href-no-hash": ["off"],
    "jsx-a11y/img-has-alt": ["off"],
    "object-curly-newline": ["off"],
    "jsx-a11y/label-has-for": ["warn"],
    "function-paren-newline": ["warn"],
    "jsx-a11y/anchor-is-valid": ["warn"],
    "react/jsx-curly-brace-presence": ["warn"],
    "jsx-a11y/click-events-have-key-events": ["warn"],
    "react/default-props-match-prop-types": ["warn"],
    "no-restricted-globals": ["warn"],
    "prefer-promise-reject-errors": ["warn"],
    "react/no-unused-state": ["warn"],
    "no-buffer-constructor": ["warn"],
    "react/jsx-closing-tag-location": ["warn"],
    "react/jsx-max-props-per-line": ["warn"],
    "react/no-typos": ["warn"],
    "jsx-a11y/iframe-has-title": ["warn"],
    "jsx-a11y/accessible-emoji": ["off"],
    "react/no-will-update-set-state": ["warn"],
    "jsx-a11y/no-noninteractive-element-interactions": ["warn"],
    "comma-dangle": ["warn"],
    "react/destructuring-assignment": ["off"],
    "max-len": [
      "error",
      {
        "code": 150
      }
    ]
  }
}
