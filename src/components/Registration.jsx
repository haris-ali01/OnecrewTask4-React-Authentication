import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { auth } from '../firebase';
import './Registration.css';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const Signup = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/login'); // Redirect to the login page upon successful registration
      })
      .catch((error) => {
        console.log(error);
        setError('Registration failed. Please try again.');
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="registration-container">
      <h2>🌟 Join Now</h2>
      <form onSubmit={Signup}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign up</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}

      <span>Already have an account? </span><Link to="/login" className='links'>Log in</Link>
    </div>
  );
};

export default Registration;
