module.exports = {
  extends: [
    "airbnb-base"
  ],
  "plugins": [
    "jest"
  ],
  "rules": {
    "class-methods-use-this": "off"
  },
  "env": {
    "jest/globals": true
  }
}
