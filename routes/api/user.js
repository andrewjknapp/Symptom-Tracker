const router = require("express").Router();

//All API routes will be added here

// Matches with /api/user/hello
router.route("/hello")
    .get(function(req, res) {
        res.json({hello: "hello"})
      })

module.exports = router;