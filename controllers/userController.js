const db = require("../models");

const id = "1";

module.exports = {
    //Api route to add user to database. Will tailor to fit the database design we choose

    //placeholder to create users until passport is ready
    createUser: function(req, res) {
        console.log(req.body);
        const { username, password, email, firstName} = req.body;
        db.User.create({username: username, password: password, id: "1", firstName: firstName, email: email})
        res.json(200);
    },

    getPosts: function(req, res) {
        const userId = req.params.id;
        db.User.findOne({ _id: userId })
        .then( userInfo => res.json(userInfo.posts))
        .catch(err => res.status(422).json(err));
        
    },

    addPost: function(req, res) {
        //receive object of post data and add to mongo db

        const { title, description, symptoms, id, temperature } = req.body
        const time = new Date()
        // let title="My Head is Hurting";
        // let description="My head has been hurting since 12";
        // let symptoms=[{type:"headache", severity:5}];

        db.User.findOneAndUpdate({ _id: id }, {
            $push: {
                posts: { title, description, symptoms, time, temperature }
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    deletePost: function(req, res) {
        //receive id of post and delete from mongo db
        const { description, id } = req.body;
        db.User.findOneAndUpdate({ _id: id }, 
            { $pull: { "posts": { description } } } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    // Will get all physicians that a user has favorited. now returns dummy data
    getPhysicians: function(req, res) {

        db.User.findOne({ id: id })
        .then( userInfo => res.json(userInfo.preferredPhysicians))
        .catch(err => res.status(422).json(err));

    },

    savePhysician: function(req, res) {
        //receive information about physician and save to mongo

        const { name, information } = req.body;

        db.User.findOneAndUpdate({ id: id }, { 
            $push: { 
                preferredPhysicians: { name, information }
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        
    },

    removePhysician: function(req, res) {
        //receive id of physician and remove from mongo

        const { name } = req.body;
        db.User.findOneAndUpdate({ id: id }, 
            { $pull: { "preferredPhysicians": { name } } } )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

    updatePhysician: function(req, res) {
        //receive id of physician and info to be changed and update mongo
        res.json("Route in progress");
    },

    getProfile: function(req, res) {
        const { id } = req.params;
        db.User.findOne({ _id: id })
        .then(dbModel => res.json(dbModel.medicalProfile))
        .catch(err => res.status(422).json(err));
    },

    setProfile: function(req, res) {
        const { profile, id } = req.body;
        db.User.findOneAndUpdate({ _id: id }, {
            $set: {
                medicalProfile : profile
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }


}