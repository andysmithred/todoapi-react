import { FaTimes } from "react-icons/fa";
// import styles from "../../index.css";

const Task = ({ task, onTaskDelete, onToggleComplete }) => {
  return (
    <div
      className={`task ${task.isComplete ? "complete" : ""}`}
      onDoubleClick={() => onToggleComplete(task.id)}
    >
      <h3>
        {task.name}
        <FaTimes
          onClick={() => onTaskDelete(task.id)}
          style={{ color: "lightblue" }}
        />
      </h3>
    </div>
  );
};

export default Task;
