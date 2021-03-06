module.exports = {
  "root": true,
  "extends": ["eslint:recommended",
  "plugin:vue/recommended"
   ],
  "globals": {
    "window": true,
    "document": true,
    "fetch": true,
    "Headers": true,
    "Request": true,
    "FormData": true,
    "FileReader": true,
    "localStorage": true
  },
  "env": {
    "node": true,
    "es6": true,
    "amd": true,
    "browser": true,
    "jquery": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "globalReturn": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "import",
    "html",
    "jsx-a11y",
    "vue"
  ],
  "settings": {
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },
  "rules": {
    "no-console": 0
  }
}
