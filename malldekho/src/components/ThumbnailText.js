import React from 'react';
import "../styles/Thumbnail.css"

const ThumbnailText = ({text}) => {

    return (
        <>
        <div class='search-wrap'>
            <div class='random e-bold'>{text}</div>
        </div>
        </>
    )
}

export default ThumbnailText