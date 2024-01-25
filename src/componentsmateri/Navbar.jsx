import React from "react";
import './navbar.css'
import icon from "../assets/1.jpg"

const Navbar = () =>{
    return(
        <nav>
            <img src={icon} />
            <ul>
                <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                    <li>
                        <a href="/">About me</a>
                </li>
            </ul>


        </nav>
    )
}

export default Navbar