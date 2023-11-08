import './styles/education.css'
import { Button, Container } from '@mui/material'
import teacher from './images/home_hero.png'
import React from 'react'

const EducationAndTraining = () => {
  return (
    <>
      <section className='education relative overflow-x-hidden'>
        <div className='w-screen h-screen bg-white/[.8] absolute top-0 overflow-hidden'>
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
                {/* <hr /> */}
              </div>
              <div className="heroImage w-[60%] mx-auto relative ">
                <img src={teacher} alt="" className='w-full absolute top-0 left-0' />
                {/* <div className="parent"> */}
                {/* <div className='w-96 h-96 rounded-[68px] rotate-[38deg] bg-blue-200 mt-[75px] ml-[50px]'></div> */}
                {/* <div className='w-96 h-96 rounded-[68px] rotate-66 bg-orange-200 mt-[75px] ml-[-18px]'></div>  */}
                {/* </div>/ */}
              </div>
            </div>
          </Container>
        </div>
      </section>
      <div>
        <h4 className='text-center text-5xl font-medium mt-20 mb-10'>We Work With</h4>
        <p className='text-center color-gray mb-10'>Quisque aliquet, libero consequat elementum convallis.</p>
        <Container>
          <Customer />
        </Container>

      </div>

    </>
  )
}

const Customer = () => {
  const customerData = [
    { id: 1, name: 'Customer 1', logo: 'logo1.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
    { id: 2, name: 'Customer 2', logo: 'logo2.png' },
  ];
  // const [offset, setOffset] = React.useState(0);

  // const marqueeStyle = {
  //   transform: `translateX(-${offset}px)`,
  // };

  // Adjust the speed of the marquee by changing the animation duration
  const animationDuration = `${customerData.length}s`;

  return (
    <div className="marquee-container">
      <div className="marquee" style={{ animationDuration }}>
        {customerData.map((customer) => (
          <div key={customer.id} className="customer">
            <span>{customer.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationAndTraining
