import React from "react";
import { Line } from "react-chartjs-2";
import { GoGraph } from "react-icons/go";
import "../../styles/dashboard/Graph.css";

const Graph = () => {
  return (
    <div className="Graph">
      <div className="title">
        <GoGraph />
        <h2>Graphs</h2>
      </div>
      <div className="graph">
        <Line
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "Last week's progress",
                data: [2, 3, 5, 2, 1, 3, 2],
                borderColor: "#2c2c54",
                borderWidth: 3,
              },
            ],
          }}
          height={300}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
