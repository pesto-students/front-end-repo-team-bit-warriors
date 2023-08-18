import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import "../styles/LikeButton.css"

const LikeButton = ({liked, handleLike}) => {

  return (
    <div 
      className={`like-button ${liked ? 'liked' : ''}`} 
      onClick={handleLike}>
      {liked ? <FaHeart className="like-icon" /> : <FaRegHeart className="like-icon" />}
      
    </div>
  );
};

export default LikeButton;
