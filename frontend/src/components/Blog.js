import React from 'react';
import BlogCard from './BlogCard.js';
import './styles/blog.css';

function Blog() {
  return (
    <div className='blog'>
    <BlogCard/>
    <BlogCard/>
    <BlogCard/>
    </div>
  )
}

export default Blog
