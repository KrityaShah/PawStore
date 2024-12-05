import React from 'react'
import puppy2 from "../assets/puppy2.png"
import "./Subscription.css"

const Subscription = () => {
  return (
    <div className="main-subscription-container">
        <div className="left">
    <img src={puppy2} alt="" />
        </div>
        <div className="right">
    <h1 className='poppins-regular'>Get Pawsome News!</h1>
    <p className='poppins-regular'>Exclusive training tips, ticks, product deals and more.</p>

    <div className="subscription-email">
    <input type="email" placeholder='Enter Email'  />
    </div>

    <div className="subscription-btn">
    <button>Subscribe</button>
    </div>
        </div>
    </div>
  )
}

export default Subscription
