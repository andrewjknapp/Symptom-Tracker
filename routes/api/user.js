const router = require("express").Router();
const userController = require("../../controllers/userController");

//all routes will use the user id given to them by passport

// Matches with /api/user/create
router.route("/create")
    .post(userController.createUser);

router.route("/physicians")
    //Expects user id
    .get(userController.getPhysicians) //find all user preferred physicians (currently returns dummy data)
    //Expects req.body with a name and information
    .post(userController.savePhysician) //add new preferred physician
    //.put(userController.updatePhysician) //update physician information
    //Expexts req.body with a name
    .put(userController.removePhysician) //delete physician

router.route("/posts")
    //Expexts req.body {title: "", description: "", symptoms: [{ type:"", severity: num }]}
    .post(userController.addPost) //add new user post
    //.put() //update post?
    .put(userController.deletePost) //remove post

router.route("/posts/:id")
    .get(userController.getPosts)

router.route("/profile")
    //.get(userController.getProfile) //return user profile information
    //Expects req.body { profile: { all the profile info }} 
    .post(userController.setProfile) // add user profile info
    //put() //update user profile info
    //.delete() //remove user profile info
router.route("/profile/:id")
    .get(userController.getProfile)

module.exports = router;