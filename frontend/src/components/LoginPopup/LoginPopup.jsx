import { useState } from "react";
import { assets } from "../../assets/asset";
import './LoginPopup.css'
import PropTypes from 'prop-types'

function LoginPopup({setShowLogin}) {
    const[currentState,setCurrentState]=useState("Login")
  return (
    <div className="login-pop">
        <form className="login-popup">
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)} />
            </div>
            <div className="login-popup-inputs">
              {currentState==="Login"?<></>:
              <input type='text' placeholder="Your Name" required/>}
              <input type='email' placeholder="Your Email" required/>
              <input type='password' placeholder="Password" required/>
            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
              <input type='checkbox' required/>
              <p>By continuing, I agree to the terms and conditions of privacy policy</p>
            </div>
            <div className="click-here-btn">
              {currentState==="Login"?<p>Create new account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
            </div>
        </form>
    </div>
  )
}

 LoginPopup.propTypes = {
    setShowLogin: PropTypes.func,
  };
 
export default LoginPopup