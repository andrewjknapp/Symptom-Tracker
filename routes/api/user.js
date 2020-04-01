const router = require("express").Router();
const userController = require("../../controllers/userController");

//All API routes will be added here

// Matches with /api/user/hello
// router.route("/hello")
//     .post(userController.createUser);

// Matches with /api/user/physicians
router.route("/physicians")
    .get(userController.getPhysicians) //find all user preferred physicians (currently returns dummy data)
    .post(userController.savePhysician) //add new preferred physician
    .put(userController.updatePhysician) //update physician information
    .delete(userController.removePhysician) //delete physician

router.route("/posts")
    .get(userController.getPosts) //find all user posts
    .post(userController.addPost) //add new user post
    //.put() //update post?
    .delete(userController.deletePost) //remove post

router.route("/profile")
    .get(userController.getProfile) //return user profile information
    .post(userController.setProfile) // add user profile info
    //put() //update user profile info
    //.delete() //remove user profile info

module.exports = router;