import React, { useState } from "react";
import axios from 'axios';
import './Register.css';
import InputBox from '../../components/comps/input/InputBox';
import Buttons from "../../components/comps/buttons/Buttons";

export const Register = (props) => {
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
    } catch (error) {
      console.error('Error registering user:', error); // handle error response from backend
      setError('Failed to register. Please try again.');
    }
  }

  return (
    <div className="auth-form-container">
      <p className="heading-text">Sign up</p>
      <p className="body-text">Please enter your details to sign up and create an account. <br /> Already have an account? <button className="txt-btn" onClick={() => props.onFormSwitch('login')}>Login!</button></p>
      
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



// import React, { useState } from "react";
// import axios from 'axios';
// import './Register.css';
// import InputBox from '../../components/comps/input/InputBox';
// import Buttons from "../../components/comps/buttons/Buttons";

// export const Register = (props) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // Check if any required fields are empty
//     if (!name || !email || !password) {
//       setError('Please fill in all required fields.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://ws24-skillswap.onrender.com/api/auth/register', {
//         username: name,
//         email: email,
//         password: password
//       });
//       console.log(response.data); // handle successful response from backend
//     } catch (error) {
//       console.error('Error registering user:', error); // handle error response from backend
//       setError('Failed to register. Please try again.');
//     }
//   }

//   return (
//     <div className="auth-form-container">
//       <p className="heading-text">Sign up</p>
//       <p className="body-text">Please enter your details to sign up and create an account. <br /> Already have an account? <button className="txt-btn" onClick={() => props.onFormSwitch('login')}>Login!</button></p>
      
//       <form className="reg-form" onSubmit={handleSubmit}>
//         <InputBox
//           label="Your name"
//           type="text"
//           placeholder="Your preferred name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
      
//         <InputBox
//           label="Email"
//           type="email"
//           placeholder="yourname@gmail.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
        
//         <InputBox
//           label="Password"
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error && <p className="error-message">{error}</p>}
//         <br />
//         <br />
//         {/* Sign up button using Buttons component */}
//         <Buttons type="submit" onClick={handleSubmit}>Sign up</Buttons>
//       </form>
//     </div>
//   )
// }

// export default Register;



// // import React, { useState } from "react";
// // import axios from 'axios';
// // import './Register.css'; 
// // // import { Buttons } from './components/comps/buttons/Buttons'; 
// // // import './components/atoms/Colors.css';

// // export const Register = (props) => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('https://ws24-skillswap.onrender.com/api/auth/register', {
// //         name: name,
// //         email: email,
// //         password: password
// //       });
// //       console.log(response.data); // handle successful response from backend
// //     } catch (error) {
// //       console.error('Error registering user:', error); // handle error response from backend
// //     }
// //   }

// //   return (
// //     <div className="auth-form-container">
// //       <p className="heading-text">Sign up</p>
// //       <p className="body-text">Please enter your details to sign up and create an account.</p>
// //       <form className="reg-form" onSubmit={handleSubmit}>
// //         <label htmlFor="name">Your name</label>
// //         <input 
// //           value={name} 
// //           type="text" 
// //           placeholder="Your preferred name" 
// //           id="name" 
// //           name="name"
// //           onChange={(e) => setName(e.target.value)}
// //           className="input-box" 
// //           required // Make the input field required
// //         />
// //         <label htmlFor="email">Email</label>
// //         <input 
// //           value={email} 
// //           type="email" 
// //           placeholder="yourname@gmail.com" 
// //           id="email" 
// //           name="email"
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="input-box" 
// //           required // Make the input field required
// //         />
// //         <label htmlFor="password">Password</label>
// //         <input 
// //           value={password} 
// //           type="password" 
// //           placeholder="Enter your password" 
// //           id="password" 
// //           name="password"
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="input-box" 
// //           required // Make the input field required
// //         />
// //         <br />
// //         <button type="submit">Sign up</button>
// //       </form>
// //       <p className="body-text">Already have an account?</p>
// //       <button className="txt-btn" onClick={() => props.onFormSwitch('login')}>Login!</button>
// //     </div>
// //   )
// // }

// // export default Register;
