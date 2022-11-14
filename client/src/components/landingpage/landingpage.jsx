import React from 'react'
import '../../styles/landingpage.css'
import imgchat from '../../img/Screenshot 2022-10-12 061808 1.svg'
import imgfriends from '../../img/Screenshot 2022-10-12 061523 1.svg'

function Landingpage() {
    return (
        <div>
            <div className="container">
                <div className="chat-con">
                    <div className="chat-img">
                        <img src={imgchat} alt="" />
                    </div>
                    <div className="chat-info">
                        <div className="chat-title">
                            <h2>Chat.</h2>
                        </div>
                        <div className="chat-info">
                            <p>meet many people Let's get to know each other.</p>
                        </div>
                    </div>
                </div>

                <div className="friends-con">
                    <div className="friends-info">
                        <div className="friends-title">
                            <h3>Friends.</h3>
                        </div>
                        <div className="friends-info">
                            <p>Find friends with the same style as you.</p>
                        </div>
                    </div>
                    <div className="friends-img">
                        <img src={imgfriends} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage