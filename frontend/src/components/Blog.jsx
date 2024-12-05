import React from "react";
import "./Blog.css";
import b1 from "../assets/b1.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import b4 from "../assets/b4.png"



const Blog = () => {
  return (
    <div className="main-blog-container">
      <div className="head">
        <h1 className="poppins-regular">Blog Section</h1>
        <p className="poppins-regular">Description of blog</p>
      </div>

      <div className="blogs">
        <div className="blog">
          <img src={b1} alt="" />
         
        </div>

        <div className="blog">
          <img src={b2} alt="" />
       
        </div>

        <div className="blog">
          <img src={b3} alt="" />
        
        </div>

        <div className="blog">
          <img src={b4} alt="" />
       
        </div>
      </div>
    </div>
  );
};

export default Blog;
