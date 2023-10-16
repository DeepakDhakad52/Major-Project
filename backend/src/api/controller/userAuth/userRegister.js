const userModel = require("../../../models/userModel.js");
const bcrypt = require("bcrypt");
const validate = require("../../../helper/utiles/validates.js");
const generateAccessToken = require("../../../helper/utiles/generateAccessToken.js");

const userRegister = async (req, res) => {
    try {
        const { name,email,password } = req.body;
        const rules = [
            {
                check : "isNotEmpty",
                value: name, 
                message : "User name should not be empty."
            },
            {
                check: "isEmail",
                value: email,
                message: "Email is not valid.",
            },
            {
                check: "passWordCheck",
                value: password,
                message:
                  "Password length should be greater than 8 and Should contain 1 alphabet, 1 numeric and 1 special character.",
            },
        ];
        //validating data
        try {
            validate(rules);
        } catch (err) {
            return res.status(400).json({status: "false" , content: {message: err.message}});
        }

        let existingEmail = await userModel.findOne({email});
        // console.log(existingPhone);

        if(existingEmail) {
            const haveUserwithEmail = await userModel.findOne({email});
            if(haveUserwithEmail) {
                return res.status(400).json({status : "false" , content: {message: "Email already exist"}});
            }
        } else {
            //change password to hashcode
            const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND));
            const hashedPassword = await bcrypt.hash(password, salt);
            // console.log(hashedPassword)
            const registeredUser = await userModel.create({
                name,
                email,
                password : hashedPassword
            });
            if(!registeredUser) {
                return res.status(400).json({ status: "false" , content: {message : "Error occured"}});
            } else {
                const { password, ...userWithoutPassword } = registeredUser.toObject();
                return res.status(200).json({ status : "true" , content: {data:{userWithoutPassword} , message: "Register sucessfully"},})
            }
        }
    } catch (err) {
        return res.status(500).json({ status : "false" , content: {error: err , message : "unable to register at the moment."}})
    }
};
module.exports = userRegister;
