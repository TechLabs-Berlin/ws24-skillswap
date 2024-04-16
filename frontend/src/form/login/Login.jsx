import React, { useState } from "react";
import axios from 'axios';
import './Login.css';
import InputBox from '../../components/comps/input/InputBox';
import Buttons from "../../components/comps/buttons/Buttons";
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('message:', email, password);
    setIsLoading(true);
    try {
      const response = await axios.post('https://ws24-skillswap.onrender.com/api/auth/login', {
        email: email,
        password: password
      });
      console.log(response.data); // handle successful response from backend
      //navigate to homepage (swap recommendations)
      navigate('/homepage')
    } catch (error) {
      console.error('Error logging in:', error); // handle error response from backend
      setError('Invalid email or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  const navigate = useNavigate()

  const navigateToRegister = () => {
    navigate("/register")
  }

  return (
    <div className="auth-form-container">
      <p className="heading-text">Log in</p>
      <p className="body-text">Welcome back! <br /> Don't have an account? <button className="txt-btn" onClick={navigateToRegister}>Sign up!</button> </p>

      {/* {error && <p className="error-tooltip">{error}</p>} */}

      <form className="login-form" onSubmit={handleSubmit}>
        <InputBox
          label="Email"
          type="text"
          placeholder="Your Email"
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
        <Buttons type="submit" onClick={handleSubmit} disabled={isLoading}>{isLoading ? 'Logging in...' : 'Log in'}</Buttons>

      </form>

    </div>
  )
}

export default Login;
