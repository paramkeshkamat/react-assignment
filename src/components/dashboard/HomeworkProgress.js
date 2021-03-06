import React from "react";
import { GiProgression } from "react-icons/gi";
import homework from "../../data/homeworkProgress";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/dashboard/HomeworkProgress.css";

const HomeworkProgress = () => {
  return (
    <div className="HomeworkProgress">
      <div className="title">
        <GiProgression />
        <h2>Homework Progress</h2>
      </div>
      <div className="homework-progress">
        {homework.map((value, index) => {
          const { subject, progress, due } = value;
          return (
            <div className="progress" key={index}>
              <div>
                <h3>{subject}</h3>
                <p>
                  <span>DUE DATE:</span> {due}
                </p>
              </div>
              <CircularProgressbar value={progress} text={`${progress}%`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeworkProgress;
