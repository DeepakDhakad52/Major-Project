import React from 'react'
import { courseData } from './FeaturedCourses'
import { Accordion, AccordionDetails, AccordionSummary, Container } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';


const course = courseData[0];

const CourseDetails = () => {
    return (
        <React.Fragment>
            <section className='bg-slate-50 py-16'>
                <Container >
                    <div className='py-10 text-xl font-semibold'>Home | Courses | {course.title}</div>

                    <div className='flex mb-10'>
                        <div className='w-[70%] py-12 pr-24'>
                            <span className='text-blue-600 font-semibold'>{course.theme}</span>
                            <h1 className='text-4xl font-bold text-slate-800 my-5'>{course.title}</h1>
                            <p className='text-[#637381] font-sans tracking-wide text-md'>{course.description}</p>
                            <div className='my-4'>
                                <span className=" pr-2 border-slate-400 border-r">
                                    <i className="fa-solid fa-star text-yellow-400" /> <span className="font-semibold">{course.rating}</span> ({course.review})
                                </span>
                                <span className="inline-block w-1/2 px-2 ">
                                    <span className="font-semibold">{course.studentCount}</span> students
                                </span>
                            </div>
                            <div className="my-6 pl-2 flex pb-6 border-b border-dashed border-slate-400">
                                <img src={course.avtar} alt="teacher" className="rounded-full h-[40px]" />
                                <p className="p-2">Javioum Semion <span className="underline text-gray-500">+5 teachers</span></p>
                            </div>
                            <div className="flex justify-between px-2 w-3/4 mt-6 text-gray-600 text-lg">
                                <p><i className="fa-regular fa-clock" /> {course.courseTime}</p>
                                <p><i className="fa-regular fa-clock" /> <span className='font-bold'>{course.lessons}</span> Lessons</p>
                                <p><i className="fa-solid fa-chart-simple" /> {course.level}</p>
                            </div>
                            <div className="flex justify-between px-2 w-3/4 mt-6 text-gray-600 text-lg">
                                <p><i className="fa-regular fa-clock" /> {course.language}</p>
                            </div>
                        </div>
                        <div>
                            <img src={course.img} alt="a" className='rounded-lg' />
                        </div>
                    </div>


                </Container>
            </section>

            <Chapters />

        </React.Fragment>

    )
}

const Chapters = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <section className=''>
            <Container>
                <div className='flex'>
                    <div className='py-12 w-[70%]'>
                        <h1 className='text-3xl font-semibold '>Mega Digital Marketing - Lessons</h1>
                        <p className='text-sm font-sans font-bold text-gray-600 my-2'>Start Learning....</p>
                        <div className='my-10'>
                            {
                                arr.map(i =>
                                    <Accordion square sx={{ marginTop: '10px', boxShadow: '0px 05px 20px #00000024', borderRadius: '25px' }} >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon fontSize='medium' style={{ color: '#00000088' }} />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <div className='flex justify-around w-full'>
                                                <div className='w-[5%] text-xl'><i className="fa-regular fa-file text-red-400 rounded-full"></i></div>
                                                <h2 className='text-xl text-slate-800 w-[95%]'>Lesson {i}</h2>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div>

                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            }

                            <WhatWillYouLearn />

                        </div>
                    </div>
                    <div className='w-[30%] py-12'>
                        <div className='shadow-lg rounded-lg p-6 ml-6'>
                            <h1 className='text-3xl font-bold text-slate-800'>{course.price}</h1>
                            <p className='my-4 tracking-wide text-slate-800 font-semibold'>This Course includes:</p>
                            <h4 className='text-sm text-slate-800 my-4'><i className="fa-regular fa-clock" /> <span className='font-bold'>{course.lessons}</span> Lessons</h4>
                            <h4 className='text-sm text-slate-800 my-4'><i className="fa-regular fa-clock" /> <span className='font-bold'>12</span> Downloadable resources</h4>
                            <h4 className='text-sm text-slate-800 my-4'><i className="fa-regular fa-clock" /> Full lifetime access</h4>
                            <h4 className='text-sm text-slate-800 my-4'><i className="fa-regular fa-clock" /> Access on desktops, tablets, mobile</h4>
                            <h4 className='text-sm text-slate-800 my-4'><i className="fa-regular fa-clock" /> Certificate of completion</h4>
                            <Link className='my-4 bg-slate-800 block text-white rounded-lg p-2 text-lg font-semibold text-center' to={''}>Enroll Now</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const WhatWillYouLearn = () => {
    const topics = [
        'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
        'Vulputate placerat amet pulvinar lorem nisl.',
        'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
        'Etiam duis lobortis in fames ultrices commodo nibh.',
        'Fusce neque. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit.',
        'Curabitur a felis in nunc fringilla tristique. Praesent congue erat at massa.'
    ]
    const skillsGain = ['Technology', 'Marketing', 'Design', 'Photography', 'Art']
    return (
        <>
            <div className='mt-24'>
                <h2 className='text-3xl font-semibold text-gray-800'>What Will You Learn</h2>
                <ul className='my-6'>
                    {
                        topics.map(topic =>
                            <li className={'text-lg text-gray-800 font-medium tracking-wide my-2'}>
                                <i class="fa-solid fa-check text-red-400 mr-2 shadow-lg bg-slate-50 p-1 rounded-full"></i>
                                {topic}
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className='pt-10'>
                <h2 className='text-3xl font-semibold text-gray-800'>Skills You Will Gain</h2>
                <ul className='my-6 flex '>
                    {
                        skillsGain.map(skill =>
                            <li className={'mx-2 bg-slate-100 px-2 py-1 rounded-full'}>
                                {skill}
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className='py-10 border-b'>
                <h2 className='text-3xl font-semibold text-gray-800'>Overview</h2>
                <p className='text-lg text-gray-800 font-medium tracking-wide my-2'>Consentaneum aeternitate dignitati commoventur primisque cupit mea officia peccata parens egone dolorem minuis. Secundae neglegi sextilius conantur commodaita siti philosophi ioca tenere lorem apparet assentior pudoris sint leves neglegebat unde reliquisti simile.</p>
            </div>
        </>
    )
}

export default CourseDetails