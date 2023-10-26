const { User, Pass} = require ("../models/SignupModels")
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const savePasswords = async (req, res) => {
  const { userID, password, passName} = req.body;
  try {
    const user = await User.findById(userID);
    if(!user){
      return res.json({message:'User not found'})
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.savedPasswords.push({name: passName, password: hashedPassword});
    await user.save();
  }
  catch(error){
    console.error(error);
  }
}


const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    // Create a new user document with the provided data
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.json({ msg: "Registration successful" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

module.exports = {
  register, savePasswords
};

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.json({message:'Email not found',  }) 
      }
      const auth = await bcrypt.compare(password, user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
       

    } catch (error) {
      console.error(error);
    }
  }