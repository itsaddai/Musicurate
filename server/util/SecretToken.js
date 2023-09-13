//generate a secret token

require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createJWT = (user) => {
    return jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "24h",
    });
    
}