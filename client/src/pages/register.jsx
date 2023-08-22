import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="register-container">
      <h2>Register</h2>
      {/* Add your registration form here */}
      <p>Already have an account? Sign in here:</p>
      <Link to="/login">
        <button className="login-link-button">Login</button>
      </Link>
    </div>
  );
};

export default Register;