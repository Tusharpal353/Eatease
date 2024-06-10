import './Footer.css'
import { assets } from '../../assets/asset'

function Footer() {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-text">
                <div className="col-4">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit placeat aliquid cumque voluptates nemo provident omnis ab molestias esse temporibus quibusdam velit unde consequuntur quasi, cum rem, non excepturi?</p>
                    <div className="col-4 footer-social-icons">
                        <img src={assets.facebook} alt="" />
                        <img src={assets.twitter} alt="" />
                        <img src={assets.linkedin} alt="" />
                    </div>
                </div>
                <div className="col-4">
                    <h2>Company</h2>
                    <ul><li>Home</li><li>About Us</li><li>Delivery</li><li>Privacy Policy</li></ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+1-234-565-789</li>
                        <li>contact@Eatease.com</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 @ Eatease.com - All rights reserved
        </p>
    </div>
  )
}

export default Footer
