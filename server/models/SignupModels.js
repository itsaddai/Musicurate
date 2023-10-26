const mongoose = require('mongoose')


const signupSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    confirmPassword: {
        type: String,
        required: [true, 'Confirm password is required'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
    savedPasswords: {
        type: Array, 
        default: [],
    }
});
   
const passSchema = new mongoose.Schema({
    name: String,
    password: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'register',
    },
}
);
const User = mongoose.model('register', signupSchema);
const Pass = mongoose.model('password', passSchema);
module.exports = {User, Pass};