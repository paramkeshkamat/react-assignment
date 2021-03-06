import axios from "axios";
import { useEffect, useState } from "react";
import { IoTrophySharp } from "react-icons/io5";
import "../../styles/dashboard/Leaderboard.css";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        "https://dummyapi.io/data/api/user?limit=5",
        {
          headers: { "app-id": "604335453486a039a846a452" },
        }
      );
      setUsers(response.data.data);
    };
    getUsers();
  }, []);
  return (
    <div className="Leaderboard">
      <div className="title">
        <IoTrophySharp />
        <h2>Leaderboard</h2>
      </div>
      <div className="leaderboard">
        {users.map((user, index) => {
          const { id, firstName, lastName, picture } = user;
          return (
            <div className="user" key={id}>
              <h3 className="rank">{index + 1}</h3>
              <img src={picture} alt={firstName} />
              <h3>
                {firstName} {lastName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Leaderboard;
