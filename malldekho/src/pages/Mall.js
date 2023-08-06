import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaGlobe, FaClock, FaHeart} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import MallService from "../services/MallService";
import StoreService from "../services/StoreService";
import MallImage from  "../assets/Mall.jpg"
import "../styles/Mall.css"

const MallsPage = () => {
    const [mall, setMall] = useState([]); // State to store the fetched malls
    const [store, setStore] = useState([]); // State to store the fetched stores
    const { mall_id } = useParams();

    useEffect(() => {
        // Fetch the data once the component mounts
        async function fetchData() {
            try {
                const mallsData = await MallService.fetchAllMalls()
                const myMall = mallsData.filter(mall => mall._id === mall_id)
                const stores = await StoreService.fetchStoresByMalls(myMall._id)
                setStore(stores)
                setMall(myMall); // Update the state with fetched malls
            } catch (error) {
                console.error("Error fetching malls:", error);
            }
        }

        fetchData();
    }, [mall_id]); // Empty dependency array ensures the effect runs only once

    return (
        <>
            <div className="mallContainer">
                <div className="mallDetails">
                    <h1>Viviana</h1>
                    <h4>Gateway to mall marvels and unbeatable savings</h4>
                    <section className="info">
                        <div className="location-container">
                            <span>

                            <div className="icon"><FaMapMarkerAlt /></div>
                            <p>On Eastern Express Highway, Service Rd, Thane, Maharashtra 400606</p>
                            </span>
                            <span>

                            <div className="icon"><FaGlobe /></div>
                            <a href="https://vivianamalls.com/" target="_blank" rel="noopener noreferrer">vivianamalls.com</a>
                            </span>
                            <span>
                            <div className="icon"><FaClock /></div>

                            <p>10am - 12pm</p>
                            </span>
                        </div>
                    </section>
                    <section className="stats">
                        <div className="stats-container">
                            <span>
                                <div className="statNumber">05</div>
                                <p>Floors</p>
                            </span>
                            <span>
                                <div className="statNumber">30</div>
                                <p>Service Provider</p>
                            </span>
                            <span>
                                <div className="statNumber">180</div>
                                <p>Brands</p>
                            </span>
                            <span className="icon"><FaHeart/></span>
                            
                        </div>
                    </section>
                </div>
                <div className="mallImage">
                    <img src={MallImage} alt=""/>
                </div>
            </div>
        </>
    );
};

export default MallsPage;