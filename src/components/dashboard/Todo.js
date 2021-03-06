import { useState } from "react";

const Todo = ({ title, completed }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <div className="todo" style={{ opacity: isCompleted ? 0.3 : 1 }}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />
      <p>{title}</p>
    </div>
  );
};

export default Todo;
