import React from "react";
import { GiProgression } from "react-icons/gi";
import "../../styles/dashboard/HomeworkProgress.css";

const HomeworkProgress = () => {
  return (
    <div className="HomeworkProgress">
      <div className="title">
        <GiProgression />
        <h2>Homework Progress</h2>
      </div>
    </div>
  );
};

export default HomeworkProgress;
