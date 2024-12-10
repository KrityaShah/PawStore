import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "./../store/auth";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="main-nav-container poppins-regular">
      <div className="logo">
        <Link to="/" className="nav-link">
          <h1>Paw store</h1>
        </Link>
      </div>
      {isLoggedIn ? (
        <>
          <div className="mid">
            <ul>
              <Link to="/" className="nav-link">
                <li className="nav-item">Home</li>
              </Link>
              <Link to="/breeds" className="nav-link">
                {" "}
                <li>Breeds</li>
              </Link>
              <Link to="/accessories" className="nav-link">
                {" "}
                <li>Accessories</li>
              </Link>
              <Link to="/blogs" className="nav-link">
                <li>Blog</li>{" "}
              </Link>
              <Link to="/contact" className="nav-link">
                <li>Contact</li>{" "}
              </Link>

              <div className="search">
                <input type="text" placeholder="search" />
              </div>
            </ul>
          </div>
          <div className="right">
            <Link to="/login" className="nav-item">
              <button>Profile</button>
            </Link>
          </div>
        </>
      ) : (
        <>
        <div className="mid">

<ul>
<Link to="/" className="nav-link"><li  className="nav-item">Home</li></Link>  
 <Link to="/breeds" className="nav-link"> <li>Breeds</li></Link> 
 <Link to="/accessories" className="nav-link"> <li>Accessories</li></Link>
 <Link to="/blogs" className="nav-link"><li>Blog</li> </Link>
 <Link to="/contact" className="nav-link"><li>Contact</li> </Link> 

  <div className="search">
    <input type="text" placeholder="search" />
  </div>
</ul>

</div>
<div className="right">
<Link to="/login"className="nav-item"><button>Login</button></Link>
</div>
        
        </>
      )}
    </div>
  );
};

export default Navbar;
