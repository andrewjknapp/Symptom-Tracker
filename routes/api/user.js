const router = require("express").Router();
const userController = require("../../controllers/userController");

//All API routes will be added here

// Matches with /api/user/hello
router.route("/hello")
    .get(userController.sayHello)
    .post(userController.createUser);

module.exports = router;