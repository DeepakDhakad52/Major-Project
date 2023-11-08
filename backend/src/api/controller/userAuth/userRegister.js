const userModel = require("../../../models/userModel.js");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
    try {
        const { firstname, lastname,email, password } = req.body;
        if (firstname === undefined || lastname === undefined ||email === undefined|| password === undefined) {
            res.status(400).json({ success: "fail", result: { message: "All are required." } })
        }

        else {
            let existingUser;
            existingUser = await userModel.findOne({ email });
            if (existingUser) {
                res.status(400).json({ success: "fail", result: { message: "username already exist" } });
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const hashpassword = await bcrypt.hash(password, salt);
                let user;
               
                user = new userModel({ firstname, lastname,email, password: hashpassword });
                const userData = await user.save();
                if (!userData) {
                    res.status(400).json({ success: "fail", result: { message: "Error Occured" } });
                }
                else {
                    res.status(200).json({ success: "ok", result: { userData, message: "Register successfully" } });
                }
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: "Fail", result: { error: err, message: "Try after some time" } });
    }
}

module.exports = userRegister;