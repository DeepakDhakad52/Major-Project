import '../styles/education.css'
import { Button, Container } from '@mui/material'
import teacher from '../images/home_hero.png'
import React from 'react'
import { WeWorkWith } from '../Home'
import FeaturedCourses from './FeaturedCourses'


const EducationAndTraining = () => {
  return (
    <>
      <section className='education relative overflow-x-hidden'>
        <div className='w-screen h-screen bg-white/[.93] absolute top-0 overflow-hidden'>
          <Container>
            <div className="container flex flex-row py-44 mx-[10%] max-w-6xl ">
              <div className="content w-[35%] p-2">
                <h2 className='font-bold  text-6xl text-slate-800 leading-snug'>Free <span className=' text-slate-400'>Online</span> <span className='text-orange-500 underline underline-offset-2'>Courses</span> From The Expert</h2>
                <p className='my-6 font-md text-slate-800 px-2 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est explicabo sed, tenetur tempore debitis at odio minima obcaecati </p>

                <Button
                  variant='contained'
                  size="small"
                  style={{ margin: '5% 2%', background: '#121212', padding: '10px', textTransform: 'capitalize', borderRadius: '20px' }}
                >Get Started<i className="fa-solid fa-arrow-right px-2"></i>
                </Button>
              </div>
              <div className="heroImage w-[60%] mx-auto relative ">
                <img src={teacher} alt="" className='w-full absolute top-0 left-0' />
              </div>
            </div>
          </Container>
        </div>
      </section>

      <WeWorkWith />
      <IntroComponent />
      <FeaturedCourses />

    </>
  )
}

export const IntroComponent = () => {
  return (
    <Container>
      <section className='my-20'>
        <div className='mb-20'>
          <span className='ml-2 text-orange-600 font-semibold text-center'>NULLAM ACCUMSAN LOREM IN DUI.</span>
        </div>
        <div className='flex justify-between'>
          <div className=''>
            <img src={'https://zone-ui.vercel.app/assets/images/course/course_6.jpg'} alt="girl" className='rounded-[20px]' />
          </div>
          <div className='w-[60%] p-20'>
            <div className=''>
              <h3 className='text-3xl font-semibold my-2'>Phasellus gravida semper nisi. Vestibulum rutrum</h3>
              <p className='text-gray-600 my-4'>Curabitur a felis in nunc fringilla tristique. Fusce egestas elit eget lorem. Etiam vitae tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.</p>
            </div>
            <div className='flex mt-16 text-gray-600 '>
              <div>
                <span className='bg-orange-500 inline-block w-[30px] h-[4px]'></span>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis</p>
              </div>
              <div>
                <span className='bg-orange-500 inline-block w-[30px] h-[4px]'></span>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default EducationAndTraining
