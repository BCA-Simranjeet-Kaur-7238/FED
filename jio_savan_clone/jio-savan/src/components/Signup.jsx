import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='login-container'>
      <div className='image-container'>
        <img src="./side2.png" alt=" " className="image" />
      </div>
      <div className='signup-link'>
        Already have an account?
        <Link to="/login"><button className="signup-button">Login</button>
        </Link>
      </div>
      <div className="welcome-text">
        <p >Welcome to JioSaavn.</p>
        <p style={{fontSize:'15px',paddingRight:'105px',marginBottom: '25px',fontWeight:'5px' }}>Sign up with your mobile number.</p>
         <input type="tel" id="mobile" name="mobile" placeholder="       Enter your mobile number" className="phone-number" />
         <button className="continue-button" style={{ width: 'calc(100% - 8px)' }}>Continue</button>
      </div>
    </div>
  );
};

export default Signup;