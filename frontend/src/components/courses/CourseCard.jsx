import React from 'react';
import '../styles/coursecard.css';

const CourseCard= ({ imageUrl, textContent }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="Sticky" />
      </div>
      <div className="card-content">
        <p>{textContent}</p>
      </div>
    </div>
  );
};

export default CourseCard;
