import React from "react";
import "./Dogbreed.css";
import gr from "../assets/gr.png";
import sh from "../assets/sh.png";
import pb from "../assets/pb.png";
import gs from "../assets/gs.png";
import pug from "../assets/pug.png";
import js from "../assets/js.png";
import labrador from "../assets/labrador.png";

const Dogbreed = () => {
  return (
    <div className="main-dogbreed-container">
      <h1 className="poppins-bold">Dog Breed</h1>
      <p className="poppins-regular">
        Find yourself a perfect friend from a wide variety of choices.
      </p>

      <div className="breeds">
        <div className="breed">
          <img src={gr} alt="Golden Retriver" srcset="" />
          <p className="poppins-regular ">Golden Retriver</p>
        </div>
        <div className="breed">
          <img src={sh} alt="Siberian Husky" srcset="" />
          <p className="poppins-regular">Siberian Husky</p>
        </div>
        <div className="breed">
          <img src={pb} alt="Pitbull" />
          <p className="poppins-regular ">Pitbull</p>
        </div>
        <div className="breed">
          <img src={gs} alt="German Shepard" />
          <p className="poppins-regular">German Shepard</p>
        </div>
        <div className="breed">
          <img src={pug} alt="Pug" />
          <p className="poppins-regular">Pug</p>
        </div>
        <div className="breed">
          <img src={js} alt="Japanese Spitz" />
          <p className="poppins-regular">Japanese Spitz</p>
        </div>
        <div className="breed">
          <img src={labrador} alt="Labrador" />
          <p className="poppins-regular">Labrador</p>
        </div>
      </div>
    </div>
  );
};

export default Dogbreed;
