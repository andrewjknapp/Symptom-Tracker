const db = require("../models");

module.exports = {
    //Api route to add user to database. Will tailor to fit the database design we choose
    // createUser: function(req, res) {
    //     console.log(req.body);
    //     const { username, password} = req.body;
    //     db.User.create({username: username, password: password})
    //     res.json(200);
    // },
    getPosts: function(req, res) {
        //return all posts by user
        res.json("Route in progress");
    },
    addPost: function(req, res) {
        //receive object of post data and add to mongo db
        res.json("Route in progress");
    },
    deletePost: function(req, res) {
        //receive id of post and delete from mongo db
        res.json("Route in progress");
    },
    // Will get all physicians that a user has favorited. now returns dummy data
    getPhysicians: function(req, res) {
        res.json([{name: "Dr. Billy Bob", information: { phone: "1920321234", description: "he is a good guy"}}]);
    },
    savePhysician: function(req, res) {
        //receive information about physician and save to mongo
        res.json("Route in progress");
    },
    removePhysician: function(req, res) {
        //receive id of physician and remove from mongo
        res.json("Route in progress");
    },
    updatePhysician: function(req, res) {
        //receive id of physician and info to be changed and update mongo
        res.json("Route in progress");
    },
    getProfile: function(req, res) {
        //receive id of user and send object of user profile
        res.json("Route in progress");
    },
    setProfile: function(req, res) {
        //receive object of userProfile and store in db
        res.json("Route in progress");
    }


}