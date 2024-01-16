import userModel from "../../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userRegister = async (req, res) => {
    try {
        const { firstname, lastname, email, password, agreeToTerms } = req.body;
        if (!firstname || !lastname || !email || !password) {
            res.status(400).json({ success: false, result: { message: "All are required." } })
        }

        else {
            let existingUser;
            existingUser = await userModel.findOne({ email });
            if (existingUser) {
                res.status(400).json({ success: false, result: { message: "username already exist" } });
            }
            else {
                const salt = await bcrypt.genSalt(10);
                const hashpassword = await bcrypt.hash(password, salt);
                let user;

                user = new userModel({ firstname, lastname, email, password: hashpassword, agreeToTerms });
                const userData = await user.save();
                if (!userData) {
                    res.status(400).json({ success: false, result: { message: "Error Occured" } });
                }
                else {
                    const token = jwt.sign({ email, id: user._id }, process.env.SECRETKEY);
                    res.status(200).cookie('token', token, {
                        httpOnly: true,
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)
                    }).json({
                        success: true,
                        result: { userData, message: "Register successfully" }
                    });
                }
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, result: { error: err, message: "Try after some time" } });
    }
}

export default userRegister;