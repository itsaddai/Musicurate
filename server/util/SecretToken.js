//generate a secret token

require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (user) => {
    return jwt.sign({ user }, `{process.env.TOKEN_KEY}`, {
        expiresIn: "24h",
    });
    
}