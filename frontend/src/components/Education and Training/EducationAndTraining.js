import '../styles/education.css'
import { Button, Container } from '@mui/material'
import teacher from '../images/home_hero.png'
import React from 'react'
import { WeWorkWith } from '../Home'
import { Discount } from '../Contact'
import FeaturedCourses from './FeaturedCourses'
import OurTeam from '../OurTeam'
import DownloadApp from './DownloadApp';
import { Link } from 'react-router-dom'

const EducationAndTraining = () => {
  return (
    <>
      <section className='education'>
        <div className='bg-white/[.95] pb-32'>
          <Container>
            <div className="container flex my-20 mx-24"> 
              <div className="w-[35%] p-2">
                <h2 className='font-bold text-6xl text-slate-800 leading-snug'>Free <span className=' text-slate-400'>Online</span> <span className='text-orange-500 underline underline-offset-2'>Courses</span> From The Expert</h2>
                <p className='my-6 font-md text-slate-800 px-2 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est explicabo sed, tenetur tempore debitis at odio minima obcaecati </p>

                <Link to={'/course'}>
                  <Button
                    variant='contained'
                    size="large"
                    style={{ background: '#121212', textTransform: 'capitalize', borderRadius: '10px' }}
                    className=''
                  >Browse Course{' '}<i className="fa-solid fa-angle-right ml-2 text-xl" />
                  </Button>
                </Link>
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
      <FeaturedCategory />
      <OurTeam />
      <Discount />
      <DownloadApp />

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

export const FeaturedCategory = () => {
  const featuredCategoryData = [
    { title: 'Technology', studentCount: 497 },
    { title: 'Marketing', studentCount: 763 },
    { title: 'Design', studentCount: 684 },
    { title: 'Photography', studentCount: 451 },
    { title: 'Art', studentCount: 433 },
    { title: 'Fashion', studentCount: 463 },
    { title: 'Food', studentCount: 951 },
    { title: 'Travel', studentCount: 194 },
    { title: 'Fitnes', studentCount: 425 },
  ]
  return (
    <div className='bg-zinc-100 py-32'>
      <Container>
        <div className='flex justify-between'>
          <div className='w-[35%] p-4'>
            <h2 className='text-5xl font-bold text-gray-900 leading-tight'>Featured Category</h2>
            <p className='text-gray-500 my-6'>Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases</p>
            <button className='border border-black p-4 rounded-lg font-semibold transition-all duration-400 hover:bg-neutral-800 hover:text-white'>
              Explore More <i className="fa-solid fa-angle-right" />
            </button>
          </div>
          <div className='w-[60%]'>
            <div className='grid grid-cols-3 gap-6'>
              {
                featuredCategoryData.map(data =>
                  <div key={data.title}
                    className={'border border-slate-300 rounded-[12px] p-4 w-[220px] transition duration-300 hover:text-orange-600 hover:cursor-pointer hover:bg-white hover:shadow-[0px_5px_25px_rgba(0,0,0,0.3)]'}
                  >
                    <h6 className='text-xl font-semibold my-3'>{data.title}</h6>
                    <span className='text-gray-500'>{data.studentCount} students</span>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default EducationAndTraining
