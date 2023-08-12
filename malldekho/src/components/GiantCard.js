import React from "react";
import { FaMapMarkerAlt, FaGlobe, FaClock, FaHeart } from "react-icons/fa";
import "../styles/GiantCard.css";
import MallImage from "../assets/Mall.jpg"
import LikeButton from "./LikeButton";

const GiantCard = ({ collection, isMall }) => {

    const address = collection.area +" "+ collection.state +" "+ collection.city +" "+ collection.pin
    return (
        <div className="mallContainer">
            <div className="mallDetails">
                <h1>{collection.name}</h1>
                <h4>Gateway to mall marvels and unbeatable savings</h4>
                <section className="info">
                    <div className="location-container">
                        <span>

                            <div className="icon"><FaMapMarkerAlt /></div>
                            <a href={collection.gmaplink}>{address}</a>
                        </span>
                        <span>

                            <div className="icon"><FaGlobe /></div>
                            <a href={collection.website} target="_blank" rel="noopener noreferrer">{collection.website}</a>
                        </span>
                        <span>
                            <div className="icon"><FaClock /></div>

                            <p>{collection.clockingtimes}</p>
                        </span>
                    </div>
                </section>
                <section className="stats">
                    {isMall ?  (
                    <div className="stats-container">
                        <span>
                            <div className="statNumber">{collection.floorsCount}</div>
                            <p>Floors</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.serviceProvider}</div>
                            <p>Service Provider</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.shops}</div>
                            <p>Brands</p>
                        </span>
                        <LikeButton/>

                    </div>
                    ) : (

                    <div className="stats-container">
                        <span>
                            <div className="statNumber">{collection.discountCount}</div>
                            <p>Discounts</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.upcomingDiscount}</div>
                            <p>Upcoming Discount</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.dailySearch}</div>
                            <p>Daily Search</p>
                        </span>
                        <LikeButton/>

                    </div>

                    )}
                </section>
            </div>
            <div className="mallImage">
                <img src={MallImage} alt="" />
            </div>
        </div>
    );
};

export default GiantCard;
