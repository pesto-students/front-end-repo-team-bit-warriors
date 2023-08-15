import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import StoreService from "../services/StoreService";
import MallImage from  "../assets/Mall.jpg"
import MiniCard from "../components/MiniCard"
import GiantCard from "../components/GiantCard"
import DiscountService from "../services/DiscountService";

const isMall = false;

const StorePage = () => {
    const [store, setStore] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const { store_id } = useParams();




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


    useEffect(() => {
        async function fetchData() {
            try {
                const discountData = await DiscountService.fetchDiscountByStoreId(store_id);
                setDiscounts(discountData)
            } catch (error) {
                console.error("Error fetching discounts:", error);
            }
        }

        fetchData();
    }, [store_id]);

    return (
        <>
            <GiantCard collection={store} isMall={isMall}/>
            <section className="discountContainer">
                <h1>Most Popular Offers</h1>
                {discounts.map((discount) => (
                    <div key={discount._id} className="card">
                        <div className="card">
                            <div className="cardImage">
                            {/* <a href={`/store/${store._id}`}> */}
                            <img src={discount.images} alt="" />
                            {/* </a> */}
                            </div>
                            <div className="cardHeader">
                                {discount?.name}
                                {discount?.discountPercentage}%
                            </div>
                            <div className="cardInfo">
                            <span>
                                <div className="icon"></div>
                                <p>Ending on : {discount.endDate}</p>
                            </span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};

export default StorePage;
