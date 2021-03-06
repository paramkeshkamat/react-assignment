import Graph from "../components/dashboard/Graph";
import HomeworkProgress from "../components/dashboard/HomeworkProgress";
import Leaderboard from "../components/dashboard/Leaderboard";
import MyCourses from "../components/dashboard/MyCourses";
import TasksTodo from "../components/dashboard/TasksTodo";
import UpcomingLessons from "../components/dashboard/UpcomingLessons";
import "../styles/dashboard/index.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <UpcomingLessons />
      <TasksTodo />
      <Leaderboard />
      <MyCourses />
      <HomeworkProgress />
      <Graph />
      <br/>
    </div>
  );
};

export default Dashboard;
