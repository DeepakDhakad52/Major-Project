import React from 'react';
import { Container } from '@mui/material'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const OurTeam = () => {
  return (
    <section className='mb-44'>
      <Container>
        <div className='mt-16'>
          <h3 className='text-5xl font-semibold text-center text-zinc-800'>Meet Our Team</h3>
          <p className='text-gray-500 my-4 text-center sm:w-full md:w-[35%] mx-auto'>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-16'>
          <a href='https://www.github.com/' target='_black' className="shadow-md hover:scale-105 transition duration-500 cursor-pointer">
            <RecipeReviewCard name='Deepak Dhakad' profession='Full Stack Developer' img={'https://zone-ui.vercel.app/assets/images/portrait/portrait_2.jpg'} />
          </a>
          <a href='https://www.github.com/' target='_black' className="shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
            <RecipeReviewCard name='Ayushi Dubey' profession='Full Stack Developer' img={'https://zone-ui.vercel.app/assets/images/portrait/portrait_1.jpg'} />
          </a>
          <a href='https://www.github.com/' target='_black' className="shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
            <RecipeReviewCard name='Monika Patidar' profession='Full Stack Developer' img={'https://zone-ui.vercel.app/assets/images/portrait/portrait_1.jpg'} />
          </a>
          <a href='https://www.github.com/' target='_black' className="shadow-2xl hover:scale-105 transition duration-500 cursor-pointer">
            <RecipeReviewCard name='Prajwal Atkare' profession='Full Stack Developer' img={'https://zone-ui.vercel.app/assets/images/portrait/portrait_2.jpg'} />
          </a>
        </div>
      </Container>
    </section>
  )
}

export function RecipeReviewCard({ img, name = 'Team Member', profession = 'Employee' }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <h2 className='font-semibold text-center mt-4 text-2xl'>{name}</h2>
      <h4 className='text-gray-500 text-center mb-4'>{profession}</h4>
      <CardMedia
        component="img"
        height="200"
        image={img}
        alt={name}
      />
    </Card>
  );
}

export default OurTeam
