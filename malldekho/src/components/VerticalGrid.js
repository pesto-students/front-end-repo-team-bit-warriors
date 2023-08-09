import React from 'react';
import '../styles/VerticalGrid.css'; // You can create a CSS file for styling

const VerticalGrid = ({ numbers }) => {
  return (
    <div className="vertical-grid">
      {numbers.map((number, index) => (
        <div className="grid-box" key={index}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default VerticalGrid;
