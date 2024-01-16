import discountModel from '../../../models/discountModel.js';

const discountRegister = async (req, res) => {
    try {
        const { email } = req.body;
        // console.log(email);
        if (!email) {
            res.status(400).json({
                success: false,
                result: {
                    message: "Mail ID required"
                }
            });
        } else {
            let existingUser = await discountModel.findOne({ email });
            if (existingUser) {
                res.status(400).json({
                    success: false,
                    result: {
                        message: "This mail id is already exist"
                    }
                })
            } else {
                let discountEmail = new discountModel({ email });
                const discountEmailData = await discountEmail.save();
                if (!discountEmailData) {
                    res.status(500).json({
                        success: false,
                        result: {
                            message: "DB Error"
                        }
                    })
                } else {
                    res.status(201).json({
                        success: true,
                        result: {
                            discountEmailData,
                            message: "Register Successfully"
                        }
                    })
                }
            }
        }
    } catch (err) {
        // console.log(err);
        res.status(501).json({
            success: false,
            error: err,
            result: {
                message: "Something Went Wrong! Please try later"
            }
        })
    }
}

export default discountRegister;