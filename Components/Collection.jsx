import React from 'react'
import './Collection.css'
import img1 from '../src/assets/download (7).jpeg'
import img2 from '../src/assets/download (8).jpeg'
import img3 from '../src/assets/download (9).jpeg'
import heart from '../src/assets/heart.svg'
import comment from '../src/assets/comment.svg'

import img4 from '../src/assets/image.jpeg'




const Collection = () => {
  return (
    <div className='collection-cont'>
        <p>Dried Flowers Collection</p>
        <h1>See Whats Popular</h1>

        <div className="collections">

            <div className="box">
                <img id='box-img' src={img1} alt="" />
              <div className="stats-cont">
                       <div className="stats">

                            <img src={heart} alt="" />
                            <p>147</p>
                        </div>

                        <div className="stats">
                            <img src={comment} alt="" />
                            <p>70</p>
                    </div>
                    <p>Share</p>
                </div>
            </div>

            <div className="box">
                <img id='box-img' src={img2} alt="" />
              <div className="stats-cont">
                       <div className="stats">

                            <img src={heart} alt="" />
                            <p>177</p>
                        </div>

                        <div className="stats">
                            <img src={comment} alt="" />
                            <p>90</p>
                    </div>
                    <p>Share</p>
                </div>
            </div>

            <div className="box">
                <img id='box-img' src={img3} alt="" />
              <div className="stats-cont">
                       <div className="stats">

                            <img src={heart} alt="" />
                            <p>247</p>
                        </div>

                        <div className="stats">
                            <img src={comment} alt="" />
                            <p>170</p>
                    </div>
                    <p>Share</p>
                </div>
            </div>
        </div>
           
    </div>
  )
}

export default Collection