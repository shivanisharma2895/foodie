import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    useEffect(() => {
        console.log("useEffect");
    }, []);

    console.log("header");


    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' alt='' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>  {/**Link help us to navigate on different pages wihtout reloading the entire app */}
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button onClick={() => { btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login") }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}


export default Header;  