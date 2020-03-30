const db = require("../models");

module.exports = {
    sayHello: function(req, res) {
        res.json({hello: "hello"})
      },
    createUser: function(req, res) {
        db.User.create({name: "Andrew"})
    }
}