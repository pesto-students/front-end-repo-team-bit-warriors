import React from 'react';
import "../styles/MiniCard.css"
import { FaPhoneSlash, FaMailBulk, FaLink } from "react-icons/fa"

const MiniCard = ({store}) => {
    console.log("store",store)
     if (!store) {
        // Handle the case where store is undefined
        return <div>No store data vailable</div>;
      }
    return (
        <>
                <div className="cardContainer">
                    <div className="card">
                        <div className="cardImage">
                            <img src={store?.image} alt="" />
                        </div>
                        <div className="cardHeader"></div>
                        <div className="cardInfo">
                            <span>
                                <div className="icon"><FaPhoneSlash /></div>
                                <p>{store?.email}</p>
                            </span>
                            <span>

                                <div className="icon"><FaMailBulk /></div>
                                <p>{store?.website}</p>
                            </span>
                            <span>
                                <div className="icon"><FaLink /></div>
                                <p>{store?.website}</p>
                            </span>
                        </div>
                    </div>
                </div>
                    </>
    )
}

export default MiniCard