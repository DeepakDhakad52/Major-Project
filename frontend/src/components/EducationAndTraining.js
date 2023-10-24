import './styles/education.css'
import { Button, Container } from '@mui/material'
import teacher from './images/home_hero.png'

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
                style={{ margin: '5% 2%', background:'#121212', padding:'10px', textTransform:'capitalize', borderRadius:'20px' }}
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex possimus laboriosam soluta dolore eveniet amet minus dolorem deserunt fugit veritatis quo sint beatae necessitatibus tenetur nam, vitae rerum, libero, quis nesciunt deleniti fuga unde. Corrupti minus, ex ipsa omnis consequuntur porro consectetur animi et suscipit, consequatur quidem autem fugiat exercitationem architecto, voluptas deleniti deserunt nesciunt rem in dolore? Facilis optio reiciendis nam voluptatibus. Reiciendis eum deleniti ut odit animi cumque inventore aspernatur aperiam voluptates autem placeat reprehenderit distinctio iste beatae dolorum odio, id velit repudiandae ex commodi nisi. Debitis, error quas esse, optio fuga placeat corrupti voluptas minus sint et voluptatum illo dolorum eos officiis, officia iure ducimus cum neque quam sapiente odit enim. Assumenda minus consequatur sapiente alias amet, laborum, asperiores ab ea itaque consequuntur fuga nam enim distinctio impedit obcaecati repellendus. Beatae laboriosam enim placeat illum sapiente, iste mollitia quod vero dignissimos adipisci reprehenderit quasi, harum repellat? Eum velit ut consectetur rem veritatis eveniet voluptatibus sint nobis inventore. Voluptate neque, qui vel vitae minima ipsam eligendi quos labore assumenda in, dolorum minus veniam, corporis aliquam reprehenderit corrupti modi quo illo iste voluptatum asperiores. Reiciendis facilis optio soluta odit similique obcaecati officia. Assumenda ea ad rerum veniam, deserunt obcaecati?
      </div>

    </>
  )
}

export default EducationAndTraining
