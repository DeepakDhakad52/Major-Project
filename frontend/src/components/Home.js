import React from 'react'
import './styles/header.css'
import svg from './images/waves-shape.svg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Dialog } from '@mui/material'
import About from './About';
import { Container } from '@mui/material';

export default function Header() {
  const [videoOpen, setVideoOpen] = React.useState(false);
  const handleVideoOpen = () => {
    setVideoOpen(true);
  }
  const handleClose = () => {
    setVideoOpen(false);
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <h1> Bridging the Gender Gap in Rural Entrepreneurship</h1>
          <h3>Empowering rural women entrepreneurs through technology: A web app to help them succeed.</h3>
          <div>
            <div>
              <div className="innerContainer" onClick={handleVideoOpen}>
                <div className='play-box'>
                  <PlayArrowIcon className='play-btn' />
                </div>
              </div>
              <Dialog
                open={videoOpen}
                onClose={handleClose}
                className='dialog-box'
                maxWidth='lg'
              >
                <iframe className='iframe md:w-[900px] md:h-[506.25px]' src="https://www.youtube.com/embed/-QwXaCI4898?si=MG6aYCNvA0CXrozb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Dialog>
            </div>
          </div>
        </div>
        <img src={svg} alt="Waves" />
      </header>
      <WeWorkWith />
      <About />
    </>
  )
}

export const WeWorkWith = () => {
  const customer = ['Google', 'FaceBook', 'Lenovo', 'IBM', 'Microsoft', 'NetFlix', 'Sotify'];
  const customerClass = 'border rounded-md hover:cursor-pointer hover:bg-slate-200 p-4 w-[192px] text-center text-2xl font-semibold m-2 transition duration-150'
  return (
    <div>
      <h4 className='text-center text-5xl font-medium mt-20 mb-4'>We Work With</h4>
      <p className='text-center color-gray mb-10'>Quisque aliquet, libero consequat elementum convallis.</p>
      <Container>
        <div className='flex my-8 flex-wrap justify-center'>
          {
            customer.map(customer =>
              <div className={customerClass}>
                {customer}
              </div>
            )
          }
        </div>
      </Container>
    </div>
  )
}

