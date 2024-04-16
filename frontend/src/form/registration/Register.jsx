import React, { useState } from "react";
import axios from 'axios';
import './Register.css';
import InputBox from '../../components/comps/input/InputBox';
import Buttons from "../../components/comps/buttons/Buttons";
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

export const Register = (props) => {
  const navigate = useNavigate()

  const navigateToCongrats = () => {
    navigate("/congrats")
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

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

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
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

      // Navigate to the congrats page upon successful registration
      navigate('/congrats'); // Change '/congrats' to the actual path of your congrats page
    } catch (error) {
      console.error('Error registering user:', error); // handle error response from backend
      setError('Failed to register. Please try again.');
    }

  }
  const navigateToLogin = () => {
    navigate("/")
  }

  return (
    <div style={{ marginLeft: '40px', marginRight: '40px' }} className="auth-form-container">
      <p className="heading-text">Sign up</p>
      <p className="body-text">Please enter your details to sign up and create an account. <br /> Already have an account? <button className="txt-btn" onClick={navigateToLogin}>Login!</button></p>

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
    </div>
  )
}

export default Register;
