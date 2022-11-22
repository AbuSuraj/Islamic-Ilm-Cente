import React from "react";
import { Link } from "react-router-dom";

const CoursesHeading = ({ course }) => {
  const { id, name } = course;
  console.log(course);
  return (
    <div>
      <Link  to={`/course/${id}`} 
        // style={{width:124}}
        type="button"
        className="w-3/4 md:w-full text-xl border border-indigo-500 bg-blue-900 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease hover:bg-blue-600 focus:outline-none focus:shadow-outline"
      >
        {name}
      </Link>
    </div>
  );
};

export default CoursesHeading;
