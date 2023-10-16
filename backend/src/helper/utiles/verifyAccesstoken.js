const jwt = require("jsonwebtoken");
const userModel = require("../../models/userModel.js");

const verifyAccesstoken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      jwt.verify(token, SECRET_KEY, async function (err, user) {
        if (err) {
          return res.status(401).json({
            sucess: false,
            error: { message: "JWT token is not valid" },
          });
        }
        const loggedInUser = await userModel.findById(user.id);
        req.user = loggedInUser;
        next();
      });
    } else {
      return res.status(401).json({
        sucess: false,
        error: { message: "Token not set" },
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({
        success: false,
        error: { message: "Server error" },
      });
  }
};

module.exports = verifyAccesstoken;



