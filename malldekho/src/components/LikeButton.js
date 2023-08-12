import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import "../styles/LikeButton.css"

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
      {liked ? <FaHeart className="like-icon" /> : <FaRegHeart className="like-icon" />}
      {/* <span className="like-text">{likeCount}</span> */}
    </div>
  );
};

export default LikeButton;
