import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    const loginData = {
      email,
      password,
    };
    if(!email || !password) {
      toast.error("Please fill out all fields");
      return;
    }
    const emailFormatPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailFormatPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (password.length < 7 || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      toast.error("Incorrect Password");
      return;
    }
    axios.post("http://localhost:4000/login", loginData, { withCredentials: true })
    .then((res) => {
      toast.success("Login successful");
      
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      history("/dashboard");
    })
    .catch((err) => {
      console.log(err);
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
      <h1>Login</h1>
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
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default Login;
