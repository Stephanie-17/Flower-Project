
import './Hero.css'
import fb from  '../src/assets/facebook.svg'
import ig from '../src/assets/instagram.svg'
import twitter from '../src/assets/twitter.svg'
import  next from '../src/assets/next.svg'


const Hero = () => {
  return (
    <div className='hero-cont' id='home'>
      <div className="hero-text">
      
        <h1>Custom Dried Flower Bouquets</h1>
        <p>Free delivery on orders higher than $79</p>
        <button>Shop</button>

        <div className="links">
          <div className="logos">

            <img src={fb} alt="facebook" />
            <img src={ig} alt="instagram" />
            <img src={twitter} alt="twitter" />

          </div>
          <div className="collection">
            <p>Dried Flower Collection</p>
            <img src={next} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero