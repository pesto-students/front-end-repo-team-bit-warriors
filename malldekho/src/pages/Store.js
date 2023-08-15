import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import StoreService from "../services/StoreService";
import MallImage from  "../assets/Mall.jpg"
import MiniCard from "../components/MiniCard"
import GiantCard from "../components/GiantCard"

const isMall = false;

const StorePage = () => {
    const [store, setStore] = useState([]);
    // const [storesByFloor, setStoresByFloor] = useState([]);
    // const [activeFloor, setActiveFloor] = useState([])
    const { store_id } = useParams();


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const mallsData = await MallService.fetchAllMalls();
    //             const myMall = mallsData.find((mall) => mall._id === mall_id);
    //             setMall(myMall);
    //             setFloors(myMall.floors);
    //             setActiveFloor(myMall.floors[0]);
    //         } catch (error) {
    //             console.error("Error fetching malls:", error);
    //         }
    //     }

    //     fetchData();
    // }, [mall_id]);

    useEffect(() => {
        async function fetchStores() {
            try {
                const storeData = await StoreService.fetchStoreByID(store_id);
                console.log(storeData)
                setStore(storeData);
                console.log("STORE", store)
            } catch (error) {
                console.error("Error fetching stores:", error);
            }
        }

        fetchStores();
    }, [store_id]);

    // useEffect(() => {
    //     const storesByFloor = stores.filter((store) => store.floor === activeFloor);
    //     setStoresByFloor(storesByFloor);
    // }, [stores, activeFloor]);
    

    // const onFloorClick = (floorName) => {
    //     setActiveFloor(floorName)
    //     console.log("onFloorClick",floorName, activeFloor)
    //     console.log("stores",stores)

    //     const storesByFloor = stores.filter(store => store.floor === floorName)
    //     setStoresByFloor(storesByFloor)
    // }
    return (
        <>
            <GiantCard collection={store} isMall={isMall}/>
        </>
    );
};

export default StorePage;
