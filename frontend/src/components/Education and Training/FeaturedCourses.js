import { Card, CardContent, CardMedia, Container, Grid } from "@mui/material"
import { Link } from "react-router-dom"

export const courseData = [
    {
        id: 1,
        img: 'https://zone-ui.vercel.app/assets/images/course/course_11.jpg',
        avtar: 'https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg',
        alt: 'girl',
        theme: 'Fitness',
        price: '$269.99',
        title: 'Mega Digital Marketing ',//Course A-Z: 12 Courses in 1 + Updates
        rating: '2.3',
        review: '13k review',
        studentCount: '180k',
        courseTime: '100 hours',
        level: 'Expert',
        description: 'Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.',
        language: ['English, Hindi'],
        lessons: 9
    },
    {
        id: 2,
        img: 'https://zone-ui.vercel.app/assets/images/course/course_12.jpg',
        avtar: 'https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg',
        alt: 'girl',
        theme: 'Nature',
        price: '$300',
        title: 'Mega Digital Marketing Course lorem You can see the most.',
        rating: '4.2',
        review: '13k review',
        studentCount: '180k',
        courseTime: '120 hours',
        level: 'Intermediate'
    },
    {
        id: 3,
        img: 'https://zone-ui.vercel.app/assets/images/course/course_1.jpg',
        avtar: 'https://zone-ui.vercel.app/assets/images/avatar/avatar_1.jpg',
        alt: '3',
        theme: 'Technology',
        price: '$135.99',
        title: 'Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates',
        rating: '4.9',
        review: '13k review',
        studentCount: '400k',
        courseTime: '80 hours',
        level: 'Beginner'
    },
]

const FeaturedCourses = () => {
    return (
        <div className="my-44">
            <Container>
                <h2 className='text-5xl font-bold text-gray-900 my-8 '>Featured Courses</h2>
                <p className='text-gray-600 my-4'>Nullam accumsan lorem in dui. Praesent ac massa at ligula laoreet iaculis.</p>
                <Grid container spacing={3} sx={{ marginTop: '50px' }}>
                    {
                        courseData.map(course =>
                            <Grid item xs={12} md={4} key={course.id}>
                                <CardConponent
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
                                />
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    )
}

export const CardConponent = ({ id, img, alt, theme, price, title, rating, review, studentCount, courseTime, level, avtar, direction='flex-col' }) => {
    return (
        <Link to={`/course/${id}`}>
            <Card
                sx={{ borderRadius: '20px', boxShadow: '2px 2px 15px rgba(0,0,0,0.1)', marginBottom: '20px' }}
                className="hover:shadow-[0_5px_40px_rgba(0,0,0,0.5)] cursor-pointer"
            >
                <div className={`flex ${direction}`}>
                    <CardMedia
                        component="img"
                        // height="150"
                        image={img}
                        sx={ direction==='flex-row' ? {width: '30%'} : null}
                        alt={alt}
                    />
                    <CardContent>
                        <div className="flex justify-between ">
                            <span className="block text-orange-600 font-semibold">{theme}</span>
                            <span className="block font-semibold text-xl">{price}</span>
                        </div>
                        <h1
                            style={{ display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical' }}
                            className="overflow-hidden my-8 hover:underline font-semibold">
                            {title}
                        </h1>
                        <div className="flex my-8">
                            <span className="inline-block w-1/2 px-2 border-r">
                                <i className="fa-solid fa-star text-yellow-400" /> <span className="font-semibold">{rating}</span> ({review})
                            </span>
                            <span className="inline-block w-1/2 px-2 ">
                                <span className="font-semibold">{studentCount}</span> students
                            </span>
                        </div>
                        <div className="pl-2 flex pb-6 border-b">
                            <img src={avtar} alt="teacher" className="rounded-full h-[40px]" />
                            <p className="p-2">Javioum Semion <span className="underline text-gray-500">+5 teachers</span></p>
                        </div>
                        <div className="flex justify-between px-2 mt-6 text-gray-500 text-lg">
                            <p><i className="fa-regular fa-clock" /> {courseTime}</p>
                            <p><i className="fa-solid fa-chart-simple" /> {level}</p>
                        </div>
                    </CardContent>
                </div>
            </Card>
        </Link>
    )
}

export default FeaturedCourses
