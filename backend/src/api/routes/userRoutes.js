import express from 'express'
const router = express.Router()

import userLogin from "../controller/userAuth/userLogin.js";
import userRegister  from "../controller/userAuth/userRegister.js";
import getUserDetails  from "../controller/userAuth/getUserDetails.js"
import { isLoggedIn } from "../../../middleware/AuthMiddleware.js"


router.route("/").get((req, res) => {
    res.send("user routes working");
});


router.route("/signup").post(userRegister);
router.route("/signin").post(isLoggedIn, userLogin);
router.route("/get-user").get(getUserDetails);

export default router;