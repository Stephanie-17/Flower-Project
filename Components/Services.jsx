import React from 'react'
import bouquet from '../src/assets/download (4).jpeg'
import occassion from '../src/assets/download (5).jpeg'
import premade from '../src/assets/download (3).jpeg'
import './Services.css'

const Services = () => {
  return (
    <div className='services-cont'>
        <p className='we-do'>This Is What We Do</p>
        <h1>Our Services</h1>

        <div className="services">
            <div className="service-box">
            <img src={bouquet} alt="" />
            <hr />
                <div className="service-text">
               
              
                <h2>Custom-made bouquets</h2>
                <p>Do you have an acquired taste?
                   from your favourite flowers to the 
                   rarest hiddden secret, We have what
                   you need
                </p>
                <b className="read">Read More</b>

                </div>
                
            </div>
<br />
           
                <div id='box1' className="service-box">

                <img src={occassion} alt="" />
                    <hr />
                    <div className="service-text">
                    <h2>Occassion flowers</h2>
                    <p>Favourite flowers for your special day
                    or the perfect decoration for your next
                    business event
                    </p>
                    <b className="read">Read More</b>
                    </div>
                    
                </div>
    <br />
                <div id='box2' className="service-box">
                <img src={premade} alt="" />
                    <hr />
                    <div className="service-text">
                    <h2>Pre-made bouquets</h2>
                    <p>Our florists are passionate about
                        making the most beautiful combination
                        of flowers youve ever seen
                    </p>
                    <b className="read">Read More</b>
                    </div>
                    
                </div>
            
        </div>
    </div>
  )
}

export default Services