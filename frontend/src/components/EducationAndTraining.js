import './styles/education.css'
import { Button, Container } from '@mui/material'
import teacher from './images/home_hero.png'
import React from 'react'
import { WeWorkWith } from './Home'

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
    </>
  )
}

export default EducationAndTraining
