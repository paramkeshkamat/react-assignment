import {
  IoHomeSharp,
  IoBookSharp,
  IoTrophySharp,
  IoPeopleSharp,
} from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link to="/">
        <h1 className="logo">Logo</h1>
      </Link>
      <div className="sidebar-items">
        <Link to="/">
          <IoHomeSharp />
          <h3>Home</h3>
        </Link>
        <Link to="/dashboard">
          <RiDashboardFill />
          <h3>Dashboard</h3>
        </Link>
        <Link to="/courses">
          <IoBookSharp />
          <h3>My Courses</h3>
        </Link>
        <Link to="/achievements">
          <IoTrophySharp />
          <h3>Achievements</h3>
        </Link>
        <Link to="/forum">
          <IoPeopleSharp />
          <h3>Forum</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
