const router = require('express').Router();
const controller = require("../controllers/user")
router.get("/",controller.defaultRoute);
router.get("/login",controller.login);
router.post("/authenticate",controller.authenticate,controller.getProfile);
router.get("/getprofile",controller.getProfile);
router.get("/register",controller.register);
//step 2
module.exports = router;