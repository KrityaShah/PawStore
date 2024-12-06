import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
// Correctly import the image with its file extension
import puppy from "../assets/puppy.png";
import Dogbreed from "../components/Dogbreed";
import Petproduct from "../components/Petproduct";
import Blog from "../components/Blog";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main-home-container">
        <div className="left">
          {/* Use the imported image variable */}
          <img src={puppy} alt="Cute puppy" />
          <div className="home-slider">
            <button>left</button>
            <p className="poppins-regular">Cargi (2months)</p>
            <button>right</button>
          </div>
        </div>
        <div className="right poppins-regular">
        <h1>EVERYBODY NEEDS A FRIEND IN LIFE.</h1>
        <p>
          The Corgi is intelligent, quick and curious. It is a kind, adventurous
          breed which shows a large measure of independence. They are good with
          children and normally kind with strangers.
        </p>
        <div className="home-btn">
          <button>Buy me</button>
        </div> 
        </div>
       
      </div>

      <Dogbreed/>
      <Petproduct/>
      <Blog/>
      <Subscription/>
      <Footer/>
    </>
  );
};

export default Home;
