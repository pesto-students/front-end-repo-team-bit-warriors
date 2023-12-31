import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MallService from "../services/MallService";
import StoreService from "../services/StoreService";
import MiniCard from "../components/MiniCard"
import GiantCard from "../components/GiantCard"
import SearchBox from "../components/SearchBox";
import VerticalGrid from "../components/VerticalGrid";
import "../styles/Mall.css"
import "../styles/FloorMap.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const isMall = true;

const MallsPage = () => {
    const [mall, setMall] = useState([]); // State to store the fetched malls
    const [floors, setFloors] = useState([]); // State to store the fetched mall's floor
    const [stores, setStores] = useState([]);
    const [storesByFloor, setStoresByFloor] = useState([]);
    const [activeFloor, setActiveFloor] = useState([])
    const { mall_id } = useParams();
    const [loader, setLoader] = useState(false);


    useEffect(() => {
        async function fetchData() {
            try {
                const mallsData = await MallService.fetchAllMalls();
                const myMall = mallsData.find((mall) => mall._id === mall_id);
                setMall(myMall);
                setFloors(myMall.floors.slice(0,myMall.floorsCount));
                setActiveFloor(myMall.floors[0]);
                setLoader(true)

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
            {loader ? (
                <>
                <GiantCard collection={mall} isMall={isMall}/>
                <SearchBox/>
                <div className="storeInMalls">
                    <div className="storeInMallsContainer">
    
                        <VerticalGrid floors={floors}  onFloorClick={onFloorClick}/>
                        <div className="floorMapStore">
                            {storesByFloor.length===0 ?
                            (
                                <h3 className="unavailable">Stores not available</h3>
                            ):
                            (
                                <MiniCard storeDataList={storesByFloor}/>
                            )}
    
                        </div>
                        
                    </div>
                </div>
                </>
            ) : (

            <div className="giantCardSkeleton">
                <section>
                    <Skeleton variant="rectangular" width={200} height={60} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                    <Skeleton variant="rounded" width={500} height={60} />
                    <Skeleton variant="rounded" width={500} height={60} />
                </section>
                <Skeleton variant="rectangular" width={500} height={500} />
            </div>

            )}

        </>
    );
};

export default MallsPage;
