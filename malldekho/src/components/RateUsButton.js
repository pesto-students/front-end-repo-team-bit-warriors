import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import "../styles/RateUsButton.css"

const RateUsButton = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="rate-us">
      <h3>Rate Us:</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${rating >= star ? 'active' : ''}`}
            onClick={() => handleRating(star)}
          >
            {rating >= star ? <FaStar /> : <FaRegStar />}
          </span>
        ))}
      </div>
      {rating > 0 && (
        <p className="rating-text">You rated us {rating} out of 5!</p>
      )}
    </div>
  );
};

export default RateUsButton;
