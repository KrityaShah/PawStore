import React from 'react'
import "./Petproduct.css"
import a from "../assets/a.png"
import b from "../assets/b.png"
import c from "../assets/c.png"
import d from "../assets/d.png"
import e from "../assets/e.png"
import f from "../assets/f.png"


const Petproduct = () => {
  return (
    <div className='main-petproduct-container'>

      <div className="left">
        <h1 className='poppins-regular'>Pet Products</h1>

        <p className='poppins-regular'>
        All products are designed for ease of use and durable, as well as looking good. You can choose your own colours to make your item unique.
        </p>

        <div className="petproduct-btn">
          <button>See more</button>
        </div>
      </div>

      <div className="right">
        <img src={a} alt="" srcset="" />
        <img src={b} alt="" srcset="" />
        <img src={c} alt="" srcset="" />
        <img src={d} alt="" srcset="" />
        <img src={e} alt="" srcset="" />
        <img src={f} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Petproduct
