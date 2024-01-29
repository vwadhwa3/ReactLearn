 import {LOGO_URL} from "../utils/constants"
 import { useState, useContext } from "react";
import {Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
const Header =() =>{
    
    const [btnNameReact,setbtnNameReact] = useState("login")
    const OnlineStatus = useOnlineStatus();
    const data = useContext(userContext)
    return(
        <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-50">
            <div className="Logo-container">
                <img className="w-56"  src={LOGO_URL} alt="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4">online : {OnlineStatus ? "✅" : "❌"  }</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/About">About Us</Link> </li>
                    <li className="px-4"><Link to="/Contact">Contact Us</Link>  </li>
                    <li className="px-4"><Link to="/Grocery">Grocery </Link>  </li>
                    <li className="px-4">Cart</li>
                    <li className="px-4"><button className="login" onClick={()=> {
                     btnNameReact ==="login" ?  setbtnNameReact("LogOut"): setbtnNameReact("login")
                    }}> {btnNameReact}</button></li>
                    <li><span className="font-bold"> {data.loggedInUser} </span> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;