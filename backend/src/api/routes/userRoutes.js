const routes =  require("express").Router();

const userLogin = require("../controller/userAuth/userLogin.js");
const userRegister = require("../controller/userAuth/userRegister.js");
const getUserDetails = require("../controller/userAuth/getUserDetails.js")

routes.route("/").get((req,res) => {
    res.send("user routes working");
});

routes.route("/signin").post(userLogin);
routes.route("/signup").post(userRegister);
routes.route("/me").get(getUserDetails);
module.exports = routes;