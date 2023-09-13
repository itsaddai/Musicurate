const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

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
});
   

module.exports = User = mongoose.model('register', signupSchema);