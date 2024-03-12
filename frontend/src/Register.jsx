import React, { useState} from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return(
    <div className="auth-form-container">
      <h1 className="form-title">Sign up</h1>
      <form className="reg-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your name</label>
        <input value={name} type="name" placeholder="your preferred name" id="name" name="name"/>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourname@gmail.com" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="enter your password" id="password" name="password"/>
        <br></br>
        <button type="submit">Sign up</button>
      </form>
      <button className="txt-btn" onClick={()=> props.onFormSwitch('login')}>Already have an account? <br></br> Login!</button>
    </div>
  )
}