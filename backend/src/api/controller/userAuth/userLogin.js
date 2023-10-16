const userModel = require("../../../models/userModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validate = require("../../../helper/utiles/validates.js");
const generateAccessToken = require("../../../helper/utiles/generateAccessToken.js");

const userLogin = async (req, res) => {
    try {
        const {email , password} = req.body;
        const rules = [
            {
                check : "isNotEmpty",
                value : email,
                message : "Email should not be empty.",
            },
            {
                check : "isNotEmpty",
                value : password,
                message : "Password should not be empty."
            }
        ];
        try {
            validate(rules);
        } catch (err) {
            return res.status(400).json({status : "false" , content : {message : err.message}});
        }
        const user = await userModel.findOne({email});
        // console.log("check")
        if(!user) {
            // console.log("check")
            return res.status(400).json({status: "true" , content: {message : "Email is not found."}})
        } else {
            const validPassword = await bcrypt.compare(password , user.password);
            if(validPassword) {
                // console.log("check")
                //generate token
                const token = await generateAccessToken(user);
                res.cookie("jwtoken" , token , {
                    httpOnly: true
                });
                const { password, ...userWithoutPassword } = user.toObject();
                return res.status(200).json({status: "true" , content: {data : {userWithoutPassword}, meta : {acess_token:token}}});
            } else {
                return res.status(400).json({status: false, content: {message: "Password is not found."}});
            }
        }
    } catch (err) {
        return res.status(500).json({status: "false", content: {message : "Server error"}});
    }
}

module.exports = userLogin;

