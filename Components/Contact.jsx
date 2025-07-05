

import './Contct.css'

const Contact = () => {
  return (
    <div className='contact-cont' id='contact'>
        <hr />
        <div className="contact">

            <div className="info">

                <h1>HANA</h1>
                <p>Custom dried flower arrangement that last</p>
                <div className="email-btn">
                    <input type="email" name="email" placeholder='Email Address' />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="links">
                <div className="link1">
                    <p>+44 234 567 890</p>
                    <p>info@hana.com</p>
                    <p>Find a store</p>
                </div>

                <div className="link2">
                    <p>Contact us</p>
                    <p>Ordering and payment</p>
                    <p>Shipping</p>
                    <p>Returns</p>
                    <p>FAQs</p>
                </div>

                <div className="link3">
                    <p>About Us</p>
                    <p>Work with us</p>
                    <p>Privacy policies</p>
                    <p>Tems and conditions</p>
                    <p>Press requirments</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact