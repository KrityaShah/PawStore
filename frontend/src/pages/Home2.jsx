import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import puppy from "../assets/puppy.png";

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-home-container">
        <div className="left">
 
          <img src={puppy} alt="Cute puppy" />
         
        </div>
        <div className="right poppins-regular">
        <h1>EVERYBODY NEEDS A FRIEND IN LIFE.</h1>
        <p>
          The Corgi is intelligent, quick and curious. It is a kind, adventurous
          breed which shows a large measure of independence. They are good with
          children and normally kind with strangers.
        </p>
        <div className="home-btn">
         <Link  to="" className="nav-link"><button>Buy me</button></Link> 
        </div> 
        </div>
      </div>

    </>
  );
};

export default Home;
