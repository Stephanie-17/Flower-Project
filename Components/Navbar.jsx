

import './Navbar.css'
import { useState } from 'react'
import menuIcon from '../src/assets/menu.svg'
import closeIcon from '../src/assets/close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='navbar'>
        <div className="navbar-cont">
            <h1 className="logo">HANA</h1>

            <div className='nav-items'>
              <a href="#home"><p>Home</p></a>
              <a href="#about"><p>About</p></a>
              <a href="#collection"><p>Collections</p></a>
              <a href="#contact"><p>Contact</p></a>
             <button href='#services'>Shop</button>
            </div>

          
           {menu?

            <div className='sidebar'>
              <img onClick={() => (setMenu(false))} src={closeIcon} id='close' alt="" />

              <div className='side-bar'>
                  <a href="#home"> <p>Home</p></a>  
                  <a href="#about"><p>About</p></a>  
                  <a href="#destination"> <p>Collections</p></a>  
                  <a href="#contact"><p>Contact</p></a> 
                  <a href="#faqs"> <p>Shop</p></a>
                 
              </div>

            </div>: 
            <img onClick={() => (setMenu(true))} id='menu' src={menuIcon} alt="" />}
        </div>
    </div>
  )
}

export default Navbar