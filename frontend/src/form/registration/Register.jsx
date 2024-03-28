import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
import InputBox from '../../components/comps/input/InputBox';
import Buttons from "../../components/comps/buttons/Buttons";

export const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if any required fields are empty
    if (!name || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post('https://ws24-skillswap.onrender.com/api/auth/register', {
        username: name,
        email: email,
        password: password
      });
      console.log(response.data); // handle successful response from backend
      setSuccess(true);
    } catch (error) {
      console.error('Error registering user:', error); // handle error response from backend
      setError('Failed to register. Please try again.');
    }
  }

  const handleSuccessClose = () => {
    setSuccess(false);
    // Redirect to onboarding page
    history.push('/onboarding');
  };

  return (
    <div className="auth-form-container">
      <p className="heading-text">Sign up</p>
      <p className="body-text">Please enter your details to sign up and create an account. <br /> Already have an account? <button className="txt-btn" onClick={() => history.push('/login')}>Login!</button></p>
      
      <form className="reg-form" onSubmit={handleSubmit}>
        <InputBox
          label="Your name"
          type="text"
          placeholder="Your preferred name"
          value={name}
          onChange={handleNameChange}
          required
        />
      
        <InputBox
          label="Email"
          type="email"
          placeholder="yourname@gmail.com"
          value={email}
          onChange={handleEmailChange}
          required
        />
        
        <InputBox
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {error && <p className="error-message">{error}</p>}
        <br />
        <br />
        {/* Sign up button using Buttons component */}
        <Buttons type="submit" onClick={handleSubmit}>Sign up</Buttons>
      </form>

      {success && (
        <div className="success-popup">
          <p>Successfully registered!</p>
          <button onClick={handleSuccessClose}>Close</button>
        </div>
      )}
    </div>
  )
}

export default Register;
