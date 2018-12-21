
const uuidv4 = require('uuid/v4');
const db = require('../services/database');


module.exports = {
  fetch: function fetch(token) {
    return db[token];
  },

  tokenize: function tokenize(cc) {
    const token = uuidv4();
    db[token] = cc;
    return token;
  },

};
