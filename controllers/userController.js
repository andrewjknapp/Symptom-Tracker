const db = require("../models");

module.exports = {
    //Api route to add user to database. Will tailor to fit the database design we choose
    createUser: function(req, res) {
        console.log(req.body);
        const { username, password} = req.body;
        db.User.create({username: username, password: password})
        res.send(200);
    },
    // Will get all physicians that a user has favorited. now returns dummy data
    getPhysicians: function(req, res) {
        res.json([{name: "Dr. Billy Bob", information: { phone: "1920321234", description: "he is a good guy"}}]);
    }

}