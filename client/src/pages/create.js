import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./create.css";
import { Link } from "react-router-dom";
import axios from 'axios';



const Create = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [passwordName, setPasswordName] = useState(""); 
  

  useEffect(() => {
    const initialPassword = generatePassword(passwordLength);
    setPassword(initialPassword);
  }, [passwordLength]);

  useEffect(() => {
    const savedPasswords = JSON.parse(localStorage.getItem('savedPasswords'));
    if (savedPasswords) {
      setSavedPasswords(savedPasswords);
    }
  }, []);


  const generatePassword = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset.charAt(randomIndex);
    }
    return newPassword;
  };

  const handleRegenerate = () => {
    const newPassword = generatePassword(passwordLength);
    setPassword(newPassword);
  };

  const handleCopyPassword = () => {
    const textarea = document.createElement("textarea");
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    toast.success("Password copied to clipboard!");
  };

  const handlePasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };



//post request to database
const handleSavePassword = () => {
  if (passwordName) {
    const savedPassword = { name: passwordName, value: password };
    
    // make a POST request to server endpoint
    axios.post('http://localhost:4000/save-password', {
      userId: 'userId', 
      password: savedPassword.value,
      passName: savedPassword.name
    })
    .then((response) => {
      // Handle the response if needed
      console.log('Password saved successfully');
      // You can also fetch the updated list of saved passwords from the server here
    })
    .catch((error) => {
      console.error('Error saving password:', error);
    });

    // update passwords
    const updatedPasswords = [...savedPasswords, savedPassword];
    setSavedPasswords(updatedPasswords)
    localStorage.setItem('savedPasswords', JSON.stringify(updatedPasswords));
    
  } else {
    toast.error('Password name required!');
  }}
  
  
  const handleRemovePassword = (index) => {
    const updatedPasswords = savedPasswords.filter((_, i) => i !== index);
    setSavedPasswords(updatedPasswords);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <button onClick={handleRegenerate}>Regenerate</button>
        <button onClick={handleCopyPassword}>Copy Password</button>
        <Link to="/dashboard">
          <button className="home">Dashboard</button>
        </Link>
      </div>
      <div>
        <input
          type="range"
          min="6"
          max="20"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
        <span>Password Length: {passwordLength}</span>
      </div>
      <div>
        <input type="text" value={password} readOnly />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password Name"
          value={passwordName}
          onChange={(e) => setPasswordName(e.target.value)}
        />
        <button onClick={handleSavePassword}>Save Password</button>
      </div>
      <div>
        <h2>Saved Passwords</h2>
        <ul>
          {savedPasswords.map((savedPassword, index) => (
            <li key={index}>
              {savedPassword.name}: {savedPassword.value}
              <button onClick={() => handleRemovePassword(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Create;
