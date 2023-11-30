// RatingComponent.js
import React from 'react';
import '../styles/rating.css';

const RatingComponent = ({ rating }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
      ))}
    </div>
  );
};

export default RatingComponent;