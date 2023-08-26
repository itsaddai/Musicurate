import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './register.css';
import axios from 'axios';

const Register = () => {
  const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Add your registration logic here

    const registrationData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };
    const strongPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const emailFormatPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if(!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill out all fields");
      return;
    }
    if (!strongPasswordPattern.test(password)) {
      alert("Please choose a stronger password. Try a mix of letters, numbers, and symbols.");
      return;
    }
    if (!emailFormatPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    if (firstName.length < 2) {
      alert("Are you sure you entered your first name correctly?");
      return;
    }
    if (lastName.length < 2) {
      alert("Are you sure you entered your first name correctly?");
      return;
    }
    axios.post('http://localhost:4000/app/register', registrationData)
    .then(res => {
      console.log(res.data);
      if(res.data === "Email already exists") {
        alert("Email already exists");
      }
      else{
        //redirect to home if successful
        history('/');
      }
    })
    .catch(err => {
      console.log(err);
    });
    
    
  };

  
  

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            placeholder='First Name'
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            placeholder='Last Name'
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            placeholder='Email'
          />
          
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete='new-password'
            placeholder='Password'
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            autoComplete='new-password'
            placeholder='Confirm Password'
          />
          
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? Log in<Link to="/login"> here</Link></p>
    </div>
  );
};

export default Register;
