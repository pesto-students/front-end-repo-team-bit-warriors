import React, { useState } from "react";
import "../styles/Header.css"; // Import your CSS file for styling

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false);

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);

    };

    return (
        <header className="header">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo" />
            </div>
            <button className="hamburger" onClick={toggleDrawer}>
                <div className={`hamburger-line ${showDrawer ? "open" : ""}`}></div>
                <div className={`hamburger-line ${showDrawer ? "open" : ""}`}></div>
                <div className={`hamburger-line ${showDrawer ? "open" : ""}`}></div>
            </button>
            <nav className={`${showDrawer ? "nav_open" : "nav"}`}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;