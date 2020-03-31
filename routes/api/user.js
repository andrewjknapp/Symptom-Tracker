const router = require("express").Router();
const userController = require("../../controllers/userController");

//All API routes will be added here

// Matches with /api/user/hello
router.route("/hello")
    .post(userController.createUser);

// Matches with /api/user/physicians
router.route("/physicians")
    .get(userController.getPhysicians) //find all user preferred physicians (currently returns dummy data)
    //.post() //add new preferred physician
    //.put() update physician information
    //.delete() delete physician

router.route("/posts")
    //.get() find all user posts
    //.post() add new user post
    //.put() update post?
    //.delete() remove post

router.route("/profile")
    //.get() return user profile information
    //.post() // add user profile info
    //put() update user profile info
    //.delete() remove user profile info

module.exports = router;