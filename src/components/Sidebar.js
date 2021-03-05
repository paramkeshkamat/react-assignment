import {
  IoHomeSharp,
  IoBookSharp,
  IoTrophySharp,
  IoPeopleSharp,
} from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1 className="Logo">Logo</h1>
      <div className="sidebar-items">
        <div>
          <IoHomeSharp />
          <h3>Home</h3>
        </div>
        <div>
          <RiDashboardFill />
          <h3>Dashboard</h3>
        </div>
        <div>
          <IoBookSharp />
          <h3>My Courses</h3>
        </div>
        <div>
          <IoTrophySharp />
          <h3>Achievements</h3>
        </div>
        <div>
          <IoPeopleSharp />
          <h3>Forum</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
