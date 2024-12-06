import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="main-nav-container poppins-regular">
      <div className="logo">
      <Link to="/" className="nav-link"><h1>Paw store</h1></Link>  
      </div>
      <div className="mid">
        <ul>
        <Link to="/" className="nav-link"><li  className="nav-item">Home</li></Link>  
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
        <Link to="/login"className="nav-item"><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
