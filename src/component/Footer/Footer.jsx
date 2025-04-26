import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            TasteNow: Your favorite food delivered fast and fresh to your door.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Campany</h2>
          <ul>
            <li>About Us</li>
            <li>Home</li>
            <li>delivery</li>
            <li>privacy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+251 999</li>
            <li>contact us </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        &copy; 2023 TasteNow. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
