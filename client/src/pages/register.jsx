import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

  const history = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (event) => {
  event.preventDefault();

  // Create an object with the user's input data
  const registrationData = {
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  };

  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    toast.error("Please fill out all fields");
    return;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  const emailFormatPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailFormatPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
  if (password.length < 7 || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
    toast.error("Password must be at least 7 characters and contain at least 1 number and 1 symbol");
    return;
  }

  // If the input data is valid, proceed with the API call
  axios.post('http://localhost:4000/app/register', registrationData, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      if (res.data === "Email already exists") {
        toast.error("Email already exists");
    return;
      } else {

        toast.success("Registration successful");
        // Redirect to home if successful
        history('/dashboard');
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Email already exists")
    });
};

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <h1>Register</h1>
      <TextField
        label="First Name"
        variant="outlined"
        name="firstName"
        value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Register
      </Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default Register;
