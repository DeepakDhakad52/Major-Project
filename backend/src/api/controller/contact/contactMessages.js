const contactModel = require('../../../models/contactModel');

const contactMessages = async (req, res) => {
    const { name, email, subject, message } = req.body;
    if (name && email && subject && message) {
        const msg = new contactModel(req.body);
        const data = await msg.save();
        if (!data) {
            res.status(500).json({
                success: false,
                result: {
                    message: "Internal Server Error"
                }
            })
        }
        else{
            res.status(201).json({success: true, result: {message : "Your Message has been sent, We will let you soon"}})
        }
    } else {
        res.status(400).json({ success: false, result: { message: "Please Provide All fields" } });
    }
}

module.exports = contactMessages;