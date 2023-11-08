import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../components/images/about1.jpg";
import image2 from '../components/images/about3.png';
import './styles/about.css';
import './Blog';

const About = () => {
  const navigate = useNavigate();

  const handleClick = (event) =>{
    navigate('/Blog');
  }

  return (
    <section>
      <div className='main_container'>
        <div className='about'>
          <div className='main-left'>
            <img src={image} alt='about' width={700} height={700}></img>
          </div>
          <div className='main-right'>
            <h1>Who we are?</h1>
            <p>Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc fringilla tristique. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.<br></br>
              Nam pretium turpis et arcu. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Praesent venenatis metus at tortor pulvinar varius.
            </p>
            <button onClick={handleClick}>Check Our Work </button>
          </div>
        </div>
        <div className='about_our_vision'>
          <h1>Our Vision and Mission</h1>
          <img src={image2} alt="hero" width={1000} height={700}></img>
        </div>
        <div className='testimonials'>     
        </div>
      </div>
    </section>
  )
}

export default About;
