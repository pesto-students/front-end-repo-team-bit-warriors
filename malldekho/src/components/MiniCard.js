import React, { useState} from "react";
import "../styles/MiniCard.css"
import { FaPhoneSlash, FaMailBulk, FaLink, FaStar, FaRegStar } from "react-icons/fa" // Import FaRegStar for outlined star
import MallImage from "../assets/Mall.jpg"
const CardsPerPage = 6;
const MiniCard = ({ storeDataList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!storeDataList) {
    // Handle the case where store is undefined
    return <div>No store data available</div>;
  }

  const totalPages = Math.ceil(storeDataList.length / CardsPerPage);
  const startIndex = (currentPage - 1) * CardsPerPage;
  const visibleStores = storeDataList.slice(startIndex, startIndex + CardsPerPage);


  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(<div key={i} className="icon"><FaStar /></div>);
    }

    if (hasHalfStar) {
      stars.push(<div key="half" className="icon"><FaRegStar /></div>);
    }

    return stars;
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
    <div className="cardContainer">
         {visibleStores.map((store) => (
          <div key={store.id} className="card">
                <div className="card">
                    <div className="cardImage">
                      <a href={`/store/${store._id}`}>
                      <img src={MallImage} alt="" />
                      </a>
                    </div>
                    <div className="cardHeader">
                    {store?.name}
                    <span className="star-rating">{renderStarRating(store?.rating)}</span>
                    </div>
                    <div className="cardInfo">
                    <span>
                        <div className="icon"><FaPhoneSlash /></div>
                        <p>{store?.phone}</p>
                    </span>
                    <span>
                        <div className="icon"><FaLink /></div>
                        <p>{store?.website}</p>
                    </span>
                    </div>
                </div>
            </div>
        ))}
    </div>
     <div className="pagination">
     {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
       <button
         key={page}
         className={currentPage === page ? "active" : ""}
         onClick={() => handlePageChange(page)}
       >
         {page}
       </button>
     ))}
   </div>
   </>
  );
}

export default MiniCard;
