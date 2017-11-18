var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      // Gets messages from the messages table in the chat database:
      db.query('SELECT * FROM messages;', function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        if (error) {
          console.log(error);
        } else {
          console.log(results);
        }
      })
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (param) {
      db.query(`INSERT INTO users (username) VALUES('${param}');`, function (error, results, fields) {
        // error will be an Error if one occurred during the query
        // results will contain the results of the query
        // fields will contain information about the returned results fields (if any)
        if (error) {
          console.log(error);
        } else {
          console.log(results);
        }
      })
    }
  }
};

