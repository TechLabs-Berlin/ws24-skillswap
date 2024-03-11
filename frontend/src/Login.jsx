import React, { useState} from "react";

export const Login = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return(
    <div className="auth-form-container">
      <h1 className="form-title">Log in</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} type="email" placeholder="yourname@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} type="password" placeholder="enter your password" id="password" name="password"/>
        <br></br>
        <button type="submit">Log in</button>
      </form>
      <button className="txt-btn" onClick ={()=> props.onFormSwitch('register')}>New here? <br></br> Sign up!</button>
    </div>
  )
}