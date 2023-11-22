import './styles/contact.css'
import { Button, Container, TextField } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallIcon from '@mui/icons-material/Call';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import React from 'react'
import OurTeam from './OurTeam';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='my-16 bg-white/[.8]'>
        <Container>
          <div className="contact-container mx-auto flex mt-24 ">
            <div className="contact1 w-1/2 p-4">
              <h1 className='text-5xl font-semibold mb-4 mt-2'>Get in Touch</h1>
              <div className='mt-8'>
                <EmailOutlinedIcon />
                <span className='font-semibold ml-2'>Email</span><br />
                <a href="mailto:someone@yoursite.com" className='mt-2 hover:underline'>contact@empowerher.com</a>
              </div>
              <div className='mt-8'>
                <CallIcon />
                <span className='font-semibold ml-2'>Phone</span><br />
                +91 8357019508
              </div>
              <div className='mt-8'>
                <LocationOnOutlinedIcon />
                <span className='font-semibold ml-2'>Address</span><br />
                Opposite Indian Institute of Management,<br />
                Rau - Pithampur Rd, Rau, Indore,<br />
                Madhya Pradesh 453331
              </div>
              <div className='mt-8 border border-slate-400 w-3/4'></div>
              <div className='mt-4'>
                <span className='font-semibold text-xl'>Follow Us</span><br />
                <div className="social-icons">
                  <a href="/" target='blank' className='linkedin'><i className="fa-brands fa-linkedin"></i></a>
                  <a href="/" target='blank' className='insta'><i className="fa-brands fa-instagram"></i></a>
                  <a href="/" target='blank' className='fb'><i className="fa-brands fa-facebook"></i></a>
                  <a href="/" target='blank' className='twitter'><i className="fa-brands fa-twitter"></i></a>
                </div>
              </div>
            </div>

            <div className="contact2 w-1/2 p-4 ">
              <h1 className='text-5xl font-semibold mb-4 text-center'>Drop Us A Line</h1>
              <p className='text-center'>We normally respond within 2 business days</p>
              <div className='w-full rounded-lg mt-6 '>
                <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} />
              </div>
              <div className='w-full rounded-lg mt-6 '>
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} />
              </div>
              <div className='w-full rounded-lg mt-6 '>
                <TextField id="outlined-basic" label="Subject" variant="outlined" fullWidth={true} />
              </div>
              <div className='w-full rounded-lg mt-6'>
                <TextField id="outlined-multiline-flexible" label="Message" multiline maxRows={4} fullWidth={true} />
              </div>
              <div className='w-full'>
                <Button
                  variant='contained'
                  size="medium"
                  style={{ margin: '5% auto', background: '#121212', padding: '10px', textTransform: 'capitalize', borderRadius: '5px' }}
                >Submit<i className="fa-solid fa-arrow-right px-2"></i>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <Discount />
      <OurTeam />
      
    </section>
  )
}

export const Discount = () => {
  return (
    <div className='w-screen p-16' style={{ background: 'rgb(254, 233, 209)' }}>
      <Container>
        <div className="flex p-8">
          <div className='w-1/2 p-8'>
            <h2 className='text-4xl font-semibold leading-snug text-center'>Register Now Forget 20% Discount Every Courses</h2>
            <p className='text-center mt-4'>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed magna purus, fermentum eu</p>
            <div className=''>
              <input type="email" name="" id="" placeholder='Email address' className=' w-full rounded-lg text-sm mt-6 p-4 text-slate-800 outline-0' />
              <button className='btn' style={{ marginTop: '1rem' }}>Register</button>
            </div>
          </div>
          <div className='w-1/2'>
            <img src={'https://zone-ui.vercel.app/assets/illustrations/illustration_newsletter.svg'} alt="contact" width={350} className='mx-auto' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact
