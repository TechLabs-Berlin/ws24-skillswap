import React, { useState } from "react";
import axios from 'axios';
import './Register.css'; // Import CSS file for component styles

export const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://w24-skillswap.onrender.com/api/auth/login', {
        name: name,
        email: email,
        password: password
      });
      console.log(response.data); // handle successful response from backend
    } catch (error) {
      console.error('Error registering user:', error); // handle error response from backend
    }
  }

  return (
    <div className="auth-form-container">
      <h1 className="form-title">Sign up</h1>
      <form className="reg-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input 
          value={name} 
          type="text" 
          placeholder="Your preferred name" 
          id="name" 
          name="name"
          onChange={(e) => setName(e.target.value)}
          className="input-box" // Add class for styling
        />
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
        <br />
        <button type="submit">Sign up</button>
      </form>
      <button className="txt-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? <br /> Login!</button>
    </div>
  )
}

export default Register;
