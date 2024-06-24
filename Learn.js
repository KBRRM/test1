import React from 'react';
//import styled from 'styled-components';
//import { FaUser, FaLock, FaMobileAlt } from 'react-icons/fa';


const Learn = () => {
  return (
     <div className="container">
      <header className="header">
        <div className="time">Play Online Desawer</div>
      </header>
      
      <form className="form">
        <div className="logo">Registration</div>
        <div className="form-field">
          <label>
            <span className="icon">👤</span> Referral id
          </label>
          <input type="text" placeholder="Referral id" />
        </div>
        <div className="form-field">
          <label>
            <span className="icon">👤</span> First Name
          </label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="form-field">
          <label>
            <span className="icon">👤</span> Last Name
          </label>
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-field">
          <label>
            <span className="icon">📱</span> Enter Paytm, Googlepay, Phonepe Number
          </label>
          <input type="text" placeholder="Mobile" />
        </div>
        <div className="form-field">
          <label>
            <span className="icon">🔒</span> Password
          </label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-field">
          <label>
            <span className="icon">🔒</span> Repeat Password
          </label>
          <input type="password" placeholder="Repeat Password" />
        </div>
        <button className="sign-up-button">Sign Up</button>
        <div className="sign-in-link">
          Already have an account? <a href="/">Sign In</a>
        </div>
      </form>
    </div>

    
  );
};



export default Learn;
