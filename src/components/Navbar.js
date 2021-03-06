import { useEffect, useState } from "react";
import { useAppContext } from "../context/context";
import { IoNotificationsOutline, IoChevronDownOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const [showHamburger, setHowHamburger] = useState(false);
  const { showSidebar, setShowSidebar } = useAppContext();

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth < 768) {
        setHowHamburger(true);
      } else {
        setHowHamburger(false);
      }
    };
    window.addEventListener("resize", checkScreenWidth);
    return () => window.removeEventListener("resize", checkScreenWidth);
  });

  return (
    <div className="Navbar">
      <div
        style={{ display: showHamburger ? "block" : "none" }}
        className="hamburger"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaBars />
      </div>
      <div className="user-details">
        <IoNotificationsOutline />
        <p>username</p>
        <div className="user-profile">
          <img src="/no-profile.jpg" alt="profile" />
        </div>
        <IoChevronDownOutline />
      </div>
    </div>
  );
};

export default Navbar;
