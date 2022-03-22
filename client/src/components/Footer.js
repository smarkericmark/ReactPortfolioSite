import React from "react";
import GitHubIcon from '../Images/GitHub Icon.svg';

export default function Footer() {
    return (
        <div className='FooterBox'>
            
            <div className="footer--button">
            <a href="https://github.com/smarkericmark" target="_blank" className="footer--GitHubButton">
                    <img src={GitHubIcon} alt="GitHub" 
                    className="footer--image" />
                </a>
            </div>
            
            <div className="footer--text">
                <p>©Copyright 2022</p>
            </div>
        </div>
    )
}