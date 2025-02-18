import React from 'react'
import './About.css'
import img from '../src/assets/download (6).jpeg'

const About = () => {
  return (
    <div className='about-cont'>
       
       <div className="about">
      
           <div className="about-text">
           <p className="we-are">This is Who We Are</p>
           <h1>About Us</h1>
                <p>Hana- meaning flower in Japanese, is your go-to flower shop, offering fresh,
                     vibrant blooms for every occasion. From elegant
                      bouquets to thoughtful arrangements, we bring
                       nature's beauty to your doorstep.</p>
                <button>Shop</button>
            </div>

            <div className="about-img">
                <img src={img} alt="" />
            </div>
       </div>
       



    </div>
  )
}

export default About