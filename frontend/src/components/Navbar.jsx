import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-nav-container poppins-regular">
      <div className="logo">
        <h1>Paw store</h1>
      </div>
      <div className="mid">
        <ul>
          <li>Home</li>
          <li>Breeds</li>
          <li>Accessories</li>
          <li>Blog</li>
          <li>Contact</li>

          <div className="search">
            <input type="text" placeholder="search" />
          </div>
        </ul>
      </div>
      <div className="right">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
