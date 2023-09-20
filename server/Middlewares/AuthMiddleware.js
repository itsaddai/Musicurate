const User = require("../models/SignupModels");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    console.log("No token found in cookies");
    return res.json({ status: false });
  }

  jwt.verify(token, `{process.env.TOKEN_KEY}`, async (err, data) => {
    if (err) {
      console.error("Token verification failed:", err);
      return res.json({ status: false });
    } else {
      console.log("Token verified successfully");
      console.log("User ID from token:", data.user);

      const user = await User.findById(data.user);
      if (user) {
        console.log("User found in the database:", user);
        return res.json({ status: true, user: user.firstName });
      } else {
        console.log("User not found in the database");
        return res.json({ status: false });
      }
    }
  });
};
