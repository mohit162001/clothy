import React from 'react'
import './CSS/loginsignup.css'
export const LoginSignup = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' required />
          <input type="email" placeholder='Email Adress' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing I agree to the terms and conditions</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup;