import React from 'react';
import '../styles/VerticalGrid.css'; // You can create a CSS file for styling

const VerticalGrid = ({ floors, onFloorClick }) => {
  
  return (
    <div className="vertical-grid">
      {floors.map((floorName, index) => (
        <div className="grid-box" key={index} onClick={() => onFloorClick(floorName)}>
          {floorName}
        </div>
      ))}
    </div>
  );
};

export default VerticalGrid;
