import React from 'react'
import { Container } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search';
import { Rating } from '@mui/material';
import MenuList from './MenuList'
import { CardConponent } from './FeaturedCourses';
import { courseData } from './FeaturedCourses';


const Course = () => {
    const filterData = [
        {
            title: 'Duration',
            payload: [{ title: '0-1 Hour' }, { title: '1-3 Hour' }, { title: '3-6 Hour' }, { title: '6-18 Hour' }, { title: '18+ Hour' }]
        },
        {
            title: 'Category',
            payload: [{ title: 'Technology' }, { title: 'Marketing' }, { title: 'Design' }, { title: 'Photography' }, { title: 'Art' }, { title: 'Fashion' }, { title: 'Food' }, { title: 'Travel' }, { title: 'Fitnes' },]
        },
        {
            title: 'Level',
            payload: [{ title: 'Beginner' }, { title: 'Intermediate' }, { title: 'Expert' },]
        },
        {
            title: 'Fee',
            payload: [{ title: 'Free' }, { title: 'Paid' },]
        },
        {
            title: 'Language',
            payload: [{ title: 'Hindi' }, { title: 'English' },]
        },
    ]
    return (
        <section className='my-20'>
            <Container>
                <h3 className='text-5xl font-bold tracking-wide text-gray-800 my-10'>Courses</h3>
                <div className='flex justify-between'>
                    <div className='w-[25%] '>
                        <SearchBox />
                        <div className='my-4'>
                            <span className='block my-2 text-slate-500 font-bold text-sm tracking-wide'>RATINGS</span>
                            <RatingComponent />
                        </div>
                        {
                            filterData.map(filter =>
                                <div className='my-4' key={filter.title}>
                                    <span className='block my-2 text-slate-500 font-bold text-sm tracking-wide uppercase'>{filter.title}</span>
                                    <MenuList payload={filter.payload} name={filter.title} />
                                </div>
                            )
                        }

                    </div>
                    <div className='w-[70%] '>
                        {
                            courseData.map(course =>
                                <CardConponent
                                    key={course.id}
                                    id={course.id}
                                    img={course.img}
                                    alt={course.alt}
                                    theme={course.theme}
                                    price={course.price}
                                    title={course.title}
                                    rating={course.rating}
                                    review={course.review}
                                    studentCount={course.studentCount}
                                    courseTime={course.courseTime}
                                    level={course.level}
                                    avtar={course.avtar}
                                    direction='flex-row'
                                />
                            )
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}


export const SearchBox = () => {
    return (
        <div className='bg-gray-100 rounded-lg overflow-hidden flex my-2'>
            <input type="text" name="search" id="search" placeholder='Search...' className='w-full text-md p-4 bg-gray-100 text-slate-500 outline-0' />
            <SearchIcon
                fontSize='large'
                className='text-slate-500 m-[10px] cursor-pointer'
                onClick={() => alert('Clicked')}
            />
        </div>
    );
}

export const RatingComponent = () => {
    const [value, setValue] = React.useState(2);
    return (
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />
    );
}

export default Course
