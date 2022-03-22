import React from "react"
import logo from '../Images/profilepic.jpeg';

export default function Header() {
    return (
        <div class='Top'>
            <img src={logo} alt="Logo" className="header--image" />
            <h1 className="header--name">Mark Berg</h1>
            <h2 className="header--title">IT & Security Professional</h2>
        </div>
    )
}