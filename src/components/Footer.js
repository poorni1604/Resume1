import "./Footer.css"

import React from 'react'

import {FaHome, FaMailBulk,FaPhone,FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer-container">
            <div className="left">
                <div classNme="location">
                    <FaHome size={20} style={{color:"beige", marginRight: "2rem"}} />

                </div>
                <div>
                    <p>37/4-5 3rd floor,sriram nagar</p>
                    <p>chokkumpudur road</p>
                    <p>Coimbatore-39</p>
                </div>
                <br/>
                <br/>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"beige", marginRight: "2rem"}} />
                7708333166</h4>



                </div>
                <br/>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"beige", marginRight: "2rem"}} />
                poorni160403@gmail.com</h4>


                </div>
                
            </div> 

            <div className="right">
                <h4>About me!</h4>
                <p>Hello,I am Poornima venkatesh 
                    who is passionate about working 
                    for the society and contributing through tech!
                </p>
                <div className="social">
                <FaFacebook size={20} style={{color:"beige", marginRight: "2rem"}} />
                <FaTwitter size={20} style={{color:"beige", marginRight: "2rem"}} />
                <FaLinkedin size={20} style={{color:"beige", marginRight: "2rem"}} /> 
                </div>
            </div> 

        </div>
    </div>
  )
}

export default Footer