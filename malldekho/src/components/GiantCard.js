import React, {useState} from "react";
import { FaMapMarkerAlt, FaGlobe, FaClock } from "react-icons/fa";
import "../styles/GiantCard.css";
import LikeButton from "./LikeButton";
import { useEffect } from "react";

const GiantCard = ({ collection, isMall }) => {
    const [address, setAddress] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function main() {
            if (collection) {
                let addressString = '';

                if (isMall) {
                    addressString += collection.area ? collection.area : '';
                    addressString += collection.state ? ` ${collection.state}` : '';
                    addressString += collection.city ? ` ${collection.city}` : '';
                    addressString += collection.pin ? ` ${collection.pin}` : '';
                } else if (collection.mall) {
                    addressString += collection.mall.area ? collection.mall.area : '';
                    addressString += collection.mall.state ? ` ${collection.mall.state}` : '';
                    addressString += collection.mall.city ? ` ${collection.mall.city}` : '';
                    addressString += collection.mall.pin ? ` ${collection.mall.pin}` : '';
                }

                await setAddress(addressString.trim());
                setLoading(false);
            }
        }
        main();
    }, [collection, isMall]);


    // const onAddFav = (isAdded) => {
    //     console.log("clicke fav button")
    //     if(isAdded){
    //         const favData = {
    //             user: GlobalService.USER_ID(),
    //         }
    //         if(isMall){
    //             favData["mall"]=collection._id
    //         }else{
    //             favData["store"]=collection._id
    //         }
    //         console.log(favData);
    //     }
    // }

    return (
        <div className="mallContainer">
            <div className="mallDetails">
                <h1>{collection.name}</h1>
                <h4>Gateway to mall marvels and unbeatable savings</h4>
                <section className="info">
                    <div className="location-container">
                        <span>

                            <div className="icon"><FaMapMarkerAlt /></div>
                            {loading ? (
                                <p>Loading address...</p>
                            ) : (
                                <a href={collection.gmaplink}>{address}</a>
                            )}
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
                            <div className="statNumber">{collection.serviceProvider ? collection.serviceProvider : 30 }</div>
                            <p>Service Provider</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.shops? collection.shops : 150 }</div>
                            <p>Brands</p>
                        </span>
                        <LikeButton/>

                    </div>
                    ) : (

                    <div className="stats-container">
                        <span>
                            <div className="statNumber">{collection.discountCount ? collection.discountCount : 3}</div>
                            <p>Discounts</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.upcomingDiscount ? collection.upcomingDiscount: 2}</div>
                            <p>Upcoming Discount</p>
                        </span>
                        <span>
                            <div className="statNumber">{collection.dailySearch ? collection.dailySearch : 20}</div>
                            <p>Daily Search</p>
                        </span>
                        <LikeButton />

                    </div>

                    )}
                </section>
            </div>
            <div className="mallImage">
                <img src={collection.images} alt="" />
            </div>
        </div>
    );
};

export default GiantCard;
