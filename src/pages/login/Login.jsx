import './login.css';
import {Link} from "react-router-dom";
import { useRef } from 'react';
import { useState, useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {
  const userRef = useRef()
  const pwdRef = useRef()
  const { dispatch, isFetching } = useContext(Context)
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "START_LOGIN"})
    try {
      const res = await axios.post("https://daily-snapshot-api.herokuapp.com/api/auth/login", {
        username: userRef.current.value,
        password: pwdRef.current.value,
      })
      dispatch({type: "SUCCESS_LOGIN", payload: res.data})
    } catch(err) {
      dispatch({type: "FAILURE_LOGIN"})
      setError(true)
    }
  }

  return (
    <div className='login'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" placeholder='Enter your username...' ref = {userRef}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder='Enter your password...' ref={pwdRef}/> 
            <button className='loginButton' type="submit" disabled={isFetching}>Login</button>  
            {error && <span style={{color: "red"}}> Username or password invalid. Please check credentials and try again.</span>} 
        </form>  
        <button className='loginRegisterButton'>
          <Link className='link' to="/register">Register</Link>
        </button>  
    </div>
  )
}
