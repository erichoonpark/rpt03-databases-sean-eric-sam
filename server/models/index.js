var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      // Gets messages from the messages table in the chat database:
      db.query('SELECT * FROM messages;', function (error, results) {
        callback(error, results);
      })
    }, // a function which produces all the messages
    post: function (param, callback) {
      db.query(`INSERT INTO messages (username, message, roomname) VALUES("${param.username}", "${param.message}", "${param.roomname}");`, function (error, results) {
        callback(error, results);
      })
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users;', function (error, results) {
        callback(error, results);
      })
    },
    post: function (param, callback) {
      db.query(`INSERT INTO users (username) VALUES('${param}');`, function (error, results) {
        callback(error, results);
      })
    }
  }
};

