const base = require('@substrate/dev/config/jest');

module.exports = {
  ...base,
  testPathIgnorePatterns: ['/lib/', '/node_modules/'],
};
