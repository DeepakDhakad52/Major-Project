import userModel from "../../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === undefined || password === undefined) {
            res.status(401).json({ 
                success: false, 
                result: { 
                    message: "email and password are required." 
                } 
            });
        }
        else {
            const user = await userModel.findOne({ email }).select('+password');
            if (!user) {
                res.status(404).json({
                    success: false,
                    result: { 
                        message: "Invaild email" 
                    } 
                });
            }
            else {
                const validPassword = await bcrypt.compare(password, user.password);
                if (validPassword) {
                    const token = jwt.sign({ email, id: user._id }, process.env.SECRETKEY);
                    res.status(200).cookie('token', token, {
                        httpOnly: true,
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)
                    }).json({ 
                        success: true,
                        token,
                        message: "Login Successfull"
                    });
                }
                else {
                    res.status(403).json({ 
                        success: false, 
                        result: { 
                            message: "password do not match." 
                        } 
                    })
                }
            }
        }
    }
    catch (err) {
        return res.status(500).json({ success: "fail", result: { message: "Try after some time." } });
    }
}
export default userLogin;