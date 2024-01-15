const routes = require("express").Router();

const userLogin = require("../controller/userAuth/userLogin.js");
const userRegister = require("../controller/userAuth/userRegister.js");
const getUserDetails = require("../controller/userAuth/getUserDetails.js")
const { isLoggedIn } = require("../../../middleware/AuthMiddleware.js")


routes.route("/").get((req, res) => {
    res.send("user routes working");
});


routes.route("/signup").post(userRegister);
routes.route("/signin").post(isLoggedIn, userLogin);
routes.route("/get-user").get(getUserDetails);

module.exports = routes;