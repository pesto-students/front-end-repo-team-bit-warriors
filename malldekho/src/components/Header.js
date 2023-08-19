import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { isLoggedIn } from "../services/AuthService";
import { FaUserCircle } from "react-icons/fa"
import Cookies from "js-cookie";

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);

    };
    const removeAuthCookie = () => {
        // Remove the authentication token from the cookie
        // document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        Cookies.remove("authCookie");
    };
    const logout = () => {
        // Removing authCookie and refresh the page
        removeAuthCookie();
        window.location.reload();
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
                <h1>Mall dekho</h1>
            </div>
            <button className="hamburger" onClick={toggleDrawer}>
                <div className={`hamburger-line ${showDrawer ? "open" : ""}`}></div>
                <div className={`hamburger-line ${showDrawer ? "open" : ""}`}></div>
                <div className={`hamburger-line ${showDrawer ? "open" : ""}`}></div>
            </button>
            <nav className={`${showDrawer ? "nav_open" : "nav"}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    {/* <li><a href="/services">Services</a></li> */}
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    {
                    isLoggedIn() ? 
                    (
                        <>
                        <li>
                            <FaUserCircle/>
                            <a href="/profile">
                            Profile
                            </a>
                        </li>
                        <li><a href="/" onClick={logout}>Logout</a></li>
                        </>
                    ):
                    (

                        <>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">Signup</a></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;