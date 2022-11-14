import React from 'react'
import '../../styles/pageheader.css'
import image from '../../img/metro 2.svg'
import imageswitchlangue from '../../img/united-states-of-america 1.svg'

function Pageheader() {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="logo">
                        <div className="logo-img">
                            <img src={image} alt="" />
                        </div>
                        <div className="logo-name">
                            <p>Metro system</p>
                        </div>
                    </div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="login-btn">
                        <a href="/login" className="login">Login</a>
                    </div>
                    <div className="switch-language">
                        <img src={imageswitchlangue} alt="" />
                        <p>English, USA </p>
                    </div>
                </nav>
            </div>
            <div className="headerinfo-all">
                <section className="header-info">
                    <div className="header-title">
                        <h1>
                            Connect & Meet People
                        </h1>
                    </div>
                    <div className="header-detail">
                        <p>Find friends with the same style as you.</p>
                    </div>
                    <div className="header-btn">
                        <a href="#" className="joinchat">Join chat</a>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Pageheader