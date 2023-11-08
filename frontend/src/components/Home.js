import React from 'react'
import './styles/header.css'
import svg from './images/waves-shape.svg'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Dialog } from '@mui/material'
// import { Link } from 'react-router-dom'
import Footer from './Footer';
import About from './About';

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
      <section className='p-8'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti laboriosam omnis ex praesentium ut facilis, error doloribus harum eaque saepe quia inventore iusto possimus ipsa porro neque fugiat dolore suscipit aliquam quam commodi temporibus odio recusandae mollitia. Iste itaque rem incidunt blanditiis sit eveniet delectus facere, fugiat ea quisquam iure fuga, mollitia adipisci deserunt officiis commodi sequi architecto dolore inventore hic cumque voluptates voluptate! Adipisci tenetur magni quia quidem perspiciatis ducimus assumenda id ipsam tempore tempora eligendi neque enim, earum quisquam, nesciunt, in omnis deserunt. Dignissimos totam ipsum inventore quas atque autem nesciunt sit reprehenderit laboriosam molestias obcaecati dolore magnam modi tempora doloribus maiores, perferendis voluptas, facilis optio quaerat e ea ducimus quibusdam. Nobis repellat temporibus dignissimos accusantium, eligendi assumenda voluptatem eaque id fuga ullam praesentium aut aliquam exercitationem reiciendis ad voluptatibus voluptas, vel doloremque at, sint alias maxime. Ab alias ipsam soluta! Facere vel minus ut, eum consequatur iure minima architecto itaque quasi eos suscipit voluptas ducimus odit, sint pariatur repellat rem? Explicabo dolorum sequi nesciunt officia aut vero facilis ccusamus molestiae vitae eius suscipit debitis quisquam beatae quod? Voluptatibus laudantium vel magni? Cumque natus id voluptatibus error velit magni dolorem. Veniam maiores quasi nobis eveniet nostrum quas, animi libero optio cumque ea earum quo illum alias. Laudantium quis iste incidunt porro earum beatae praesentium maxime! Voluptas corporis molestias nostrum adipisci quidem iusto commodi, quo omnis iste vitae animi earum suscipit! Nostrum, animi cumque quae, aut magni debitis provident laudantium dignissimos corrupti repellat ipsum illum! Eligendi deleniti exercitationem pariatur ducimus, ipsum aliquam perspiciatis doloremque id dicta facere facilis, ea libero. Cum recusandae ullam excepturi animi quo, ipsa qui ea tempora provident, dolor vero voluptatum vel exercitationem numquam adipisci velit dolores eveniet? Eius architecto quo unde, debitis possimus ipsa ipsam itaque corporis, sapiente consequuntur facilis blanditiis veniam perspiciatis, repudiandae odit? Culpa quisquam reprehenderit nulla rerum dicta dolorem nihil vero, error quam labore ut 

        <About/>
      </section>
      <Footer/>
    </>
  )
}

export default Header
