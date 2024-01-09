import React from 'react'
import { courseData } from './FeaturedCourses'
import { Container } from '@mui/material'


const course = courseData[0];

const CourseDetails = () => {
    return (
        <section className=''>
            <Container >
                <div className='px-8 py-10 text-xl font-semibold'>Home | Courses | {course.title}</div>

                <div className='flex mb-10'>
                    <div className='w-[70%] p-12'>
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
                    </div>
                    <div>
                        <img src={course.img} alt="a" className='rounded-lg' />
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default CourseDetails
