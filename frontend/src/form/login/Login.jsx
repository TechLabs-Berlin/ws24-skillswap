import React, { useState } from "react";
import axios from 'axios';
import './Login.css'; // Import CSS file for component styles

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://ws24-skillswap.onrender.com/api/auth/login', {
        email: email,
        password: password
      });
      console.log(response.data); // handle successful response from backend
      // Redirect to dashboard or perform other actions upon successful login
    } catch (error) {
      console.error('Error logging in:', error); // handle error response from backend
      setError('Invalid email or password. Please try again.');
    }
  }

  return (
    <div className="auth-form-container">
      <h1 className="form-title">Log in</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          value={email} 
          type="email" 
          placeholder="yourname@gmail.com" 
          id="email" 
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-box" // Add class for styling
        />
        <label htmlFor="password">Password</label>
        <input 
          value={password} 
          type="password" 
          placeholder="Enter your password" 
          id="password" 
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-box" // Add class for styling
        />
        {error && <p className="error-message">{error}</p>}
        <br />
        <button type="submit">Log in</button>
      </form>
      <button className="txt-btn" onClick={() => props.onFormSwitch('register')}>New here? <br /> Sign up!</button>
    </div>
  )
}

export default Login;
