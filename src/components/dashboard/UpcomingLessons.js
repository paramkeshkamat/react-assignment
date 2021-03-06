import React from "react";
import { FaBook } from "react-icons/fa";
import lessons from "../../data/lessons";
import "../../styles/dashboard/UpcomingLessons.css";

const UpcomingLessons = () => {
  return (
    <div className="UpcomingLessons">
      <div className="title">
        <FaBook />
        <h2>Upcoming Lessons</h2>
      </div>
      <div className="lessons">
        {lessons.map((lesson, index) => {
          const { date, time, lecture, subject } = lesson;
          return (
            <div className="lesson" key={index}>
              <div className="time">
                <h3>{date}</h3>
                <p>{time}</p>
              </div>
              <div className="subject">
                <h3>{lecture}</h3>
                <p>{subject}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpcomingLessons;
