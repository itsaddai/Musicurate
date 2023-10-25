require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (user) => {
    return jwt.sign({ user }, `{process.env.TOKEN_KEY}`, {
      expiresIn: 3 * 24 * 60 * 60,
    });
  };

  //check if token is expired

  module.exports.isTokenValid = (token) => {
    try {
      jwt.verify(token, process.env.TOKEN_KEY);
      return true;
    } catch (err) {
      return false;
    }
  };

  module.exports.getTokenExpirationDate = (token) => {
    try{
      const decoded = jwt.decode(token);
      if(decoded && decoded.exp){
        return decoded.exp * 1000;
      }
    }
    catch (error){
      console.log(error);

    }
    return null;
  }