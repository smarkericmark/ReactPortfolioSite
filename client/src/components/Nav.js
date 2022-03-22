import React from "react";
import MailIcon from '../Images/Icon.png';
import LinkedInIcon from '../Images/Vector.png';

export default function Navbar() {
    return (
        <nav className='NavButtons'>
            
            <div className="nav--button1">
                <a href="mailto:contact@mberg.ca" target="_blank" className="nav--EmailButton">
                    <img src={MailIcon} alt="Email" 
                    className="Nav--imageOne" />
                    Email
                </a>
            </div>
            
            <div className="nav--button2">
                <a href="https://www.linkedin.com/in/markcyberanalyst/" target="_blank" className="nav--LinkedInButton">
                    <img src={LinkedInIcon} alt="LinkedIn" 
                    className="Nav--imageTwo" />
                    LinkedIn
                </a>
            </div>

        </nav>
    )
}