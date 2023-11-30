import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../components/images/about1.jpg";
import './styles/about.css';
import '../components/Blog/Blog.js';
import aboutdata from './AboutPage.js';
import { Container } from '@mui/material';
import Courses from './courses/Courses.js';

const About = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    navigate('/');
  }

  return (
    <section>
      <Container>
        <div className='main_container'>
          <div className='about'>
            <div className='main-left'>
              <img src={image} alt='about' width={900} height={900}></img>
            </div>
            <div className='main-right'>
              <h1>Who we are?</h1>
              <p>Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.<br></br>
                Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius.
              </p>
              <button onClick={handleClick} className='rounded-lg'>Check Our Work </button>
            </div>
          </div>
          <div className='about_our_vision'>
            <h1>Our Vision and Mission</h1>
            <div className='vision'>
              {
                aboutdata.map((element) => (
                  <div className='content rounded-lg' key={element.heading}>
                    <h3>{element.heading}</h3>
                    <div className='centered-image'>
                      <img src={element.image} alt={element.heading} width={100} height={100} />
                    </div>
                    <p>{element.para}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About;
