const books = require('./books');
const crm = require('./crm');

module.exports = class {
  static books = books;

  static crm = crm;
}

