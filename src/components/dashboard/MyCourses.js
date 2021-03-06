import React from "react";
import { Link } from "react-router-dom";
import { IoBookSharp } from "react-icons/io5";
import courses from "../../data/courses";
import "../../styles/dashboard/MyCourses.css";

const MyCourses = () => {
  return (
    <div className="MyCourses">
      <div className="title">
        <IoBookSharp />
        <h2>My Courses</h2>
        <Link to="/courses">SEE ALL</Link>
      </div>
      <div className="courses">
        {courses.map((course, index) => {
          const { courseId, subject, lessons, description } = course;
          return (
            <div className="course-card" key={courseId}>
              <h2>{subject}</h2>
              <p>{lessons} lessons</p>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyCourses;
