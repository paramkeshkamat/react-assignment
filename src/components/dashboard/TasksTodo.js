import { useState, useEffect } from "react";
import axios from "axios";
import { FaTasks } from "react-icons/fa";
import "../../styles/dashboard/TasksTodo.css";
import Todo from "./Todo";

const TasksTodo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?limit=5"
        );
        setTodos(response.data.filter((todo) => todo.id < 7));
      } catch (err) {
        console.log(err.message);
      }
    };
    getTodos();
  }, []);

  return (
    <div className="TasksTodo">
      <div className="title">
        <FaTasks />
        <h2>Tasks To Do</h2>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default TasksTodo;
