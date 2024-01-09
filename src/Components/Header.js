 import {LOGO_URL} from "../utils/constants"
 import { useState } from "react";
import {Link } from 'react-router-dom'
const Header =() =>{
    
    const [btnNameReact,setbtnNameReact] = useState("login")

    return(
        <div className="header">
            <div className="Logo-container">
                <img className="logo"  src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link> </li>
                    <li><Link to="/Contact">Contact Us</Link>  </li>
                    <li>Cart</li>
                    <li><button className="login" onClick={()=> {
                     btnNameReact ==="login" ?  setbtnNameReact("LogOut"): setbtnNameReact("login")
                    }}> {btnNameReact}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;