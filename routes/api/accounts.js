const router = require("express").Router();
const accountController = require("../../controllers/accountController")

router.post("/account/signup", accountController.signUp)

router.post('/account/signin', accountController.signIn);

router.get('/account/verify', accountController.verify);

router.get('/account/logout', accountController.logout);


module.exports = router;