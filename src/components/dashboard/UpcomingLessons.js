import React from "react";
import { FaBook } from "react-icons/fa";
import "../../styles/dashboard/UpcomingLessons.css";

const UpcomingLessons = () => {
  return (
    <div className="UpcomingLessons">
      <div className="title">
        <FaBook />
        <h2>Upcoming Lessons</h2>
      </div>
    </div>
  );
};

export default UpcomingLessons;
