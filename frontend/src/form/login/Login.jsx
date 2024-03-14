import React, { useState } from "react";
import axios from 'axios';
import './Login.css'; 

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://ws24-skillswap.onrender.com/api/auth/login', {
        email: email,
        password: password
      });
      console.log(response.data); // handle successful response from backend
    } catch (error) {
      console.error('Error logging in:', error); // handle error response from backend
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="auth-form-container">
      <p className="heading-text">Log in</p>
      <p className="body-text">Welcome back!</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          value={email} 
          type="email" 
          placeholder="yourname@gmail.com" 
          id="email" 
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="input-box" 
          required
        />
        <label htmlFor="password">Password</label>
        <input 
          value={password} 
          type="password" 
          placeholder="Enter your password" 
          id="password" 
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="input-box" 
          required
        />
        {error && <p className="error-message">{error}</p>}
        <br />
        <button type="submit" disabled={isLoading}>{isLoading ? 'Logging in...' : 'Log in'}</button>
      </form>
      <p className="body-text">Don't have an account?</p>
      <button className="txt-btn" onClick={() => props.onFormSwitch('register')}>Sign up!</button>
    </div>
  )
}

export default Login;
