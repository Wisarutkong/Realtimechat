import React from 'react'
import '../../styles/footer.css'
import logo from '../../img/metro 2.svg'
import logofacebook from '../../img/facebook (1) 1.svg'
import logoline from '../../img/line 1.svg'
import logoingstagram from '../../img/instagram 1.svg'
import logotwitter from '../../img/twitter 1.svg'

function Footer() {
    return (
        <footer className="footer">
            <div>
                <div className="footer-title">
                    <div className="footer-logo">
                        <div className="footer-logo-img">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-name">
                            <h3>Metro system</h3>
                        </div>
                    </div>
                    <div className="footer-detail">
                        <div>
                            <h3>Product</h3>
                        </div>
                        <div>
                            <h3>Company</h3>
                            <li><a href="#">about</a></li>
                        </div>
                        <div>
                            <h3>Resources</h3>
                            <li><a href="#">support</a></li>
                            <li><a href="#">Blog</a></li>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>tel.087-7777777</p>
                            <ul className="social">
                                <li><a href="https://www.facebook.com/Imkongss/" className="contact-facebook" ><img src={logofacebook} alt="" /></a></li>
                                <li><a href="https://line.me/ti/p/YKVQXLptSJ?fbclid=IwAR0UanXC-9HItiMoExYlt2VENc5PX5ld0JSBsCosOBmAsN-PusbMIeQtyG4" className="contact-line"><img src={logoline} alt="" /></a></li>
                                <li><a href="https://www.instagram.com/kongwsr/" className="contact-instagram"><img src={logoingstagram} alt="" /></a></li>
                                <li><a href="#" className="contact-twitter"><img src={logotwitter} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer