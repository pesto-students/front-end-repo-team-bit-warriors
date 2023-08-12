import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaGlobe, FaClock, FaHeart} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import MallService from "../services/MallService";
import StoreService from "../services/StoreService";
import MallImage from  "../assets/Mall.jpg"
import MiniCard from "../components/MiniCard"
import SearchBox from "../components/SearchBox";
import VerticalGrid from "../components/VerticalGrid";
import "../styles/Mall.css"
import "../styles/FloorMap.css"

const MallsPage = () => {
    const [mall, setMall] = useState([]); // State to store the fetched malls
    const [floors, setFloors] = useState([]); // State to store the fetched mall's floor
    const [stores, setStores] = useState([]);
    const [storesByFloor, setStoresByFloor] = useState([]);
    const [activeFloor, setActiveFloor] = useState([])
    const { mall_id } = useParams();


    useEffect(() => {
        async function fetchData() {
            try {
                const mallsData = await MallService.fetchAllMalls();
                const myMall = mallsData.find((mall) => mall._id === mall_id);
                setMall(myMall);
                setFloors(myMall.floors);
                setActiveFloor(myMall.floors[0]);
            } catch (error) {
                console.error("Error fetching malls:", error);
            }
        }

        fetchData();
    }, [mall_id]);

    useEffect(() => {
        async function fetchStores() {
            try {
                const stores = await StoreService.fetchStoresByMalls(mall_id);
                setStores(stores);
            } catch (error) {
                console.error("Error fetching stores:", error);
            }
        }

        fetchStores();
    }, [mall_id]);

    useEffect(() => {
        const storesByFloor = stores.filter((store) => store.floor === activeFloor);
        setStoresByFloor(storesByFloor);
    }, [stores, activeFloor]);
    

    const onFloorClick = (floorName) => {
        setActiveFloor(floorName)
        console.log("onFloorClick",floorName, activeFloor)
        console.log("stores",stores)

        const storesByFloor = stores.filter(store => store.floor === floorName)
        setStoresByFloor(storesByFloor)
    }
    return (
        <>
            <div className="mallContainer">
                <div className="mallDetails">
                    <h1>{mall.name}</h1>
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
            <SearchBox/>
            <div className="storeInMalls">
                <div className="storeInMallsContainer">

                    <VerticalGrid floors={floors}  onFloorClick={onFloorClick}/>
                    <div className="floorMapStore">
                        <MiniCard storeDataList={storesByFloor}/>
                        {/* on floor click below component should get updated */}
                        {/* {stores.map((store) =>
                            store ? <MiniCard key={store._id} store={store} /> : null
                        )} */}

                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default MallsPage;
