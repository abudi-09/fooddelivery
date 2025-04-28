import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowlogin }) => {
  const [menu, setMenu] = React.useState("home");
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <Link
          to="/app-download"
          onClick={() => {
            setMenu("contact us");
            setTimeout(() => {
              const footer = document.getElementById("footer");
              if (footer) footer.scrollIntoView({ behavior: "smooth" });
            }, 0);
          }}
          className={menu === "contact us" ? "active" : ""}
          aria-current={menu === "contact us" ? "page" : undefined}
        >
          Contact Us
        </Link>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/Cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>

          <div className="dot"></div>
        </div>
        <button className="navbar-button" onClick={() => setShowlogin(true)}>
          {" "}
          Sign In{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
