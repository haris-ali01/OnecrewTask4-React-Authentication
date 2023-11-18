import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { auth } from '../firebase';
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const LogIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/dashboard'); // Redirect to the dashboard upon successful login
      })
      .catch((error) => {
        console.log(error);
        setError('Login failed. Check your email and password.');
      });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login-container">
      <h2>🔑 Login</h2>
      <form onSubmit={LogIn}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
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
          <button type="submit">Login</button>
        </div>
      </form>
      {error && <p className="error-message">{error}</p>}

      <span>Don't have an account? </span><Link to="/register" className='links'>Sign up</Link>
    </div>
  );
};

export default Login;
