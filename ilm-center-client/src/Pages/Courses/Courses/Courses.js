import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from '../Categories/Categories';
import CoursesHeading from '../CoursesHeading/CoursesHeading';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-2 md:grid-cols-12 gap-2 md:mx-8 mx-1' >
            <div className='col-span-2  m-4'>
                <h2 className='text-2xl font-bold text-center'>Our Courses</h2>
                <div className='mx-auto text-center'>
                    {
                        courses.map(course =><CoursesHeading
                        key={course.id}
                        course = {course}
                        ></CoursesHeading>)
                    }
                </div>
            </div>
            <div className='col-span-10  m-2 '>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-2'>
                   {
                    courses.map(course => <Categories
                    key={course.id}
                    course = {course}
                    ></Categories>)
                   }
                </div>
            </div>
        </div>
    );
};

export default Courses;