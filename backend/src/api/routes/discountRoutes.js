const routes = require("express").Router();

const discountRegister = require("../controller/discount/discountRegister.js")

routes.route("/").get((req,res) => {
    res.send("discount routes working");
});

routes.route("/email").post(discountRegister);

module.exports = routes;