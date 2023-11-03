import React from 'react'
import './styles/header.css'
import svg from './images/waves-shape.svg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Dialog } from '@mui/material'
// import { Link } from 'react-router-dom'

const Header = () => {
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
              <iframe className='iframe' style={{width:"900px", height:"506.25px"}} src="https://www.youtube.com/embed/-QwXaCI4898?si=MG6aYCNvA0CXrozb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </Dialog>
            </div>
          </div>
        </div>
        <img src={svg} alt="Waves" />
      </header>
      <section>
        Home
      </section>
    </>
  )
}

export default Header
