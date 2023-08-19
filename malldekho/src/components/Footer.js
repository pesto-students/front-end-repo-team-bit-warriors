import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="footerContainer">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <h1>Mall dekho</h1>
                    </div>
                    <div className="companynlinks">
                        <section>
                            <h1>Company</h1>
                            <ul>
                                <a>About Us</a>
                                <a>For Shoppers</a>
                                <a>Contact Us</a>
                            </ul>
                        </section>
                        <section>
                            <h1>Popular Links</h1>
                            <ul>
                                <a>Browse Stores</a>
                                <a>Browse Malls</a>
                                <a>Browse Discounts</a>
                                <a>Browse history posts</a>
                                <a>Browse Favourites </a>
                                <a>Browse location </a>
                                <a>Get insights of mall</a>
                            </ul>
                        </section>
                    </div>
                    <div className="location">
                        <section>
                            <h1>Locations</h1>
                            <ul>
                                <h4>Mumbai</h4>
                                <h4>Delhi</h4>
                                <h4>Pune</h4>
                                <h4>Banglore</h4>
                                <h4>Hyderabad </h4>
                                <h4>Kolkata </h4>
                                <h4>Surat</h4>
                                <h4>Nashik</h4>
                                <h4>Ahemdabad</h4>
                            </ul>
                        </section>
                    </div>
                    <div className="shoppers">
                        <h1>Shopping Elite</h1>
                        <p>Find Your Retail Paradise Unlock an extraordinary shopping experience with Mall Dekho</p>
                        <p>Seamless Mall Navigation Made Easy Navigate malls effortlessly with Mall Dekho</p>
                    </div>
                    <div className="followus">
                        <h1>Follow Us</h1>
                        <ul>
                            <a></a>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>Made with 💖</p>
                    <p>@2023 All Rights Reserved</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
