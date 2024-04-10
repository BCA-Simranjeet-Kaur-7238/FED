import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src="./side.png" alt=" " className="image" />
      </div>
      <div className='signup-link'>
        Don't have a JioSaavn account yet? <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
      </div>
      <div className="welcome-text">
        <p >Welcome to JioSaavn.</p>
        <p style={{fontSize:'15px',paddingRight:'50px',marginBottom: '25px',fontWeight:'5px' }}>Log in or sign up with your mobile number.</p>
         <input type="tel" id="mobile" name="mobile" placeholder="       Enter your mobile number" className="phone-number" />
         <button className="continue-button" style={{ width: 'calc(100% - 8px)' }}>Continue</button>
      </div>
    </div>
  );
};

export default Login;