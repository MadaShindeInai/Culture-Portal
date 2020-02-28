const { version } = require('./package.json');

module.exports = {
  version,
  components: ['../src/components/[A-Z]**/*.js'], // index.js
  ignore: ['**/src/test.js'],
};