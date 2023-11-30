import React from 'react';
import BlogCard from './BlogCard'
import '../styles/blog.css';
import { Container } from '@mui/material';

function Blog() {
  return (
    <Container>
      <div className='blogspage'>
        <h1>Trending Blogs</h1>
        <div className='blogs'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      </div>
    </Container>
  )
}

export default Blog
