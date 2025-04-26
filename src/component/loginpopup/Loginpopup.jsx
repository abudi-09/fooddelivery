import React, { useState } from "react";
import "./loginpopup.css";
import { assets } from "../../assets/assets";

const loginpopup = ({ setShowlogin }) => {
  const [currstate, setCurrstate] = useState("login");
  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img
            onClick={() => setShowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currstate === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="Email" placeholder="Your Email" required />
          <input type="password" placeholder="Your password " required />
        </div>
        <button>{currstate === "signup" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p> i agree to the term of use the privacy </p>
        </div>
        {currstate === "login" ? (
          <p>
            create a new account{" "}
            <span onClick={() => setCurrstate("Signup")}>Click here </span>
          </p>
        ) : (
          <p>
            Already I have an account{" "}
            <span onClick={() => setCurrstate("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default loginpopup;
