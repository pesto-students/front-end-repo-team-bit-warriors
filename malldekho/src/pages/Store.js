import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import StoreService from "../services/StoreService";
import GiantCard from "../components/GiantCard"
import DiscountService from "../services/DiscountService";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../styles/Discount.css";
import "../styles/Mall.css";


const isMall = false;

const StorePage = () => {
    const [store, setStore] = useState([]);
    const [discounts, setDiscounts] = useState([]);
    const [loader, setLoader] = useState(false);
    const { store_id } = useParams();




    useEffect(() => {
        async function fetchStores() {
            try {
                const storeData = await StoreService.fetchStoreByID(store_id);
                console.log(storeData)
                setStore(storeData);
                console.log("STORE", store)
                setLoader(true)
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
        {loader ? (

            <>
            <GiantCard collection={store} isMall={isMall}/>
            { discounts ? (
                <section className="discountContainer">
                    <h1>Most Popular Offers</h1>
                        <div className="cards">
                        {discounts.map((discount) => (
                            <div  key={discount._id} className="card">
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
                            ))}
                        </div>
                </section>
            ) : 
            (
                <h1> Discount not available </h1>
            )}
            </>
        ): (
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

export default StorePage;
