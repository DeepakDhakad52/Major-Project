// Courses.js
import React from 'react';
import CourseCard from './CourseCard';
import image from '../images/bg-girl.jpg';
import RatingComponent from './RatingComponent';

const data = [
  {
    imageUrl: image,
    text: "Your text content goes here.",
  },
  {
    imageUrl: image,
    text: "Your text content goes here.",
  },
  {
    imageUrl: image,
    text: "Your text content goes here.",
  }, 
];

const Courses = () => {
  return (
    <>
    <div>
      {data.map((course, index) => (
        <CourseCard
          key={index}
          imageUrl={course.imageUrl}
          textContent={course.text}
        />
      ))}
    </div>
    </>
  );
};

export default Courses;
