const router = require("express").Router();
const userRoutes = require("./user");
const signInRoutes = require("./accounts")

router.use("/user", userRoutes);
router.use("/account", signInRoutes)

module.exports = router;