import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import { isLoggedIn } from "../services/AuthService";
import { FaUserCircle } from "react-icons/fa"

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);

    };

    return (
        <header className="header">
            <a className="logo" href="/">
                <img src={logo} alt="" />
                <h1>Mall dekho</h1>
            </a>
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
                        <li>
                            <FaUserCircle/>
                            <a href="/profile">
                            Profile
                            </a>
                            </li>
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