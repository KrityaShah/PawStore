import React from 'react'
import "./Petproduct.css"
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
import d from "../assets/d.png"
import e from "../assets/e.png"
import f from "../assets/f.png"
import { Link } from 'react-router-dom'


const Petproduct = () => {
  return (
    <div className='main-petproduct-container'>

      <div className="left">
        <h1 className='poppins-regular'>Pet Products</h1>

        <p className='poppins-regular'>
        All products are designed for ease of use and durable, as well as looking good. You can choose your own colours to make your item unique.
        </p>

        <div className="petproduct-btn">
         <Link to="/signup" className="nav-link"><button>See more</button></Link> 
        </div>
      </div>

      <div className="right">
        <img src={a} alt=""  />
        <img src={b} alt=""  />
        <img src={c} alt=""  />
        <img src={d} alt=""  />
        <img src={e} alt=""  />
        <img src={f} alt=""  />
      </div>
    </div>
  )
}

export default Petproduct
