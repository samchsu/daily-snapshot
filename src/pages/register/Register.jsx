import './register.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("https://daily-snapshot-api.herokuapp.com/api/auth/register", {
        username,
        email,
        password,
      })
      console.log("Registered Successfully");
      res.data && window.location.replace("/login");

    } catch(err) {
      console.log(err)
      setError(true)
    }
  }
  return (
    <div className='register'>
      <span className='registerTitle'>Register</span>
      <form className='registerForm' onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput" onChange={e=>setUsername(e.target.value)}placeholder='Enter your username...' />
        <label>Email</label>
        <input type="text" className="registerInput" onChange={e=>setEmail(e.target.value)} placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" className="registerInput" onChange={e=>setPassword(e.target.value)} placeholder='Enter your password...' />
        <button className='registerButton' type="submit">Register</button>
      </form>
      <Link className='registerLoginButton' to="/login">Have an account? Login here</Link>
      {error && <span style={{color: "red"}}> Something went wrong. Please check credentials and try again.</span>}
    </div>
  )
}
