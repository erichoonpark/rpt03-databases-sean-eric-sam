var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(error, results) {
        if (error) throw error;
        res.status(200).send(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(error, results) {
        if(error) throw error;
        res.status(200).send(results);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      models.users.get(function(error, results) {
        if (error) throw error;
        res.status(200).send(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, function(error, results) {
        if(error) throw error;
        res.status(200).send(results);
      })
    }
  }
};

