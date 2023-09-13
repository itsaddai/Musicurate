import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to Musicurate</h1>
        <p>“Hard work beats talent when talent doesn't work hard.” ―Tim Notke.</p>
        <div className="cta-buttons">
          <Link to="/register" className="start-button">
            Start Now &gt;
          </Link>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Home;