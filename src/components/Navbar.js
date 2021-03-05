import { IoNotificationsOutline, IoChevronDownOutline } from "react-icons/io5";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <IoNotificationsOutline />
      <div className="user-details">
        <p>username</p>
        <div className="user-profile">
          <img src="/no-profile-2.jpg" alt="profile" />
        </div>
        <IoChevronDownOutline />
      </div>
    </div>
  );
};

export default Navbar;
