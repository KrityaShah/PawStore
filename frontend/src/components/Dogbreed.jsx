import React from "react";
import "./Dogbreed.css"
const Dogbreed = () => {
  return (
    <div className="main-dogbreed-container">
      <h1>Dog Breed</h1>
      <p>Find yourself a perfect friend from a wide variety of choices.</p>
      <div className="breeds">
        <div className="breed">
            <img src="" alt="Golden Retriver" srcset="" />
            <p>Golden Retriver</p>
        </div>
        <div className="breed">
            <img src="Siberian Husky" alt="Siberian Husky" srcset="" />
            <p>Siberian Husky</p>
        </div>
        <div className="breed">
            <img src="" alt="Pitbull" />
            <p>Pitbull</p>
        </div>
        <div className="breed">
            <img src="" alt="German Shepard" />
            <p>German Shepard</p>
        </div>
        <div className="breed">
            <img src="" alt="Pug" />
            <p>Pug</p>
        </div>
        <div className="breed">
            <img src="" alt="Japanese Spitz" />
            <p>Japanese Spitz</p>
        </div>
        <div className="breed">
            <img src="" alt="Labrador" />
            <p>Labrador</p>
        </div>
      </div>
    </div>
  );
};

export default Dogbreed;
