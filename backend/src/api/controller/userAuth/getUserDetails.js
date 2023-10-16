
const userModel = require("../../../models/userModel.js");


const getUserDetails = async (req, res) => {
    let users;
    try {
        users = await userModel.find().select('-password');

    }
    catch(err) {
        return console.log(err);
    }
    if(!users) {
        return res.status(500).json({message : "error occure"});
    }
    return res.status(200).json({ status : "true" , content: {data:users},})
};
module.exports = getUserDetails;
