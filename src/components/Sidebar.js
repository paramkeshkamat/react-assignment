import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/context";
import {
  IoHomeSharp,
  IoBookSharp,
  IoTrophySharp,
  IoPeopleSharp,
  IoCloseOutline,
} from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [showCloseBtn, setShowCloseBtn] = useState(false);
  const { showSidebar, setShowSidebar } = useAppContext();

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) {
        setShowCloseBtn(true);
      } else {
        setShowCloseBtn(false);
      }
    };
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  });

  return (
    <div className={`Sidebar ${showSidebar && "show-sidebar"}`}>
      <div className="logo-header">
        <Link to="/">
          <h1 className="logo">Logo</h1>
        </Link>
        {showCloseBtn && <IoCloseOutline onClick={() => setShowSidebar(false)} />}
      </div>
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
