import express from 'express'
const router = express.Router()

const userLogin = require("../controller/userAuth/userLogin.js");
const userRegister = require("../controller/userAuth/userRegister.js");
const getUserDetails = require("../controller/userAuth/getUserDetails.js")
const { isLoggedIn } = require("../../../middleware/AuthMiddleware.js")


router.route("/").get((req, res) => {
    res.send("user routes working");
});


router.route("/signup").post(userRegister);
router.route("/signin").post(isLoggedIn, userLogin);
router.route("/get-user").get(getUserDetails);

export default router;